import React, { useState } from "react";
import styled from "styled-components";

const ImgSlider = ({ images, onSelect, onMainImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        onSelect(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        onSelect(newIndex);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        onSelect(index);
    };

    const handleMainImageClick = () => {
        console.log(`Main image clicked: ${images[currentIndex]}`);
        onMainImageClick(); // Call the handler to show SingleProduct
    };

    return (
        <SliderContainer className="relative">
            <h1 className="text-4xl font-bold flex justify-center text-neutral-100 ">
                Black Friday Special Offer!
            </h1>
            <StyledSlider>
                <SliderArrows onClick={handlePrevClick}>
                    <span style={{ color: "red" }}>&#x2B9C;</span>
                </SliderArrows>

                <StyledThumbnailSlider>
                    {images.map((img, index) => (
                        <StyledThumbnail
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                            isActive={index === currentIndex}
                        />
                    ))}
                </StyledThumbnailSlider>
                <SliderArrows onClick={handleNextClick}>
                    <span style={{ color: "red" }}>&#x2B9E;</span>
                </SliderArrows>
            </StyledSlider>

            <p className="text-white mt-3 border-y-2 ">
                Click on the image to view more details
            </p>
            <StyledMainImage
                src={images[currentIndex]}
                alt="Main Image"
                onClick={handleMainImageClick}
            />
            {/**
            <DetailContainer>
                <h2 className="text-2xl font-bold text-white text-center">Product name selected</h2>
                <p className="text-white">
                    This is a placeholder text for product details. You can replace this
                    with actual product information.
                </p>
            </DetailContainer>
            */}
        </SliderContainer>
    );
};

export default ImgSlider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const StyledThumbnailSlider = styled.div`
display: flex; /* Display thumbnails in a row */
background - color: red;
`;

const StyledMainImage = styled.img`
display: flex;
justify - content: center;
width: 400px;
height: 400px;
object - fit: cover;
margin: 20px;
cursor: pointer; /* Add cursor pointer to indicate it's clickable */
`;

const StyledThumbnail = styled.img`
width: 150px;
height: 150px;
object - fit: cover;
border-bottom: 2px solid ${(props) =>
        props.isActive ? "#83051ae6" : "transparent"};
cursor: pointer;
margin: 0 23px;
`;

const SliderArrows = styled.div`
cursor: pointer;
font - size: 4rem;
user - select: none;
`;

const DetailContainer = styled.div`
  padding: 20px;
  background-color: #333;
  color: white;
`;
