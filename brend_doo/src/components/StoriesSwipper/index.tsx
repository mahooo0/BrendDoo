import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Borttomswipper from './borttomswipper';
import { Tiktoks } from '../../setting/Types';

export default function StoriesSwipper({
    isopen,
    onclose,
    Currentslide,
    Tiktoks,
}: {
    Tiktoks: Tiktoks | undefined;
    isopen: boolean;
    onclose: () => void;
    Currentslide: number;
}) {
    const swiperRef = useRef<any>();
    const [currentslide, setcurrentslide] = useState<number>(Currentslide);

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const activeIndex = swiperRef.current.swiper.activeIndex;
            setcurrentslide(activeIndex);
            console.log('Central Slide Index:', activeIndex);
        }
    };
    useEffect(() => {
        Currentslide !== currentslide &&
            swiperRef.current.swiper.slideTo(Currentslide);
    }, [Currentslide]);
    return (
        <section
            className="w-full h-[100vh] bg-black fixed top-0 left-0 z-[99999999999999]"
            style={isopen ? { display: 'block' } : { display: 'none' }}
        >
            <div className="w-full h-full">
                <div className="relative flex justify-center items-center w-full h-[100vh]">
                    <Swiper
                        className="!w-full h-full "
                        spaceBetween={'80px'}
                        // grabCursor={true}
                        ref={swiperRef}
                        onSlideChange={handleSlideChange}
                        // slidesPerView={5} // Set to show three slides at a time
                        centeredSlides={true} // Center the active slide
                        // slidesPerGroup={1}
                        initialSlide={3} // Start with a specific slide
                        loop={false}
                        navigation={false}
                        breakpoints={{
                            1240: { slidesPerView: 5, spaceBetween: '200px' },
                            768: { slidesPerView: 3 },
                            556: { slidesPerView: 2 },
                            320: { slidesPerView: 1 },
                        }}
                    >
                        {Tiktoks?.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                className={`lg:!h-full !flex items-center  h-auto lg:px-0 !px-5`}
                            >
                                <div
                                    className={` ${
                                        currentslide === i
                                            ? 'lg:scale-[1.1] max-md:[1.1]'
                                            : ' lg:scale-[0.9]'
                                    }   transition-all duration-300 w-[100%]  h-fit flex justify-center items-center    relative`}
                                >
                                    <div
                                        className={`relative ${
                                            currentslide === i
                                                ? 'opacity-100'
                                                : 'opacity-50'
                                        }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="rounded-[20px] overflow-hidden  object-cover min-w-[300px] w-full h-[400px]"
                                        />

                                        <Borttomswipper
                                            products={item.products}
                                            isopen={currentslide === i}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* {Array.from({ length: 20 }).map((_: any, i: number) => (
                            <SwiperSlide
                                key={i}
                                className={`lg:!h-full !flex items-center  h-auto lg:px-0 !px-5`}
                            >
                                <div
                                    className={` ${
                                        currentslide === i
                                            ? 'lg:scale-[1.1] max-md:[1.1]'
                                            : ' lg:scale-[0.9]'
                                    }   transition-all duration-300 w-[100%]  h-fit flex justify-center items-center    relative`}
                                >
                                    <div
                                        className={`relative ${
                                            currentslide === i
                                                ? 'opacity-100'
                                                : 'opacity-50'
                                        }`}
                                    >
                                        <img
                                            src="https://placehold.co/600x400"
                                            alt=""
                                            className="rounded-[20px] overflow-hidden  object-cover min-w-[300px] w-full h-[400px]"
                                        />

                                        <Borttomswipper
                                            isopen={currentslide === i}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))} */}
                    </Swiper>
                </div>
                <div
                    className=" z-50 bg-white rounded-full w-[56px] h-[56px] bg-opacity-15 absolute top-3 left-3 flex justify-center items-center"
                    onClick={() => onclose()}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 6L6 18"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M6 6L18 18"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
