import Header from '../components/Header';
import TikTokSlider from '../components/TikTokSwipper';

import { Footer } from '../components/Footer/index.tsx';
import StoriesSwipper from '../components/StoriesSwipper/index.tsx';
import { useState } from 'react';

import GETRequest from '../setting/Request.ts';
import {
    Brand,
    // Advanteges,
    Holideys,
    HomeHero,
    ItemList,
    Seo,
    Tiktoks,
    TranslationsKeys,
} from '../setting/Types.ts';
import Loading from '../components/Loading/index.tsx';
import ROUTES from '../setting/routes.tsx';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

export default function Home() {
    //states
    const [isStoriesSwipperOpen, setisStoriesSwipperOpen] =
        useState<any>(false);
    const [isIstagramSwippen, setIsIstagramSwippen] = useState<boolean>(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    // const [currentCategory, setCurrentCategory] = useState<number>(0);
    //language

    const navigate = useNavigate();
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    // const { search } = useLocation();
    // const searchParams = new URLSearchParams(search);
    // const category_id = Number(searchParams.get('category_id')) || 0;
    // console.log('salam', category_id);

    // requests
    const { data: hero, isLoading: heroLoading } = GETRequest<HomeHero>(
        `/hero`,
        'HOMEhero',
        [lang]
    );

    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);

    // const { data: advantages, isLoading: advantagesLoading } = GETRequest<
    //     Advanteges[]
    // >(`/advantages`, 'HOMEadvantages', [lang]);

    // const { data: brends, isLoading: brendsLoading } = GETRequest<Brand[]>(
    //     `/brands`,
    //     'brands',
    //     [lang]
    // );

    const { data: tiktok, isLoading: tiktokLoading } = GETRequest<Tiktoks>(
        `/tiktoks`,
        'tiktok',
        [lang]
    );
    const { data: instragrams, isLoading: instragramsLoading } =
        GETRequest<Tiktoks>(`/instagrams`, 'instagrams', [lang]);

    // const { data: products } = GETRequest<ProductResponse>(
    //     `/products${category_id === 0 ? '' : `?category_id=${category_id}`}`,
    //     'products',
    //     [lang, category_id]
    // );

    // const { data: sesionProducts, isLoading: sesionLoading } =
    //     GETRequest<ProductResponse>(`/products?is_season=1`, 'products', [
    //         lang,
    //     ]);
    // const { data: PopulyarProducts, isLoading: PopulyarLoading } =
    //     GETRequest<ProductResponse>(`/products?is_popular=1`, 'products', [
    //         lang,
    //     ]);
    // const { data: productsByCategory } = GETRequest<HomeCategory[]>(
    //     `/home_categories`,
    //     'home_categories',
    //     [lang]
    // );
    // const { data: discountedProducts, isLoading: discountedProductsLoading } =
    //     GETRequest<ProductResponse>(
    //         `/products?is_discount=1`,
    //         'productsElektroniks',
    //         [lang]
    //     );
    // const { data: loginBanners, isLoading: loginBannersLoading } =
    //     GETRequest<LoginBunner>(`/loginBanners`, 'loginBanners', [lang]);

    // const { data: special, isLoading: specialLoading } =
    //     GETRequest<SpecialOffer>(`/special`, 'special', [lang]);
    // const { data: categories, isLoading: categoriesLoading } = GETRequest<
    //     Category[]
    // >(`/categories`, 'categories', [lang]);
    const { data: brends, isLoading: brendsLoading } = GETRequest<Brand[]>(
        `/brands`,
        'brands',
        [lang]
    );
    const { data: holidayBanners, isLoading: holidayBannersLoading } =
        GETRequest<Holideys>(`/holidayBanners`, 'holidayBanners', [lang]);
    const { data: Metas, isLoading: MetasLoading } = GETRequest<Seo[]>(
        `/seo_pages`,
        'seo_pages',
        [lang]
    );
    const { data: banners, isLoading: bannersLoading } = GETRequest<ItemList>(
        `/banners`,
        'banners',
        [lang]
    );
    const { data: favicon, isLoading: faviconLoading } = GETRequest<{
        image: string;
    }>(`/favicon`, 'favicon', [lang]);
    console.log('Metas', Metas);

    // loading
    // console.log(
    //     heroLoading ||
    //         holidayBannersLoading ||
    //         advantagesLoading ||
    //         brendsLoading ||
    //         tarnslationLoading ||
    //         tiktokLoading ||
    //         categoriesLoading ||
    //         instragramsLoading ||
    //         discountedProductsLoading ||
    //         specialLoading ||
    //         loginBannersLoading ||
    //         sesionLoading
    // );

    if (
        faviconLoading ||
        brendsLoading ||
        heroLoading ||
        holidayBannersLoading ||
        MetasLoading ||
        bannersLoading ||
        // advantagesLoading ||
        tarnslationLoading ||
        tiktokLoading ||
        instragramsLoading
    ) {
        return <Loading />;
    }

    return (
        <div className=" relative">
            <Helmet>
                <title>
                    {
                        Metas?.find((meta) => meta.type === 'home_page')
                            ?.meta_title
                    }
                </title>
                <meta
                    name="description"
                    content={
                        Metas?.find((meta) => meta.type === 'home_page')
                            ?.meta_description
                    }
                    data-next-head=""
                ></meta>
                <meta
                    name="keywords"
                    content={
                        Metas?.find((meta) => meta.type === 'home_page')
                            ?.meta_keywords
                    }
                    data-next-head=""
                ></meta>
                <link rel="icon" href={favicon?.image} type="image/svg+xml" />
            </Helmet>
            <Header />
            <main className=" flex flex-col justify-center mb-[100px] max-sm:mb-[40px]">
                <section className="relative rounded-[20px] overflow-hidden mt-[16px] mx-[40px] max-sm:mx-[16px]">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source
                            src={hero?.image}
                            // src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1133314765284192593/ddc0c3e57465367651c0aeebc90f221fcb15ec33?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2V~13MicATijqUi6LNeFysKE72Hm0Hi7mid26CXUCzNteqVhCkfZ0gYPKACJtpPOg2JkNxPihRAbfv5JRqmRnjRdDJ8AycaOZP64DjqdSou8sn9AzzwwEDLVwXEgPqosLmHXTxMgt0qeIrckxbWKu1OeAUqFwmf-0ZWZQcfNDWgMapRoY9v6U1hfF71CpqHCHIwvrN8KGJ3~4N85qMFNzXiEmEWm5GI1FiVJzKzEKOY6GsVXzzXWcht6z4zaFJQmOMA7JId5ntjPufy0ELLF5lm2zDNzhZlAJxKFqumL31ix2mBoZTcxyiXYwDZ82It0zCcAduqpnXhp4wMCgcDjw__"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Content */}
                    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 rounded-3xl bg-black bg-opacity-20 max-md:px-5 max-md:py-24 max-sm:py-16 relative z-10">
                        <div className="flex flex-col max-w-full w-[497px]">
                            <div className="flex flex-col w-full text-center text-neutral-100 max-md:max-w-full">
                                <h1 className="self-center text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                                    {hero ? (
                                        hero.title
                                    ) : (
                                        <div className="h-10 bg-gray-300 rounded animate-pulse w-3/4" />
                                    )}
                                </h1>
                                <div className="mt-5 text-lg font-medium max-md:max-w-full max-sm:hidden">
                                    {hero ? (
                                        hero.description
                                    ) : (
                                        <div className="h-10 bg-gray-300 rounded animate-pulse w-full" />
                                    )}
                                </div>
                            </div>

                            <button
                                className="gap-2.5 leading-[24px] h-fit self-center px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5"
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.product[
                                                lang as keyof typeof ROUTES.product
                                            ]
                                        }`
                                    )
                                }
                            >
                                {tarnslation?.Yeni_məhsullar}{' '}
                            </button>
                        </div>
                    </div>
                </section>
                {banners?.map((item) => (
                    <section className="relative mt-5  max-sm:mt-[52px] rounded-3xl overflow-hidden max-sm:mx-4 mx-[40px]">
                        <img
                            src={item.image}
                            alt=""
                            className="absolute top-0  left-0 w-full h-full object-cover -z-10"
                        />

                        <div
                            className=" max-sm:px-4 flex overflow-hidden flex-col justify-center items-start px-16 py-24 rounded-3xl max-md:px-5 relative"
                            style={{
                                background:
                                    'linear-gradient(269.78deg, rgba(0, 0, 0, 0) 44.74%, rgba(0, 0, 0, 0.102252) 54.13%, rgba(0, 0, 0, 0.306484) 60.6%, rgba(0, 0, 0, 0.488446) 71%, rgba(0, 0, 0, 0.6) 77.76%)',
                            }}
                        >
                            <div className="flex flex-col max-w-full w-[538px]">
                                <div className="flex flex-col w-full max-md:max-w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="text-xl font-medium text-white text-opacity-60 max-md:max-w-full">
                                            {item.title}
                                        </div>
                                        <div className="mt-3 text-4xl font-semibold text-white max-md:max-w-full">
                                            {holidayBanners?.value}{' '}
                                        </div>
                                    </div>
                                    {/* <div className="mt-5 text-lg font-medium text-white text-opacity-90 max-md:max-w-full">
                 {holidayBanners?.description}
             </div> */}
                                </div>
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/${lang}/${
                                                ROUTES.product[
                                                    lang as keyof typeof ROUTES.product
                                                ]
                                            }?page=1${
                                                item.filter_conditions
                                                    .category_id
                                                    ? `&category=${item.filter_conditions.category_id}`
                                                    : ''
                                            }${
                                                item.filter_conditions.brand_id
                                                    ? `&brand_id=${item.filter_conditions.brand_id}`
                                                    : ''
                                            }${
                                                item.filter_conditions.max_price
                                                    ? `&max_price=${item.filter_conditions.max_price}`
                                                    : ''
                                            }${
                                                item.filter_conditions.min_price
                                                    ? `&min_price=${item.filter_conditions.min_price}`
                                                    : ''
                                            }${
                                                item.filter_conditions
                                                    .is_popular
                                                    ? `&is_popular=${item.filter_conditions.is_popular}`
                                                    : ''
                                            }${
                                                item.filter_conditions.is_season
                                                    ? `&is_season=${item.filter_conditions.is_season}`
                                                    : ''
                                            }${
                                                item.filter_conditions
                                                    .is_discount
                                                    ? `&is_discount=${item.filter_conditions.is_discount}`
                                                    : ''
                                            }${
                                                item.filter_conditions
                                                    .sub_category_id
                                                    ? `&subCategory=${item.filter_conditions.sub_category_id}`
                                                    : ''
                                            }${
                                                item.filter_conditions
                                                    .third_category_id
                                                    ? `&third_category_id=${item.filter_conditions.third_category_id}`
                                                    : ''
                                            }`
                                        )
                                    }
                                    className="gap-2.5 self-start leading-[22px] h-fit px-10 py-4 mt-10 text-lg font-medium text-white hover:bg-[#FFFFFF] hover:text-black duration-300 border border-white border-solid rounded-[100px] max-md:px-5"
                                >
                                    {tarnslation?.Məhsullara_bax}
                                </button>
                            </div>
                        </div>
                    </section>
                ))}

                {/* <section className="flex max-sm:hidden overflow-hidden flex-col justify-center items-center px-[106px] py-9 text-lg font-medium bg-indigo-100 rounded-3xl text-slate-800 max-md:px-5 mt-[16px] mx-[40px] max-sm:mx-[16px]">
                    <div className="flex flex-wrap gap-10 items-center max-md:max-w-full justify-between w-full">
                        {advantages &&
                            advantages.map((advantage: Advanteges) => (
                                <div
                                    className="flex gap-3 items-center self-stretch my-auto"
                                    key={advantage.id}
                                >
                                    <img
                                        loading="lazy"
                                        src={advantage.icon}
                                        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">
                                        {advantage.title}{' '}
                                    </div>
                                </div>
                            ))}
                    </div>
                </section> */}
                <section className="mt-5  max-sm:mt-[52px]">
                    <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium px-[40px] max-sm:px-[16px]">
                        {tarnslation?.Tiktok}{' '}
                    </h2>
                    <TikTokSlider
                        Tiktoks={tiktok}
                        action={(id) => {
                            setisStoriesSwipperOpen(true), setCurrentSlide(id);
                            setIsIstagramSwippen(false);
                        }}
                    />{' '}
                </section>
                {/* <section className="mt-5 max-sm:mt-[52px] px-[40px] max-sm:px-[0] ">
                    <div className="flex flex-row flex-wrap justify-between gap-5  ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  max-sm:px-4 ">
                            {tarnslation?.Ən_çox_satılan_məhsullar}
                        </h2>
                        <div
                            style={{
                                overflow: 'scroll',
                                scrollbarWidth: 'none' ,
                                msOverflowStyle:
                                    'none' ,
                            }}
                            className="flex  no-scrollbar  flex-row max-sm:w-full max-sm:overflow-x-scroll max-sm:px-6 justify-between max-sm:justify-around gap-3 "
                        >
                            <NoneToBlue
                                action={() => {
                                    router(`?category_id=${0}`);
                                }}
                                isactive={category_id === 0}
                            >
                                {tarnslation?.All}
                            </NoneToBlue>
                            {productsByCategory?.map((category) => (
                                <NoneToBlue
                                    action={() => {
                                        // setCurrentCategory(category.id);
                                        router(`?category_id=${category.id}`);
                                    }}
                                    isactive={category_id === category.id}
                                >
                                    {category.title}
                                </NoneToBlue>
                            ))}
                        </div>
                    </div>

                    <ProductSwipper bg="grey" data={products?.data} />
                </section> */}
                {/* ----here---- */}
                {/* {productsByCategory?.map((item: HomeCategory, i: number) => (
                    <section
                        className={`mt-5 max-sm:mt-[52px] px-[40px] max-sm:px-[0px]    bg-[${
                            i % 2 === 1 ? '#ffffff' : '#F5F5F5'
                        }] max-sm:py-10 py-5`}
                    >
                        <div className="flex max-sm:px-[16px]  flex-row flex-wrap justify-between  gap-4">
                            <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                                {item.title}{' '}
                            </h2>
                            <button
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.product[
                                                lang as keyof typeof ROUTES.product
                                            ]
                                        }`
                                    )
                                }
                                className="rounded-[100px] duration-300 max-sm:bg-transparent max-sm:text-[#3873C3] max-sm:border-none max-sm:underline  bg-[#3873C3] leading-[14px] h-fit text-white px-[28px] py-[16px] border border-black border-opacity-10"
                            >
                                {' '}
                                {tarnslation?.Hamısına_bax}{' '}
                            </button>{' '}
                        </div>
                        <ProductSwipper
                            bg={i % 2 === 1 ? 'grey' : 'white'}
                            data={item.products}
                        />
                    </section>
                ))} */}
                {/* ----here---- */}
                {/* <section className="px-[40px] py-5 max-sm:px-4 max-sm:py-10">
                    <div className="overflow-hidden rounded-3xl bg-[#8E98B8] ">
                        <div className="flex gap-5 max-md:flex-col-reverse max-sm:py-0">
                            <div className="flex  flex-col w-[33%] max-md:ml-0  max-md:w-full">
                                <img
                                    loading="lazy"
                                    src={loginBanners?.image}
                                    className="object-contain grow mt-32 max-sm:mt-0 mr-0 w-full aspect-[2.29] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex z-10 flex-col self-stretch my-auto mr-0 w-full text-white max-md:mt-10 max-md:max-w-full px-2">
                                    <div className="text-3xl font-semibold text-center max-md:max-w-full">
                                        {loginBanners?.title}
                                    </div>
                                    <button
                                        className="gap-2.5 self-center px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5"
                                        onClick={() =>
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.product[
                                                        lang as keyof typeof ROUTES.product
                                                    ]
                                                }`
                                            )
                                        }
                                    >
                                        {tarnslation?.Məhsullara_bax}{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="flex  max-sm:hidden flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    src={loginBanners?.second_image}
                                    className="object-contain w-full aspect-[1.49] max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className=" flex justify-center flex-col">
                    <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium px-[40px] max-sm:px-4 text-center ">
                        {tarnslation?.İnstaqram_heyakələr}{' '}
                    </h2>
                    <InstaqramSlider
                        instragrams={instragrams}
                        action={(id) => {
                            setisStoriesSwipperOpen(true), setCurrentSlide(id);
                            setIsIstagramSwippen(true);
                        }}
                    />
                </section> */}
                {/* <section className="mt-5  max-sm:mt-[52px]  flex justify-center gap-5 max-sm:px-4 px-[40px] lg:flex-row flex-col-reverse">
                    <ImageSwipper data={discountedProducts?.data} />
                    <div className="flex l:w-[60%] w-full overflow-hidden flex-col items-start px-12 pt-12 pb-32 rounded-3xl bg-[#8E98B8]  max-md:px-5 max-md:pb-24">
                        <div className="text-xl font-semibold text-indigo-200">
                            {special?.title}{' '}
                        </div>
                        <div className="flex flex-col mt-14 w-full text-white max-w-[629px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <div className="text-4xl font-semibold max-md:max-w-full">
                                    {special?.discount}{' '}
                                </div>
                                <div className="mt-5 text-lg font-medium max-md:max-w-full">
                                    {special?.description}
                                </div>
                            </div>
                            <button
                                className="gap-2.5 self-start px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] leading-[22px] h-fit hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5"
                                onClick={() => navigate('/poducts')}
                            >
                                {tarnslation?.Məhsullara_bax}
                            </button>
                        </div>
                    </div>
                </section> */}
                <section className="flex  max-sm:px-4 flex-col px-[40px] mt-5 max-sm:mt-[52px]">
                    <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
                        <div className="self-stretch my-auto text-4xl font-semibold text-slate-900">
                            {tarnslation?.Brendlər}{' '}
                        </div>
                        <div className="self-stretch my-auto text-base font-medium text-blue-600 underline decoration-auto decoration-solid underline-offset-auto">
                            <span
                                className="text-[#3873C3] underline cursor-pointer"
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.brends[
                                                lang as keyof typeof ROUTES.brends
                                            ]
                                        }`
                                    )
                                }
                            >
                                {tarnslation?.Məhsullara_bax}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
                        <div className="grid flex-wrap max-sm:grid-cols-2 max-lg:grid-cols-5 grid-cols-7 gap-4 items-center w-full justify-between max-lg:justify-start max-sm:justify-center  ">
                            {brends?.map((brand: Brand) => (
                                <div
                                    key={brand.id}
                                    className="flex overflow-hidden flex-col px-8 my-auto w-36 rounded-3xl bg-neutral-100 max-md:px-5"
                                >
                                    <img
                                        loading="lazy"
                                        src={brand.logo}
                                        className="object-contain aspect-[1.2] w-[120px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <section className="relative mt-5  max-sm:mt-[52px] rounded-3xl overflow-hidden max-sm:mx-4 mx-[40px]">
                    <video
                        className="absolute top-0  left-0 w-full h-full object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={holidayBanners?.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div
                        className=" max-sm:px-4 flex overflow-hidden flex-col justify-center items-start px-16 py-24 rounded-3xl max-md:px-5 relative"
                        style={{
                            background:
                                'linear-gradient(269.78deg, rgba(0, 0, 0, 0) 44.74%, rgba(0, 0, 0, 0.102252) 54.13%, rgba(0, 0, 0, 0.306484) 60.6%, rgba(0, 0, 0, 0.488446) 71%, rgba(0, 0, 0, 0.6) 77.76%)',
                        }}
                    >
                        <div className="flex flex-col max-w-full w-[538px]">
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <div className="flex flex-col w-full">
                                    <div className="text-xl font-medium text-white text-opacity-60 max-md:max-w-full">
                                        {holidayBanners?.title}{' '}
                                    </div>
                                    <div className="mt-3 text-4xl font-semibold text-white max-md:max-w-full">
                                        {holidayBanners?.value}{' '}
                                    </div>
                                </div>
                                <div className="mt-5 text-lg font-medium text-white text-opacity-90 max-md:max-w-full">
                                    {holidayBanners?.description}
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.product[
                                                lang as keyof typeof ROUTES.product
                                            ]
                                        }`
                                    )
                                }
                                className="gap-2.5 self-start leading-[22px] h-fit px-10 py-4 mt-10 text-lg font-medium text-white hover:bg-[#FFFFFF] hover:text-black duration-300 border border-white border-solid rounded-[100px] max-md:px-5"
                            >
                                {tarnslation?.Məhsullara_bax}
                            </button>
                        </div>
                    </div>
                </section> */}
                {/* <section className="grid lg:grid-cols-3 max-sm:hidden md:grid-cols-2 grid-cols-1 justify-items-center max-sm:px-4  px-[40px] mt-5 max-sm:mt-[52px] gap-5 w-full">
                    <div className="   flex items-center justify-between w-full mt-10">
                        <div className="flex flex-col self-stretch  w-full max-md:mt-10">
                            <div className="flex flex-col w-full justify-start items-start">
                                <div className="text-4xl font-semibold text-slate-900">
                                    {tarnslation?.Mövsüm_təklifləri}
                                </div>
                              
                            </div>
                            <div
                                className="cursor-pointer gap-2.5 leading-[20px] h-fit self-start px-10 py-4 max-sm:mt-5 mt-10 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5"
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.product[
                                                lang as keyof typeof ROUTES.product
                                            ]
                                        }`
                                    )
                                }
                            >
                                {tarnslation?.Məhsullara_bax}
                            </div>
                        </div>
                    </div>
                    {sesionProducts?.data.map((Product) => (
                        <div
                            onClick={() => {
                                router(
                                    `/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }/${
                                        Product.slug[
                                            lang as keyof typeof Product.slug
                                        ]
                                    }`
                                );
                            }}
                            key={Product.id}
                            className="flex cursor-pointer flex-col w-full min-h-[510px] max-md:ml-0 max-md:w-full rounded-3xl"
                            style={{
                                backgroundImage: `url("${Product.image}")`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base justify-end text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24  max-md:max-w-full">
                                <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                    <div className="flex flex-col">
                                        <div>{Product.title}</div>
                                        <div className="mt-3 font-semibold">
                                            {Product.discounted_price} AZN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section> */}
                {/* <section className="grid lg:grid-cols-3 max-sm:hidden md:grid-cols-2 grid-cols-1 justify-items-center max-sm:px-4  px-[40px] mt-5 max-sm:mt-[52px] gap-5 w-full">
                    <div className="   flex items-center justify-between w-full mt-10">
                        <div className="flex flex-col self-stretch  w-full max-md:mt-10">
                            <div className="flex flex-col w-full justify-start items-start">
                                <div className="text-4xl font-semibold text-slate-900">
                                    {tarnslation?.PopTitle}
                                </div>
                               
                            </div>
                            <div
                                className="cursor-pointer gap-2.5 leading-[20px] h-fit self-start px-10 py-4 max-sm:mt-5 mt-10 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5"
                                onClick={() =>
                                    navigate(
                                        `/${lang}/${
                                            ROUTES.product[
                                                lang as keyof typeof ROUTES.product
                                            ]
                                        }`
                                    )
                                }
                            >
                                {tarnslation?.Məhsullara_bax}
                            </div>
                        </div>
                    </div>
                    {PopulyarProducts?.data.map((Product) => (
                        <div
                            onClick={() => {
                                router(
                                    `/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }/${
                                        Product.slug[
                                            lang as keyof typeof Product.slug
                                        ]
                                    }`
                                );
                            }}
                            key={Product.id}
                            className="flex cursor-pointer flex-col w-full min-h-[510px] max-md:ml-0 max-md:w-full rounded-3xl"
                            style={{
                                backgroundImage: `url("${Product.image}")`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base justify-end text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24  max-md:max-w-full">
                                <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                    <div className="flex flex-col">
                                        <div>{Product.title}</div>
                                        <div className="mt-3 font-semibold">
                                            {Product.discounted_price} AZN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section> */}
                {/* <section className=" flex-col max-sm:flex hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center max-sm:px-0  px-[40px] max-sm:mt-[52px] mt-5 gap-5 w-fit">
                    <div className=" max-sm:px-4   flex items-center justify-between">
                        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10">
                            <div className="flex flex-col w-full">
                                <div className="text-4xl font-semibold text-slate-900">
                                    Mövsüm təklifləri
                                </div>
                                <div className="mt-5 text-base text-black text-opacity-80">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever
                                </div>
                            </div>
                        </div>
                    </div>
                    <ProductSwipper2 />
                    <div className="flex justify-center">
                        <button
                            className="cursor-pointer gap-2.5 leading-[20px] h-fit self-start px-10 py-4 max-sm:mt-5 mt-10 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5"
                            onClick={() => navigate('/poducts')}
                        >
                            {tarnslation?.Məhsullara_bax}
                        </button>
                    </div>
                </section> */}
            </main>
            <Footer />
            {/* <GrabCursorSwiper /> */}
            <StoriesSwipper
                Tiktoks={isIstagramSwippen ? instragrams : tiktok}
                Currentslide={currentSlide}
                isopen={isStoriesSwipperOpen}
                onclose={() => setisStoriesSwipperOpen(false)}
            />
        </div>
    );
}
