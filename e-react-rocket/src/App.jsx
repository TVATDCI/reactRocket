import { useState } from "react";
import Hero from "./components/Hero";
import ImgFetcher from "./components/ImgFetcher";
import ImgSlider from "./components/ImgSlider";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [images, setImages] = useState([]);

  const handleImagesFetched = (fetchedImages) => {
    setImages(fetchedImages);
  };

  return (
    <>
      <Hero />
      <ImgFetcher count={4} onImagesFetched={handleImagesFetched} />
      <ImgSlider images={images} onSelect={(index) => console.log(`Selected image index: ${index}`)} />
      <SingleProduct />
    </>
  );
}

export default App;
