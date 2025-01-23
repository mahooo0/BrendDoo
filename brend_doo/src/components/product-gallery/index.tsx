import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'swiper/swiper-bundle.css';
import ImageMagnifier from '../magnifyImage';
import { useShowMagnify } from '../../hooks/useShowMagnify';
export default function ProductGallery({ images }: { images: string[] }) {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [index, setindex] = useState<any>(0);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const { showMagnifier, x, y } = useShowMagnify();
    // const images = [
    //     'https://s3-alpha-sig.figma.com/img/d1e2/d02c/28a68552518ef9060c08530b00c59811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6TNucoTiIkUoyxfCWyzCwrPjzC-Ar-CE2yC7g1Z45Px44kLT2A0iYftPeQfBbkE8P~YHBD8ogIVIGnv4KtsYMinPdBqqlQLGKC4UDkY0G0ED9FoU8Vf9iAudKvF~Plu~sg1LSFzJkYHGd0ZtthgB6TexSlTj2F5UxfaviJNZmvv989G8zAznBFPcDEyppa3zuo5~RkE877lcBgoTsF~0XcgNgVHpbQXQBi-a7LVL2ojzZpyiTd4Aid4R8GwQKLnxkwsyombpa5dLH9JB37kRk-y24F97IftqqIOqNBxYbdAUbqXeFZBgZpC~ebvvSfY5DnYSi5HGIMANjynE8hn-A__',
    //     'https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c4Hs0BkpY-tAdKasLPxP77Hx-TC09RVZjcFQOe2DkOf~cYA0A~JRJ7NmoCURzyJZzewfe4dCCXGa6EWVThwj7SOnZfFPWd1~LJAn9hPG04O5VFCVYUkjyQ6zlxrnEMSG41H0f-ApB2hG8GkeDFDI6pADWPPLgseiEvkIkBj2T1tqpeJogtVyCYQWO3JumBCcLZf7n99WUowMQel3euRdGaeV2ML0QMktEv7U810wYHyLgSSFgARumRQRQ7meSMXQIjZhlqfrCKCgDmU2k8XEnAdVkLIPpMw-C9qeAISjPSBwRo~yvChGW8R7~MLaWuJ5yYczSSG5~kdThE0zwXvtXg__',
    //     'https://s3-alpha-sig.figma.com/img/d1e2/d02c/28a68552518ef9060c08530b00c59811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6TNucoTiIkUoyxfCWyzCwrPjzC-Ar-CE2yC7g1Z45Px44kLT2A0iYftPeQfBbkE8P~YHBD8ogIVIGnv4KtsYMinPdBqqlQLGKC4UDkY0G0ED9FoU8Vf9iAudKvF~Plu~sg1LSFzJkYHGd0ZtthgB6TexSlTj2F5UxfaviJNZmvv989G8zAznBFPcDEyppa3zuo5~RkE877lcBgoTsF~0XcgNgVHpbQXQBi-a7LVL2ojzZpyiTd4Aid4R8GwQKLnxkwsyombpa5dLH9JB37kRk-y24F97IftqqIOqNBxYbdAUbqXeFZBgZpC~ebvvSfY5DnYSi5HGIMANjynE8hn-A__',
    //     'https://s3-alpha-sig.figma.com/img/d1e2/d02c/28a68552518ef9060c08530b00c59811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6TNucoTiIkUoyxfCWyzCwrPjzC-Ar-CE2yC7g1Z45Px44kLT2A0iYftPeQfBbkE8P~YHBD8ogIVIGnv4KtsYMinPdBqqlQLGKC4UDkY0G0ED9FoU8Vf9iAudKvF~Plu~sg1LSFzJkYHGd0ZtthgB6TexSlTj2F5UxfaviJNZmvv989G8zAznBFPcDEyppa3zuo5~RkE877lcBgoTsF~0XcgNgVHpbQXQBi-a7LVL2ojzZpyiTd4Aid4R8GwQKLnxkwsyombpa5dLH9JB37kRk-y24F97IftqqIOqNBxYbdAUbqXeFZBgZpC~ebvvSfY5DnYSi5HGIMANjynE8hn-A__',
    //     'https://s3-alpha-sig.figma.com/img/d1e2/d02c/28a68552518ef9060c08530b00c59811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6TNucoTiIkUoyxfCWyzCwrPjzC-Ar-CE2yC7g1Z45Px44kLT2A0iYftPeQfBbkE8P~YHBD8ogIVIGnv4KtsYMinPdBqqlQLGKC4UDkY0G0ED9FoU8Vf9iAudKvF~Plu~sg1LSFzJkYHGd0ZtthgB6TexSlTj2F5UxfaviJNZmvv989G8zAznBFPcDEyppa3zuo5~RkE877lcBgoTsF~0XcgNgVHpbQXQBi-a7LVL2ojzZpyiTd4Aid4R8GwQKLnxkwsyombpa5dLH9JB37kRk-y24F97IftqqIOqNBxYbdAUbqXeFZBgZpC~ebvvSfY5DnYSi5HGIMANjynE8hn-A__',
    //     'https://s3-alpha-sig.figma.com/img/d1e2/d02c/28a68552518ef9060c08530b00c59811?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h6TNucoTiIkUoyxfCWyzCwrPjzC-Ar-CE2yC7g1Z45Px44kLT2A0iYftPeQfBbkE8P~YHBD8ogIVIGnv4KtsYMinPdBqqlQLGKC4UDkY0G0ED9FoU8Vf9iAudKvF~Plu~sg1LSFzJkYHGd0ZtthgB6TexSlTj2F5UxfaviJNZmvv989G8zAznBFPcDEyppa3zuo5~RkE877lcBgoTsF~0XcgNgVHpbQXQBi-a7LVL2ojzZpyiTd4Aid4R8GwQKLnxkwsyombpa5dLH9JB37kRk-y24F97IftqqIOqNBxYbdAUbqXeFZBgZpC~ebvvSfY5DnYSi5HGIMANjynE8hn-A__',
    // ];

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Toolbar: {
                display: {
                    left: ['prev'],
                    middle: ['counter'],
                    right: ['next', 'close'],
                },
            },
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Main Swiper */}
            <div className="mb-4  group  relative">
                <Swiper
                    spaceBetween={10}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    onSlideChange={(swiper) => {
                        console.log('Current slide index:', swiper.activeIndex);
                        setindex(swiper.activeIndex);
                        // You can use swiper.activeIndex to access the current slide index
                    }}
                    className="aspect-square rounded-lg "
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index} className=" !overflow-visible">
                            <a
                                href={img}
                                data-fancybox="gallery"
                                className="block w-full h-full relative"
                            >
                                {/* <img
                                    imageSrc={img || '/placeholder.svg'}
                                    alt={`Product view ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                /> */}
                                <ImageMagnifier
                                    src={img}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {showMagnifier && (
                    <div
                        className=" z-50  absolute top-0  left-[105%] w-[100%] aspect-square rounded-lg"
                        style={{
                            objectFit: 'cover',
                            border: '1px solid lightgray',
                            backgroundColor: 'white',
                            overflow: 'hidden',
                            backgroundImage: `url('${images[index]}')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: `400% 400%`,
                            backgroundPositionX: `${-x * 4 + 400 / 4}px`,
                            backgroundPositionY: `${-y * 4 + 400 / 4}px`,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        }}
                    ></div>
                )}

                {/* Custom Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    ref={nextRef}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Thumbnail Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="thumbs-swiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <button className="w-full relative aspect-square rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary">
                            <img
                                src={img || '/placeholder.svg'}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
