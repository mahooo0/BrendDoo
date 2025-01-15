import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import GETRequest from '../../setting/Request';
import { Tiktoks } from '../../setting/Types';
import { useParams } from 'react-router-dom';
import StoriesSwipper from '../StoriesSwipper';

// Import Swiper modules like this for version 11.x

export default function Story() {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isStoriesSwipperOpen, setisStoriesSwipperOpen] =
        useState<any>(false);
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const { data: instragrams } = GETRequest<Tiktoks>(
        `/instagrams`,
        'instagrams',
        [lang]
    );
    return (
        <>
            <div className="w-full justify-center">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    grabCursor
                    // navigation
                    // pagination={{ clickable: true }}
                    className="!w-fit"
                >
                    {instragrams?.map((item, i: number) => (
                        <SwiperSlide key={item.id} className="!w-fit">
                            <img
                                onClick={() => {
                                    setisStoriesSwipperOpen(true),
                                        setCurrentSlide(i);
                                }}
                                src={item.image}
                                className="w-12 aspect-square rounded-full bg-black cursor-pointer"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <StoriesSwipper
                Tiktoks={instragrams}
                Currentslide={currentSlide}
                isopen={isStoriesSwipperOpen}
                onclose={() => setisStoriesSwipperOpen(false)}
            />
        </>
    );
}
