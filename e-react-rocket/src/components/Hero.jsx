import React, { useState, useEffect } from "react";

import Button from "./Button";
import Section from "./Section";

const Hero = () => {
    const [backgroundImg, setBackgroundImg] = useState("");

    const handleClick = () => {
        console.log("Button clicked!");
    };

    useEffect(() => {
        const fetchImg = async () => {
            const imgUrl = "https://images.unsplash.com/photo-1436262513933-a0b06755c784?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            setBackgroundImg(imgUrl);
        };

        fetchImg();
    }, []);

    return (
        <>
            <Section
                id="hero"
                className="flex w-full flex-col items-start justify-center text-white bg-cover bg-center bg-no-repeat h-screen "
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
            >
                <div className="flex flex-col items-center bg-black bg-opacity-30 p-5 w-1/2 ">
                    <p className="text-lg text-neutral-950 mb-3 ">Spring/Summer Sale and more!</p>
                    <h1 className="text-4xl font-bold text-neutral-950 mb-3 ">Get up to 30% of new arrival</h1>

                    <Button
                        onClick={handleClick}
                    >
                        SHOP NOW
                    </Button>
                </div>
            </Section>
        </>
    );
};

export default Hero;
