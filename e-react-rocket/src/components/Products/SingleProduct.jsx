import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import styled from "styled-components";
import ImageSlider from "./ImageSlider"; // Import the new ImageSlider component
import Button from "../Herosection/Button";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const ProductImage = styled.img`
  width: 320px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

const ProductTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 1px;
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #333;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <ProductContainer>
      {/* Product main image */}
      <ProductImage src={product.thumbnail} alt={product.title} />
      {/* Image Slider Component */}
      <ImageSlider
        images={product.images} // Pass the images array to the ImageSlider component
      />


      {/* Product details */}
      <ProductDetails>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          <BoldText>Price:</BoldText> ${product.price}
        </ProductPrice>
      </ProductDetails>
      {/* Button to add product to cart (or any other action) */}
      <Button onClick={() => navigate("/cart")}>Add to Cart</Button>
    </ProductContainer>
  );
}

export default SingleProduct;
