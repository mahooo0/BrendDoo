import React, { useState, MouseEvent, useEffect } from 'react';
import { useShowMagnify } from '../../hooks/useShowMagnify';

interface ImageMagnifierProps {
    src: string;
    width: number | string;
    height: number | string;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src }) => {
    const [[], setSize] = useState([0, 0]);
    // const [[x, y], setXY] = useState([0, 0]);
    const { setShowMagnifier, setXY, setImg_url } = useShowMagnify();
    // const [showMagnifier, setShowMagnifier] = useState(false);
    useEffect(() => {
        setImg_url(src);
    }, [src]);
    return (
        <div className=" h-full">
            {/* Original Image */}
            <div className=" w-full h-full">
                <img
                    src={src}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '1px solid #ddd',
                        cursor: 'zoom-in',
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                        // Update image size and show magnifier
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e: MouseEvent<HTMLImageElement>) => {
                        // Update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        setShowMagnifier(false);
                    }}
                    alt="Product"
                />
            </div>

            {/* Magnified Version Positioned to the Right */}
            {/* {showMagnifier && (
                <div
                    className="!fixed  z-50"
                    style={{
                        width: magnifierWidth,
                        height: magnifierHeight,
                        border: '1px solid lightgray',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${imgWidth * zoomLevel}px ${
                            imgHeight * zoomLevel
                        }px`,
                        backgroundPositionX: `${
                            -x * zoomLevel + magnifierWidth / 2
                        }px`,
                        backgroundPositionY: `${
                            -y * zoomLevel + magnifierHeight / 2
                        }px`,
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                ></div>
            )} */}

            <div className="bg-black absolute z-50 top-0 left-[100%] w-[500px] h-[500px] "></div>
        </div>
    );
};

export default ImageMagnifier;
