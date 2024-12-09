import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Sample slider items

export default function TikTokSlider({ action }: { action: () => void }) {
    const swiperRef = useRef<any>();

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="slider-container mt-[40px] relative flex items-center">
            <Swiper
                ref={swiperRef}
                spaceBetween={10} // Space between slides
                slidesPerView={'auto'} // Show one slide at a time
                loop={false} // Loop the slider
                // Enable pagination dots
                navigation={false} // Enable navigation buttons (optional)
                className="mySwiper !pl-[40px]"
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide className="!w-fit" key={i}>
                        <div
                            onClick={action}
                            className="flex overflow-hidden flex-col justify-center text-xs font-semibold text-white w-[216px] border-[#A97EFF] border-2 p-2 rounded-[20px]"
                        >
                            <div className="flex overflow-hidden flex-col rounded-3xl bg-neutral-100">
                                <div className="flex relative flex-col px-5 pt-5 pb-48 w-full aspect-[0.714] cursor-pointer">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0afcea1e2cd01e52a1523d13bf848e31562e81345dff47332bd798c603e23eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2400 2400w"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    Zara ətək
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                onClick={handlePrev}
                className=" absolute left-[20px]  z-30 w-[52px] h-[52px] rounded-full flex justify-center items-center shadow-2xl bg-white"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.5 18L8.5 12L14.5 6"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>{' '}
        </div>
    );
}
