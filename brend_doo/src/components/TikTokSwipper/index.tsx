import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function TikTokSlider({ action }: { action: () => void }) {
    const swiperRef = useRef<any>(null);
    const [isLast, setIsLast] = useState(false);
    const [isFirst, setIsFirst] = useState(true);

    const handlePrev = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="slider-container mt-[40px] relative flex items-center">
            <Swiper
                ref={swiperRef}
                onSlideChange={(swiper) => {
                    if (swiper?.isEnd) {
                        setIsLast(true);
                    } else {
                        setIsLast(false);
                    }
                    if (swiper?.activeIndex === 0) {
                        setIsFirst(true);
                    } else {
                        setIsFirst(false);
                    }
                }}
                spaceBetween={10}
                slidesPerView="auto"
                loop={false}
                className="mySwiper !pl-[40px] max-sm:!pl-[16px]"
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
                                        src="https://via.placeholder.com/200"
                                        alt="Slide"
                                        className="object-cover absolute inset-0 w-full h-full"
                                    />
                                    Zara ətək
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous Button */}
            <button
                style={{ display: isFirst ? 'none' : 'flex' }}
                onClick={handlePrev}
                className="absolute left-[20px] z-30 w-[52px] h-[52px] rounded-full flex justify-center items-center shadow-2xl bg-white"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Next Button */}
            <button
                style={{ display: isLast ? 'none' : 'flex' }}
                onClick={handleNext}
                className="absolute right-[20px] rotate-180 z-30 w-[52px] h-[52px] rounded-full flex justify-center items-center shadow-2xl bg-white"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}
