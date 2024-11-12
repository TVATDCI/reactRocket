import { useState, useEffect, useRef } from "react";

const PhotoFetcher = ({ count = 3, onImagesFetched }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return;

        const fetchImages = async () => {
            try {
                const imgUrls = Array.from(
                    { length: count },
                    () =>
                        `https://picsum.photos/200/300?random=${Math.floor(
                            Math.random() * 1000
                        )}`
                );
                setImages(imgUrls);
                const mainImageId = imgUrls[0].split("=")[1]; // Extract the ID of the main image
                onImagesFetched(imgUrls, mainImageId); // Pass the fetched images and main image ID to the parent component
                fetchedRef.current = true;
            } catch (err) {
                setError(err.message);
            }
        };

        fetchImages();
    }, [count, onImagesFetched]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return null; // Return null as this component does not render anything itself
};

export default PhotoFetcher;
