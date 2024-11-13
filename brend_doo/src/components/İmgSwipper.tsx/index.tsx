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
        <div className="slider-container   lg:w-[40%] w-full  aspect-square rounded-[20px] overflow-hidden relative">
            <Swiper
                ref={swiperRef}
                spaceBetween={10} // Space between slides
                slidesPerView={1}
                loop={false} // Loop the slider
                // Enable pagination dots
                navigation={false} // Enable navigation buttons (optional)
                className="mySwiper rounded-[20px] overflow-hidden !h-full "
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <SwiperSlide key={i}>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/5d58/069d/b1a719853f273675298a6f5d6c52ad29?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBr-i4tNxaPmbeLcecsQ5N3np3y8drF74P6KkzFV0-T9S8g5nzePobmhX7E-SNaWnhdnq-409Zmbpzuky3Ht101MshACYhjnryhy-z947GBG1p3o1MkGMapDAiY3bgBVJvM4bz-oDaCrOm2woovqk1lYSbTVQAZZ8HVpkuv0GAji27v7Ls8emTakyeKdH7IV8Ku74PVQriJw8b4crw9IJ-gAYood5eHdlNJlUo3gsSlnKYbKYRX~C0VMDinspWXQNi7~HfuLhO3OJFYtUNefUYK6~rgLuw3XPnYuRGugxKwbrI-Vh8xnOw3Sq4v3eqSgzNfgIG6ycav-D2nXuuJcaw__"
                            alt=""
                            className="w-full  h-full"
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
                        <img
                            onClick={handlePrev}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8367e21eaf9400e5b25e9edc713db3ebb71d70566c228f2316cb5c7833aede65?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square rounded-[100px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)] cursor-pointer"
                        />
                        <div className="self-stretch my-auto">1/10</div>
                        <img
                            onClick={handleNext}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a323f628fba0718a3972323289120c24662ad3410e213ca18a6889f61e57cc68?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square rounded-[100px] shadow-[0px_0px_12px_rgba(0,0,0,0.08)] cursor-pointer"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
