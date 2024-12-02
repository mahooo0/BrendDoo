import React, { useEffect } from 'react';
import ClothingMenu from '../ClothingMenu';

interface CatalogBarProps {
    isCatalogOpen: boolean;
    setIsCatalogOpen: (value: boolean) => void;
}

export const CatalogBar: React.FC<CatalogBarProps> = ({
    isCatalogOpen,
    setIsCatalogOpen,
}) => {
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 console.log(
    //                     entry.isIntersecting ? 'visible' : 'not visible'
    //                 );
    //             });
    //         },
    //         { threshold: 0 }
    //     );

    //     const element = document.querySelector('.catalog-bar');
    //     if (element) {
    //         observer.observe(element);
    //     }

    //     return () => {
    //         if (element) {
    //             observer.unobserve(element);
    //         }
    //     };
    // }, []);

    return (
        <div
            className=" absolute top-[100%] w-full h-[200vh] px-10 py-2 z-[99999999999]"
            style={isCatalogOpen ? { display: 'block' } : { display: 'none' }}
        >
            <div
                className="h-[200vh] bg-black bg-opacity-60 w-full absolute top-0 left-0 z-[-1] "
                onClick={() => {
                    setIsCatalogOpen(false);
                }}
            ></div>
            <ClothingMenu setIsCatalogOpen={setIsCatalogOpen} />
        </div>
    );
};
