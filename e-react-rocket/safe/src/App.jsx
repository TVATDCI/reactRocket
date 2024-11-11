import { Routes, Router } from "react-router-dom";
import { useState } from "react";
import Hero from "./components/Hero";
import ImgFetcher from "./components/ImgFetcher";
import ImgSlider from "./components/ImgSlider";
import ProductGallery from "./components/ProductGallery";

import SingleProduct from "./components/Products/SingleProduct";

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
    setIsVisible(true); // Show SingleProduct when the main image is clicked
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Hero />
      <ImgFetcher count={4} onImagesFetched={handleImagesFetched} />
      <ImgSlider images={images} onSelect={handleImageSelect} onMainImageClick={handleMainImageClick} />
      <ProductGallery mainImageId={mainImageId} selectedImage={images[selectedImageIndex]} isVisible={isVisible} toggleVisibility={toggleVisibility} />
      <SingleProduct />

    </>
  );
}

export default App;