import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Borttomswipper({ isopen }: { isopen: boolean }) {
    const innerSwiperRef = useRef<any>(); // Separate ref for the inner Swiper
    const handleNext = () => {
        if (innerSwiperRef.current && innerSwiperRef.current.swiper) {
            innerSwiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (innerSwiperRef.current && innerSwiperRef.current.swiper) {
            innerSwiperRef.current.swiper.slidePrev();
        }
    };
    if (isopen) {
        return (
            <div className=" absolute  bottom-0 z-[9999]  w-full h-[30%] p-[12px}">
                <div className="w-full flex flex-row justify-between px-[24px] mb-2">
                    <button
                        onClick={handlePrev}
                        className="rounded-full bg-black bg-opacity-10 w-[32px] flex justify-center items-center aspect-square"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.33333 12.6667C5.33333 12.1721 4.84467 11.4334 4.35 10.8134C3.714 10.0134 2.954 9.31541 2.08267 8.78275C1.42933 8.38341 0.637333 8.00008 -4.76837e-07 8.00008M-4.76837e-07 8.00008C0.637333 8.00008 1.43 7.61675 2.08267 7.21741C2.954 6.68408 3.714 5.98608 4.35 5.18741C4.84467 4.56675 5.33333 3.82675 5.33333 3.33341M-4.76837e-07 8.00008L16 8.00008"
                                stroke="white"
                                stroke-width="1.5"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="rounded-full bg-black bg-opacity-10 w-[32px] rotate-180 flex justify-center items-center aspect-square"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.33333 12.6667C5.33333 12.1721 4.84467 11.4334 4.35 10.8134C3.714 10.0134 2.954 9.31541 2.08267 8.78275C1.42933 8.38341 0.637333 8.00008 -4.76837e-07 8.00008M-4.76837e-07 8.00008C0.637333 8.00008 1.43 7.61675 2.08267 7.21741C2.954 6.68408 3.714 5.98608 4.35 5.18741C4.84467 4.56675 5.33333 3.82675 5.33333 3.33341M-4.76837e-07 8.00008L16 8.00008"
                                stroke="white"
                                stroke-width="1.5"
                            />
                        </svg>
                    </button>
                </div>
                <Swiper
                    ref={innerSwiperRef}
                    slidesPerView={1}
                    cursor-grab
                    spaceBetween={12}
                    onSwiper={(swiper) => {
                        // Prevent event propagation
                        swiper.el.addEventListener('touchstart', (e) =>
                            e.stopPropagation()
                        );
                    }}
                    className="!h-fit !px-2"
                    // Set to show three slides at a time
                >
                    {Array.from({ length: 5 }).map((_, i) => (
                        <SwiperSlide
                            key={i}
                            className=" !flex !justify-center items-end pb-[24px]"
                        >
                            <div className="flex px-[7px]  gap-2 flex-row justify-around w-full bg-white bg-opacity-80  items-center rounded-[20px]">
                                <img
                                    src="https://placehold.co/600x400"
                                    alt=""
                                    className="w-[60px] aspect-square rounded-xl object-cover"
                                />
                                <div className="flex flex-col w-[160px]">
                                    <h6 className="text-[14px] font-[400]">
                                        İki tərəfli zara qalın pencək
                                    </h6>
                                    <p className="text-[14px] font-[400]">
                                        298 AZN
                                    </p>
                                </div>{' '}
                                <button className="px-[12px] py-[8px] h-fit rounded-[20px] bg-[#B1C7E4] text-nowrap ">
                                    indi all
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
