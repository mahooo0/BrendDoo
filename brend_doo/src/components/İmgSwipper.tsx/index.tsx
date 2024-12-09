import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Sample slider items

export default function ImageSwipper() {
    const swiperRef = useRef<any>();
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <div className="slider-container   lg:w-[60%] w-full  lg:aspect-square  aspect-auto rounded-[20px] overflow-hidden relative">
            <Swiper
                ref={swiperRef}
                spaceBetween={10} // Space between slides
                slidesPerView={1}
                loop={false} // Loop the slider
                // Enable pagination dots
                navigation={false} // Enable navigation buttons (optional)
                className="mySwiper rounded-[20px] overflow-hidden lg:!h-full !h-[500px]  "
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide key={i} className="!h-full">
                        <img
                            src="https://placehold.co/600x400"
                            alt=""
                            className="w-full  h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <section className="absolute bottom-3 z-50 w-full px-2">
                <div className="flex overflow-hidden  justify-between flex-wrap gap-10 px-6 py-5 rounded-3xl bg-white bg-opacity-80  max-md:px-5">
                    <div className="flex flex-col">
                        <div className="text-base text-black">
                            Zara jeans don
                        </div>
                        <div className="flex gap-2 items-center mt-2">
                            <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                <span className="text-black line-through">
                                    298 AZN
                                </span>
                            </div>
                            <div className="self-stretch my-auto text-base font-semibold text-rose-500">
                                298 AZN
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center my-auto text-base whitespace-nowrap text-black text-opacity-80">
                        <button
                            style={{
                                boxShadow: '0px 0px 12px rgba(0,0,0,0.08)',
                            }}
                            onClick={handlePrev}
                            className="cursor-pointer w-[44px] h-[44px] bg-white flex justify-center items-center rounded-full rotate-180 bg-opacity-[22%] hover:bg-opacity-[40%] duration-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.5 6L15.5 12L9.5 18"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>

                        <div className="self-stretch my-auto">1/10</div>
                        <button
                            onClick={handleNext}
                            style={{
                                boxShadow: '0px 0px 12px rgba(0,0,0,0.08)',
                            }}
                            className="cursor-pointer w-[44px] h-[44px] bg-white flex justify-center items-center rounded-full bg-opacity-[22%] hover:bg-opacity-[40%] duration-300"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.5 6L15.5 12L9.5 18"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
