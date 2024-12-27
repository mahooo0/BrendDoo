import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Product } from '../../setting/Types';

// Sample slider items

export default function ImageSwipper({
    data,
}: {
    data: Product[] | undefined;
}) {
    const swiperRef = useRef<any>();
    const [currecntProduct, setCurrecntProduct] = useState<number>(0);
    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            if (data?.length) {
                if (data?.length === currecntProduct + 1) {
                    setCurrecntProduct(currecntProduct);
                } else {
                    setCurrecntProduct(currecntProduct + 1);
                }
            }
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();

            if (0 === currecntProduct) {
                setCurrecntProduct(currecntProduct);
            } else {
                setCurrecntProduct(currecntProduct - 1);
            }
        }
    };
    // useEffect(() => {
    //     console.log('current product:', data && data[currecntProduct]);
    // }, [currecntProduct]);
    // console.log('data', data);

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
                {data?.map((item: Product) => (
                    <SwiperSlide key={item.id} className="!h-full !relative">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full  h-full object-cover"
                        />
                        <div className="flex overflow-hidden h-[88px] absolute bottom-2 w-full  justify-between flex-wrap gap-10 px-6 py-5 rounded-3xl bg-white max-sm:bg-opacity-40 bg-opacity-80  max-md:px-5">
                            <div className="flex flex-col absolute bu">
                                <div className="text-base text-black">
                                    {item?.title}
                                </div>
                                <div className="flex gap-2 items-center mt-2">
                                    <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                        <span className="text-black line-through">
                                            {item?.price}{' '}
                                        </span>
                                    </div>
                                    <div className="self-stretch my-auto text-base font-semibold text-rose-500">
                                        {item?.discounted_price}{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <section className="absolute bottom-[30px]  right-3 z-10 w-fit px-2">
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

                    <div className="self-stretch my-auto">
                        {currecntProduct + 1}/{data?.length}
                    </div>
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
            </section>
        </div>
    );
}
