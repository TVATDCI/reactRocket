import React from "react";
import Section from "./Section";
import Button from "./Button";
import styled from "styled-components";

const SingleProduct = () => {
    return (
        <Section>
            <div className="spWrapper relative lg:flex w-full ">
                <div className="leftContainer lg:w-1/4 sm:w-full md:w-1/2 ">
                    <div className="imgCon bg-neutral-300 min-h-[100vh] ">
                        <img
                            src="https://picsum.photos/200/300?random=710hhttps://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-full min-w-[320px] h-auto object-cover  "
                        />
                    </div>
                </div>
                <div className="rightContainer relative flex-col w-full bg-neutral-300 p-10 ">
                    <div className="topContainer h-1/2 w-auto ">
                        <div className="spInfoCard flex flex-col items-start text-neutral-800 ">
                            <h1 className="h1 mb-5">Fish steak</h1>
                            <p className="mb-5">Product description</p>
                            <h3>Product info</h3>
                            <p className="body-2 mb-5">Cat:</p>
                            <p className="mb-5">Price:</p>
                            <p className="mb-5">Stock:</p>
                            <p className="mb-5">Rating:</p>
                            <Button>Buy now</Button>
                        </div>
                    </div>
                    <div className="bottomContainer flex flex-wrap gap-14 mt-32 ">
                        <div className="reviewCard block relative p-0.5rem bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar">
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
                        <div className="reviewCard block relative p-0.5rem bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar">
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
                        <div className="reviewCard block relative p-0.5rem bg-neutral-100 w-[24rem] h-[20rem] text-neutral-800 ">
                            <div className="svgStar">
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
