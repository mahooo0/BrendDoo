import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Sample slider items
const sliderItems = [
    {
        id: 1,
        content: 'Slide 1 Content',
        imageUrl: 'https://via.placeholder.com/600x400/ff7f7f',
    },
    {
        id: 2,
        content: 'Slide 2 Content',
        imageUrl: 'https://via.placeholder.com/600x400/7f7fff',
    },
    {
        id: 3,
        content: 'Slide 3 Content',
        imageUrl: 'https://via.placeholder.com/600x400/7fff7f',
    },
    // Add more slides as needed
];

export default function InstaqramSlider() {
    return (
        <div className="slider-container mt-[40px]">
            <Swiper
                spaceBetween={10} // Space between slides
                slidesPerView={'auto'} // Show one slide at a time
                loop={false} // Loop the slider
                // Enable pagination dots
                navigation={false} // Enable navigation buttons (optional)
                className="mySwiper !pl-[40px]"
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <SwiperSlide className="!w-fit" key={i}>
                        <div className="flex flex-col self-stretch my-auto w-[120px]">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc0524557a5b5f95d5925443b25e57f13a0523ba738c0ece794608e7e857684d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain self-center max-w-full aspect-square rounded-[100px] w-[120px]"
                            />
                            <div className="mt-3">Pencək</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
