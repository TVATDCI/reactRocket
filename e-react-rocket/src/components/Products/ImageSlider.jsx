import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Herosection/Button";

const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 0;
  scroll-behavior: smooth;
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

function ImageSlider({ images }) {
  const navigate = useNavigate();

  const handleClick = (image) => {
    // Find the product associated with the clicked image
    navigate(`/products/${image.id}`);
  };

  return (
    <>
      <SliderContainer className="w-auto h-auto " >
        {images.slice(0, 6).map((image, index) => (
          <SliderImage
            key={index}
            src={image}
            alt={`Product image ${index + 1}`}
            onClick={() => handleClick(image)}
          />
        ))}
      </SliderContainer>
      <Button onClick={() => navigate("/products")}>View all products</Button>
    </>

  );
}

export default ImageSlider;
