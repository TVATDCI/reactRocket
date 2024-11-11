import { useState } from "react";
import Hero from "./components/Hero";
import ImgFetcher from "./components/ImgFetcher";
import ImgSlider from "./components/ImgSlider";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [images, setImages] = useState([]);
  const [mainImageId, setMainImageId] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagesFetched = (fetchedImages, mainImageId) => {
    setImages(fetchedImages);
    setMainImageId(mainImageId);
  };

  // Handle the image selection = Img Handler. So That the selected image index in ImgSlider.jsx is passed to the SingleProduct.jsx component as well.
  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Hero />
      <ImgFetcher count={7} onImagesFetched={handleImagesFetched} />
      <ImgSlider images={images} onSelect={handleImageSelect} />
      <SingleProduct mainImageId={mainImageId} selectedImage={images[selectedImageIndex]} />
    </>
  );
}

export default App;
