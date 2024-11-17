import React, { useContext, useState, useEffect } from "react"; // UseState to manage the main image
import { useParams, useNavigate } from "react-router-dom"; // UseParams to get the product id
import { ProductContext } from "../../context/ProductContext";
import styled from "styled-components";
import ImageSlider from "./ImageSlider"; // Import the new ImageSlider component
import Button from "../Herosection/Button";

// Product Container
const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0px;
  background-color: #f0f0f0;
  min-height: 100vh;
  margin-top: 70px; /* Adjusted for better spacing */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 375px) {
    margin-top: 30px;
  }
`;

const ProductImgCon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  margin-right: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    padding: 0;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 600px; /* Make the main image larger */
  height: auto;
  border-radius: 8px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.8);
`;

// Thumbnail Image Styling
const ProductThumbnail = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  position: absolute;
  bottom: -60px;
  left: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 100px; /* Smaller thumbnail for mobile */
    height: 100px;
    left: 10px;
  }
`;

// Product Details Section
const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
  backdrop-filter: blur(30px);
  background-color: rgba(255, 255, 255, 0.8);
`;

// Product Title
const ProductTitle = styled.h1`
  font-size: 2.2em;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Product Description
const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

// Product Price
const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #c19a6b;
  font-weight: bold;
  margin-bottom: 15px;
`;

// Review Section
const ReviewContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  color: #c19a6b;
  font-size: 1.5em;
  margin-right: 5px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ReviewText = styled.p`
  font-size: 1em;
  color: #333;
  margin: 5px 0;
`;

// Add to Cart Button
const AddButton = styled(Button)`
  background-color: #8b4513;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a0522d;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); // add the updated state to manage the main image
  const [message, setMessage] = useState("");

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
    setMainImage(foundProduct?.thumbnail); // Set the main image to the thumbnail
  }, [id, products]);

  if (!product) {
    return (
      <ProductContainer>
        <h2>Product not found</h2>
      </ProductContainer>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<Star key={i}>&#9733;</Star>); // Filled star
      } else {
        stars.push(<Star key={i}>&#9734;</Star>); // Empty star
      }
    }
    return stars;
  };

  function handleAddButton(product) {
    // Your logic for adding the product to the cart
    setMessage("Product added to cart");
    alert("Product added to cart");
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <ProductContainer>
      <ProductImgCon>
        <ProductImage src={mainImage} alt={product.title} />
        {/*{product.images && product.images.length > 0 && (
          <ProductThumbnail
            src={product.images[0]}
            alt="Product thumbnail"
            onClick={() => navigate(`/products/${product.id}`)}
          />
        )}
        */}

        {/* Modifying Image Slider Component */}
        <ImageSlider
          images={product.images}
          onThumbnailClick={handleThumbnailClick}
        />
      </ProductImgCon>

      {/* Product Details */}
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          <BoldText>Price:</BoldText> ${product.price}
        </ProductPrice>
        {/* Other product details */}
        {/* Add your extra information like availability, category, etc. */}
        <AddButton onClick={() => handleAddButton(product)}>
          Add to Cart
        </AddButton>
      </ProductDetails>

      {/* Reviews Section */}
      <ReviewContainer>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <ReviewBox key={index}>
              <StarRating>{renderStars(review.rating)}</StarRating>
              <ReviewText>
                <BoldText>Reviewer Name:</BoldText> {review.reviewerName}
              </ReviewText>
              <ReviewText>
                <BoldText>Reviewer Email:</BoldText> {review.reviewerEmail}
              </ReviewText>
              <ReviewText>
                <BoldText>Comment:</BoldText> {review.comment}
              </ReviewText>
            </ReviewBox>
          ))
        ) : (
          <p>No reviews available for this product.</p>
        )}
      </ReviewContainer>
    </ProductContainer>
  );
}

export default SingleProduct;
