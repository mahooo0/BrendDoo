import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function StoriesSwipper({
    isopen,
    onclose,
}: {
    isopen: boolean;
    onclose: () => void;
}) {
    const swiperRef = useRef<any>();
    const [currentslide, setcurrentslide] = useState<number>(0);

    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const activeIndex = swiperRef.current.swiper.activeIndex;
            setcurrentslide(activeIndex);
            console.log('Central Slide Index:', activeIndex);
        }
    };

    return (
        <section
            className="w-full h-[100vh] bg-black fixed top-0 left-0 z-[99999999999999]"
            style={isopen ? { display: 'block' } : { display: 'none' }}
        >
            <div className="w-full h-full">
                <div className="relative flex justify-center items-center w-full h-[100vh]">
                    <Swiper
                        className="!w-full h-full "
                        spaceBetween={'40px'}
                        // grabCursor={true}
                        ref={swiperRef}
                        onSlideChange={handleSlideChange}
                        slidesPerView={5} // Set to show three slides at a time
                        centeredSlides={true} // Center the active slide
                        slidesPerGroup={1}
                        loop={false}
                        navigation={false}
                        breakpoints={{
                            728: { slidesPerView: 4 },
                            556: { slidesPerView: 3 },
                        }}
                    >
                        {Array.from({ length: 20 }).map((_: any, i: number) => (
                            <SwiperSlide key={i} className={`!h-full`}>
                                <div
                                    className={` ${
                                        currentslide === i
                                            ? 'scale-[1.3]'
                                            : ' scale-[0.9]'
                                    }  transition-all duration-300  h-full flex justify-center items-center py-[100px]  overflow-hidden relative`}
                                >
                                    <div className="relative">
                                        <img
                                            src="https://s3-alpha-sig.figma.com/img/33bd/8975/30d2e4e402d505a697e88ae6dfdf32b3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y9qoYSbSkrAUVq4qlBiIElQ7bHC8X~fvpEfu3lFzVdtVMeu8ZHdDMUxmht74aRaUQWLPccvC6WVBhwTn80qUroeq-ULmCqWW-0Pyn4~7bjH8sFiHem~0mLMMRr4hhPWHGDbM7wCOSiWbssF5G0lWHdaG2kblbbHxSI70n7PBFVde24KNX9nioHERWtANLWbMlmkUn3E~RZWl1SDTTvboP5yFKD~jZcmEI3dUKucj~-EBwYM4kTiUcY-SHf5RFLPkNhe5Mbc8ju95BULz~v0yKmxM4AtmRfgfJJoQTyu7CwKAuQoDHzHocRgQysy1qExzVRs1AXNRnb6b5cgRHCLfSQ__"
                                            alt=""
                                            className="rounded-[20px]"
                                        />
                                        <div className=" absolute bottom-0 z-[9999]  w-full h-[20%] p-[12px}">
                                            <Swiper
                                                slidesPerView={'auto'}
                                                spaceBetween={12}
                                                className="!h-full !pl-[12px]"
                                                // Set to show three slides at a time
                                            >
                                                <SwiperSlide className="!w-fit">
                                                    <div className="flex px-[7px] flex-row justify-around w-full bg-white bg-opacity-80  items-center rounded-[20px]">
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/56d9/d7c8/8a9f80c610ad920328f02b303ae0946c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URMc0DK03~7qrfUrlnH1QrrNRZi-c~zU3TA7Sowov~I6kTRPSN3x34dwyzLdvSS8-TtL3gOuZr7Ijd5aQt66Hbn1cWjKtMJetpewsrdyyfJ9kA~0wsiOXV~OzTLKhabEX9oZQvs9ruh~QEy3avO9JhMs7svd1l77uKw8E-yG~zglZG5aQofDuSOaxXepvL1RkoGaH3B16wzz3HVI9WbpDMwA9x3pjv7pkIdUDSuJ70LRo0ridnB7HoTQVR3bDUmkeRj1wW2ImigWAVpmw3~pGjD4hvgU3dpGDr2Vs75~ral-8dhu~OORi9AEppqTC5oXQ3EuE7J6Gfk3fb~-FhEzmA__"
                                                            alt=""
                                                            className="w-[60px] aspect-square rounded-xl object-cover"
                                                        />
                                                        <div className="flex flex-col w-[90px]">
                                                            <h6 className="text-[14px] font-[400]">
                                                                İki tərəfli zara
                                                                qalın pencək
                                                            </h6>
                                                            <p className="text-[14px] font-[400]">
                                                                298 AZN
                                                            </p>
                                                        </div>{' '}
                                                        <button className="px-[12px] py-[8px] h-fit rounded-[20px] bg-[#B1C7E4] text-nowrap ">
                                                            indi all
                                                        </button>
                                                    </div>
                                                </SwiperSlide>{' '}
                                                <SwiperSlide className="!w-fit">
                                                    <div className="flex px-[7px] flex-row justify-around w-full bg-white bg-opacity-80  items-center rounded-[20px]">
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/56d9/d7c8/8a9f80c610ad920328f02b303ae0946c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URMc0DK03~7qrfUrlnH1QrrNRZi-c~zU3TA7Sowov~I6kTRPSN3x34dwyzLdvSS8-TtL3gOuZr7Ijd5aQt66Hbn1cWjKtMJetpewsrdyyfJ9kA~0wsiOXV~OzTLKhabEX9oZQvs9ruh~QEy3avO9JhMs7svd1l77uKw8E-yG~zglZG5aQofDuSOaxXepvL1RkoGaH3B16wzz3HVI9WbpDMwA9x3pjv7pkIdUDSuJ70LRo0ridnB7HoTQVR3bDUmkeRj1wW2ImigWAVpmw3~pGjD4hvgU3dpGDr2Vs75~ral-8dhu~OORi9AEppqTC5oXQ3EuE7J6Gfk3fb~-FhEzmA__"
                                                            alt=""
                                                            className="w-[60px] aspect-square rounded-xl object-cover"
                                                        />
                                                        <div className="flex flex-col w-[90px]">
                                                            <h6 className="text-[14px] font-[400]">
                                                                İki tərəfli zara
                                                                qalın pencək
                                                            </h6>
                                                            <p className="text-[14px] font-[400]">
                                                                298 AZN
                                                            </p>
                                                        </div>{' '}
                                                        <button className="px-[12px] py-[8px] h-fit rounded-[20px] bg-[#B1C7E4] text-nowrap ">
                                                            indi all
                                                        </button>
                                                    </div>
                                                </SwiperSlide>{' '}
                                                <SwiperSlide className="!w-fit">
                                                    <div className="flex px-[7px] flex-row justify-around w-full bg-white bg-opacity-80  items-center rounded-[20px]">
                                                        <img
                                                            src="https://s3-alpha-sig.figma.com/img/56d9/d7c8/8a9f80c610ad920328f02b303ae0946c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=URMc0DK03~7qrfUrlnH1QrrNRZi-c~zU3TA7Sowov~I6kTRPSN3x34dwyzLdvSS8-TtL3gOuZr7Ijd5aQt66Hbn1cWjKtMJetpewsrdyyfJ9kA~0wsiOXV~OzTLKhabEX9oZQvs9ruh~QEy3avO9JhMs7svd1l77uKw8E-yG~zglZG5aQofDuSOaxXepvL1RkoGaH3B16wzz3HVI9WbpDMwA9x3pjv7pkIdUDSuJ70LRo0ridnB7HoTQVR3bDUmkeRj1wW2ImigWAVpmw3~pGjD4hvgU3dpGDr2Vs75~ral-8dhu~OORi9AEppqTC5oXQ3EuE7J6Gfk3fb~-FhEzmA__"
                                                            alt=""
                                                            className="w-[60px] aspect-square rounded-xl object-cover"
                                                        />
                                                        <div className="flex flex-col w-[90px]">
                                                            <h6 className="text-[14px] font-[400]">
                                                                İki tərəfli zara
                                                                qalın pencək
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
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
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
