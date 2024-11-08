import React, { useState } from "react";
import styled from "styled-components";

const ImgSlider = ({ images, onSelect }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
        onSelect(index);
    };

    return (
        <StyledSlider>
            <StyledMainImage src={images[currentIndex]} alt="Main Image" />
            <SliderArrows onClick={handlePrevClick}>{"<"}</SliderArrows>
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
            <SliderArrows onClick={handleNextClick}>{">"}</SliderArrows>
        </StyledSlider>
    );
};

export default ImgSlider;

const StyledSlider = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledMainImage = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;
    margin-top: 10px;
    margin-bottom: 10px;

    `;

const StyledThumbnailSlider = styled.div`
display: flex;
justify - content: center;
gap: 10px;
margin - top: 10px;
`;

const StyledThumbnail = styled.img`
width: 150px;
height: 150px;
object - fit: cover;
padding: 10px;
border: 2px solid ${(props) => (props.isActive ? "yellow" : "transparent")};
cursor: pointer;
transition: border 0.3s ease;
`;

const SliderArrows = styled.div`
cursor: pointer;
font - size: 4rem;
font - weight: bold;
user - select: none; 
color: red;

`;



