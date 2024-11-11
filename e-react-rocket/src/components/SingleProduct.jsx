import React from "react";
import Section from "./Section";
import Button from "./Button";

const SingleProduct = ({ mainImageId, selectedImage }) => {
    const mainImageUrl = `https://picsum.photos/200/300?random=${mainImageId}`;

    return (
        <Section>
            <div className="spWrapper relative lg:flex w-full ">
                <div className="leftContainer lg:w-1/4 sm:w-full md:w-1/2 ">
                    <div className="imgCon bg-neutral-300 min-h-[100vh] ">
                        <img
                            className="w-full h-full object-cover"
                            src={selectedImage}
                            alt="Selected Product"
                        />
                    </div>
                </div>
                <div className="rightContainer relative flex-col w-full bg-neutral-300 p-10 ">
                    <div className="topContainer h-1/2 w-auto ">
                        <div className="spInfoCard flex flex-col items-start text-neutral-800 ">
                            <h2 className="h2 mb-5">Product name:</h2>
                            <p className="mb-5">Product description</p>
                            <h3>Product info</h3>
                            <p className="body-2 mb-5">Cat:</p>
                            <p className="mb-5">Price:</p>
                            <p className="mb-5">Stock:</p>
                            <p className="mb-5">Rating:</p>
                            <Button>Buy now</Button>
                        </div>
                    </div>
                    <div className="bottomContainer flex flex-wrap gap-14 mt-2 ">
                        <div className="reviewCard block relative p-2 bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar mb-4">
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>{" "}
                            </div>
                            <h3 className="mb-5">Reviews-1</h3>
                            <p className="mb-5">Review name:</p>
                            <p className="mb-5">Review comment:</p>
                            <p className="mb-5">Review date:</p>
                        </div>
                        <div className="reviewCard block relative p-2 bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar mb-2 ">
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>{" "}
                            </div>
                            <h3>Reviews-2</h3>
                            <p>Review name:</p>
                            <p>Review comment:</p>
                            <p>Review date:</p>
                        </div>
                        <div className="reviewCard block relative p-2 bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar mb-4 ">
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>
                                <span>&#x2B50;</span>{" "}
                            </div>
                            <h3>Reviews-3</h3>
                            <p>Review name:</p>
                            <p>Review comment:</p>
                            <p>Review date:</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SingleProduct;
