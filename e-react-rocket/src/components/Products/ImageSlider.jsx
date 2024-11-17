import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Herosection/Button";

// Image Slider Container (inside ProductImgCon)
const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 0;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

const SliderImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

function ImageSlider({ images, onThumbnailClick }) {
  const navigate = useNavigate();

  const handleClick = (image) => {
    // useNavigate hook to navigate to the product page and pass the image id as a parameter
    navigate(`/products/${image.id}`);
  };

  return (
    <>
      <SliderContainer className=" ">
        {images.slice(0, 6).map((image, index) => (
          <SliderImage
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            onClick={() => onThumbnailClick(image)}
          />
        ))}
      </SliderContainer>
      <Button onClick={() => navigate("/products")}>View all products</Button>
    </>
  );
}

export default ImageSlider;

/**
 * The idea is to create a reusable ImageSlider component that displays a list of images.
 
* In this case, i useNavigate hook to navigate to the product page and pass the image id as a parameter.
* The ImageSlider receives an array of images as a prop and displays the first six images in the array (images.slice(0, 6)).
* With ((image, index) => (, i can access the image and its index in the array. When an image is clicked, the handleClick function is called with the image as an argument.

Then, alt={`Product image ${index + 1}`} is used to set the alt attribute of the slider image.It is set to dynamically generated using template literals with a static string 

"Product image". Index is incremented by 1 to start from 1 instead of 0. You can it the unique alt key for each image.

* It will be very useful to have a reusable ImageSlider component that can be used in different parts of the application to display a list of images!
 
* Information retrieved from: https://reactrouter.com/docs/en/v6/api#usenavigate

Finally, The Button with onClick={() => navigate("/products")} is used to navigate back to the products page when clicked.
 */
