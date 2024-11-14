import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import LoginSignup from "./components/Login/LoginSignup";
import ForgotPassword from "./components/Login/ForgotPassword";
import ForgotEmail from "./components/Login/ForgotEmail";
import SingleProduct from "./components/Products/SingleProduct";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout";
import Trending_products from "./components/Trending/Trending_products";
import ImgFetcher from "./components/gallery/ImgFetcher";
import ImgSlider from "./components/gallery/ImgSlider";
import ProductGallery from "./components/gallery/ProductGallery";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [images, setImages] = useState([]);
  const [mainImageId, setMainImageId] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleImagesFetched = (fetchedImages, mainImageId) => {
    setImages(fetchedImages);
    setMainImageId(mainImageId);
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const handleMainImageClick = () => {
    setIsVisible(true); // Show SingleProduct when the main image is clicked. The action happens in the ImgSlider component.
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Trending_products />
              {/* counter display the number of imgThumbnail in Imgslider.jsx */}
              <ImgFetcher count={8} onImagesFetched={handleImagesFetched} />
              <ImgSlider
                images={images}
                onSelect={handleImageSelect}
                onMainImageClick={handleMainImageClick}
              />
              <ProductGallery
                mainImageId={mainImageId}
                selectedImage={images[selectedImageIndex]}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
              />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Layout>
              <SingleProduct />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginSignup />
            </Layout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <Layout>
              <ForgotPassword />
            </Layout>
          }
        />
        <Route
          path="/forgot-email"
          element={
            <Layout>
              <ForgotEmail />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
