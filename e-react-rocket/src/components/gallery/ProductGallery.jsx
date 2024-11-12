import React from "react";
import Button from "../Herosection/Button";
import Section from "../Herosection/Section";

const ProductGallery = ({
    mainImageId,
    selectedImage,
    isVisible,
    toggleVisibility,
}) => {
    return (
        <>
            {isVisible && (
                <Section>
                    <div
                        id="single-product"
                        className="flex flex-col w-full items-center justify-center text-white bg-cover bg-center bg-no-repeat h-screen "
                        style={{
                            backgroundImage: `url(${selectedImage})`,
                        }}
                    >
                        <div
                            id="single-product"
                            className="bg-black bg-opacity-90 flex items-center justify-center bg-no-repeat bg-center text-white h-screen w-full backdrop-blur"
                            onClick={toggleVisibility}
                            style={{
                                backgroundImage: `url(${selectedImage})`,
                                width: "100%",
                                height: "100%",
                            }}
                        ></div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-black bg-opacity-30 p-5 w-1/2 ">
                        <p className="text-lg text-neutral-300- mb-3 ">Release date!</p>
                        <h1 className="text-4xl font-bold text-neutral-300 mb-5 ">
                            Product name
                        </h1>
                        <p className="text-neutral-300- mb-16 ">
                            Info: This is a placeholder text for product details. You can
                            replace this
                        </p>
                        <p className="text-neutral-300- mb-3 ">Cat: nr:629466</p>
                        <p className="text-neutral-300- mb-3 ">Price: 999 kr</p>
                        <p className="text-neutral-300- mb-3 ">Color: Black</p>
                        <p className="text-neutral-300- mb-3 ">Size: 38</p>
                        <p className="text-neutral-300- mb-16 ">Quantity: 1</p>
                        <Button>ADD TO CART</Button>
                        <Button onClick={toggleVisibility}>CLOSE</Button>
                    </div>
                </Section>
            )}
        </>
    );
};

export default ProductGallery;
