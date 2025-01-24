import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import CommentsSection from '../../components/Comments';
import ProductCard from '../../components/ProductCArd';
import { useNavigate, useParams } from 'react-router-dom';
import GETRequest, { axiosInstance } from '../../setting/Request';
import {
    Favorite,
    ProductDetail,
    ProductResponse,
    TranslationsKeys,
} from '../../setting/Types';
import Loading from '../../components/Loading';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../setting/routes';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import ProductGallery from '../../components/product-gallery';
import { useQueryClient } from '@tanstack/react-query';

function extractData(input: string) {
    const match = input.match(/(\d+)% \((\d+)\)/);
    if (match) {
        const [, procent, users] = match;
        return {
            procent: parseInt(procent, 10),
            users: parseInt(users, 10),
        };
    }
    return null; // Return null if the input format is invalid
}
export default function ProductId() {
    const { lang = 'ru', slug } = useParams<{
        lang: string;
        slug: string;
    }>();
    const { data: Productslingle, isLoading: ProductslingleLoading } =
        GETRequest<ProductDetail>(`/productSingle/${slug}`, 'productSingle', [
            lang,
            slug,
        ]);
    const { data: tarnslation, isLoading: tarnslationLoading } =
        GETRequest<TranslationsKeys>(`/translates`, 'translates', [lang]);
    const { data: SimularProducts, isLoading: SimularProductsLoading } =
        GETRequest<ProductResponse>(
            `/products?category_id=${Productslingle?.category.id}&sub_category_id=${Productslingle?.sub_category.id}`,
            'products',
            [lang, Productslingle]
        );

    const [currentColor, setCurrentColor] = useState<string>('');
    const [currentOption, setCurrentOption] = useState<string>('');
    const [isliked, setisliked] = useState<boolean>(false);
    const { data: favorites } = GETRequest<Favorite[]>(
        `/favorites`,
        'favorites',
        [lang]
    );
    const checkLikedProducts = () => {
        if (favorites?.some((item) => item.product.id === Productslingle?.id)) {
            setisliked(true);
        } else {
            setisliked(false);
        }
    };
    const queryClient = useQueryClient();

    useEffect(() => {
        // Initial check on render
        checkLikedProducts();
    }, [favorites]);
    useEffect(() => {
        const CurrentColorNAme = Productslingle?.filters
            .find(
                (item) =>
                    item.filter_name === 'Color' || item.filter_name === 'Цвет'
            )
            ?.options.find((item) => item.is_default)?.name;
        console.log('CurrentColorNAme:', Productslingle);

        const CurrentOptionNAme = Productslingle?.filters
            .find(
                (item) =>
                    item.filter_name === 'Size' || item.filter_name === 'Размер'
            )
            ?.options.find((item) => item.is_default)?.name;
        if (CurrentColorNAme) {
            setCurrentColor(CurrentColorNAme);
        }
        if (CurrentOptionNAme) {
            setCurrentOption(CurrentOptionNAme);
        }
    }, [Productslingle]);
    const addToBasket = async (data: {
        product_id: number;
        quantity: number;
        price: number;
        token: string;
        options: { filter_id: number; option_id: number | undefined }[];
    }) => {
        const response = await axios.post(
            'https://brendo.avtoicare.az/api/basket_items',
            {
                product_id: data.product_id,
                quantity: data.quantity,
                price: data.price,
                options: data.options,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${data.token}`,
                },
            }
        );
        return response.data;
    };
    const navigate = useNavigate();

    if (ProductslingleLoading || tarnslationLoading || SimularProductsLoading) {
        return <Loading />;
    }
    return (
        <div className="">
            <Helmet>
                <title>{Productslingle?.meta_title || 'My Page Title'}</title>
                <meta
                    name="description"
                    content={
                        Productslingle?.meta_description ||
                        'This is the page description'
                    }
                />
                <meta
                    name="keywords"
                    content={
                        Productslingle?.meta_keywords ||
                        'keyword1, keyword2, keyword3'
                    }
                />
            </Helmet>
            <Header />
            <main className=" lg:mt-[54px] mt-0 max-sm:mt-3">
                <div className="px-[40px] max-sm:px-4">
                    <div className="flex items-center gap-2">
                        <Link to={`${lang}`}>
                            <h6 className="text-nowrap self-stretch my-auto text-black hover:text-blue-600">
                                {tarnslation?.home}{' '}
                            </h6>
                        </Link>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bb3b3dae771cd265db1accd95aa96f30bd9da3da88a57867743da53bebc0eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />

                        <Link
                            to={`/${lang}/${
                                ROUTES.product[
                                    lang as keyof typeof ROUTES.product
                                ]
                            }`}
                        >
                            <h6 className="text-nowrap self-stretch my-auto hover:text-blue-600">
                                {tarnslation?.Məhsullar}{' '}
                            </h6>
                        </Link>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bb3b3dae771cd265db1accd95aa96f30bd9da3da88a57867743da53bebc0eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <h6 className="text-nowrap self-stretch my-auto">
                            {Productslingle?.title}
                        </h6>
                    </div>{' '}
                </div>
                <section className="flex lg:flex-row flex-col gap-10 mx-[40px]  max-sm:mx-4 relative">
                    <div className=" lg:w-[40%] w-full ">
                        {' '}
                        <div className=" sticky top-[10px]">
                            <ProductGallery
                                images={
                                    Productslingle?.sliders.map(
                                        (item) => item.image
                                    ) || []
                                }
                            />
                            {/* <ImageMagnifier
                                src="/images/contact.jpg"
                                width={400}
                                height={400}
                            /> */}
                        </div>
                        {/* <section className="flex flex-col rounded-3xl w-full max-w-[670px] lg:h-auto h-fit  sticky top-[10px]">
                            <section
                                className=" sroll- flex flex-col  lg:h-[90vh] custom-scrollbar h-fit  overflow-y-scroll mt-[28px] gap-5 max-sm:gap-3 custom-scrollbar pb-[0px]"
                                style={{
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#888 transparent',
                                }}
                            >
                                <div className="flex overflow-hidden flex-col w-full  min-h-[670px] max-sm:min-h-0 rounded-3xl bg-neutral-100 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        src={Productslingle?.sliders[0].image}
                                        className="object-cover w-full max-sm:h-[345px] h-[670px] max-md:max-w-full"
                                    />
                                </div>
                                <div className=" w-full max-md:max-w-full">
                                    <div className="flex gap-5 max-sm:gap-3 max-md:flex-col">
                                        {Productslingle?.sliders[1] && (
                                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                                <div className="flex overflow-hidden flex-col grow w-full rounded-3xl bg-neutral-100 ">
                                                    <img
                                                        loading="lazy"
                                                        src={
                                                            Productslingle
                                                                ?.sliders[1]
                                                                .image
                                                        }
                                                        className="object-cover w-full aspect-[1.07]"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        {Productslingle?.sliders[2] && (
                                            <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-full">
                                                <div className="flex overflow-hidden flex-col grow w-full rounded-3xl bg-neutral-100 ">
                                                    <img
                                                        loading="lazy"
                                                        src={
                                                            Productslingle
                                                                ?.sliders[2]
                                                                .image
                                                        }
                                                        className="object-cover w-full aspect-[1.07]"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {Productslingle?.sliders[2] && (
                                    <div className="flex overflow-hidden flex-col w-full  min-h-[500px] max-sm:min-h-0 rounded-3xl bg-neutral-100 max-md:max-w-full">
                                        <img
                                            loading="lazy"
                                            src={
                                                Productslingle?.sliders[2].image
                                            }
                                            className="object-cover w-full max-sm:h-[345px] h-[500px] max-md:max-w-full"
                                        />
                                    </div>
                                )}
                            </section>
                        </section> */}
                    </div>
                    <section className="flex flex-col max-w-[650px] mt-[24px]">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <div className="flex flex-col w-full text-black text-opacity-80 max-md:max-w-full">
                                {Productslingle?.discount && (
                                    <div className="gap-2.5 self-start px-3 py-2 text-xs font-medium text-white bg-[#FF3C79] rounded-[100px]">
                                        {Productslingle?.discount}%{' '}
                                        {tarnslation?.discount}
                                    </div>
                                )}

                                <div className="mt-4 w-full text-3xl font-semibold text-black max-md:max-w-full">
                                    {Productslingle?.title}{' '}
                                </div>
                                <div className="mt-4 w-full text-base max-md:max-w-full">
                                    {Productslingle?.short_title}{' '}
                                </div>
                                <div className="mt-4 w-full text-sm max-md:max-w-full">
                                    {tarnslation?.Məhsulun_kodu}:
                                    {Productslingle?.code}
                                    <br />
                                </div>
                            </div>
                            <div className="flex gap-3 items-center self-start mt-5">
                                <div className="self-stretch my-auto text-base text-black text-opacity-60">
                                    {Productslingle?.discount && (
                                        <span className="line-through">
                                            {Productslingle.price}{' '}
                                        </span>
                                    )}
                                </div>
                                <div className="self-stretch my-auto text-2xl font-semibold text-rose-500">
                                    {Productslingle?.discounted_price}{' '}
                                </div>
                            </div>
                        </div>

                        {Productslingle?.filters.map((filter) => {
                            if (
                                filter.filter_name === 'Size' ||
                                filter.filter_name === 'Размер'
                            ) {
                                return (
                                    <div className="flex flex-col mt-7 max-w-full whitespace-nowrap w-[280px]">
                                        <div className="text-sm text-black text-opacity-60">
                                            {filter.filter_name}
                                        </div>
                                        <div className="flex gap-2 mt-3 w-full text-xs  text-black rounded">
                                            {filter.options.map((option) => (
                                                <div
                                                    onClick={() =>
                                                        setCurrentOption(
                                                            option.name
                                                        )
                                                    }
                                                    className={`px-3 min-w-[40px] ${
                                                        currentOption ===
                                                        option.name
                                                            ? 'bg-black text-white'
                                                            : 'bg-white'
                                                    }  py-3.5 text-center cursor-pointer aspect-square rounded border border-solid border-neutral-400`}
                                                >
                                                    {option.name}
                                                </div>
                                            ))}{' '}
                                        </div>
                                    </div>
                                );
                            }
                            if (
                                filter.filter_name === 'Color' ||
                                filter.filter_name === 'Цвет'
                            ) {
                                return (
                                    <div className="flex flex-col mt-7 max-w-full whitespace-nowrap w-[280px]">
                                        <div className="text-sm text-black text-opacity-60">
                                            {filter.filter_name}
                                        </div>
                                        <div className="flex gap-2 mt-3 w-full text-xs  text-black rounded">
                                            {filter.options.map((option) => (
                                                <div
                                                    onClick={() =>
                                                        setCurrentColor(
                                                            option.name
                                                        )
                                                    }
                                                    key={option.is_default}
                                                    className={`flex gap-2.5 cursor-pointer items-center self-stretch pb-1 my-auto w-8 ${
                                                        currentColor ===
                                                        option.name
                                                            ? 'border-b border-black'
                                                            : ''
                                                    } `}
                                                >
                                                    <div
                                                        className="flex self-stretch my-auto w-8 h-8 rounded bg-slate-800 min-h-[32px]"
                                                        style={{
                                                            backgroundColor:
                                                                option?.color_code ||
                                                                'gray',
                                                        }}
                                                    />
                                                </div>
                                            ))}{' '}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        <div className="flex flex-wrap gap-5 items-center mt-7 w-full max-md:max-w-full">
                            {Productslingle?.is_stock && (
                                <div className="flex gap-2 justify-center items-center self-stretch px-4 py-2.5 my-auto w-40 text-sm text-green-600 bg-emerald-50 rounded-[100px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b62d68e0d6115b8dd376935f9a020305d201f125a5ae0023584b7f5eddf7971?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                    />
                                    <div className="self-stretch my-auto">
                                        {tarnslation?.Stokda_var}
                                    </div>
                                </div>
                            )}
                            <div className="flex gap-4 items-center self-stretch my-auto text-base font-semibold min-w-[240px] text-slate-800 w-[276px]">
                                <div className="flex gap-2 items-center self-stretch my-auto">
                                    <div className="flex flex-row gap-1">
                                        {Array.from({
                                            length:
                                                Productslingle?.avg_star || 0,
                                        }).map(() => (
                                            <svg
                                                width="20"
                                                height="19"
                                                viewBox="0 0 20 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                                                    fill="#FABD21"
                                                />
                                            </svg>
                                        ))}
                                    </div>

                                    <div className="self-stretch my-auto">
                                        {Productslingle?.avg_star}
                                        {'  '}
                                        <span className="text-sm leading-4 ">
                                            {'       '}(
                                            {Productslingle?.comments.length}){' '}
                                            {tarnslation?.rey}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5 items-center mt-7 text-base font-medium max-md:max-w-full">
                            <div className="flex flex-wrap gap-3 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                                <button
                                    onClick={async () => {
                                        const userStr =
                                            localStorage.getItem('user-info');
                                        if (userStr) {
                                            const user = JSON.parse(userStr);
                                            console.log(user);

                                            if (Productslingle) {
                                                await addToBasket({
                                                    product_id:
                                                        Productslingle.id,
                                                    price: +Productslingle.price,
                                                    quantity: 1,
                                                    token: user.data.token,
                                                    //ignore type
                                                    options:
                                                        Productslingle.filters
                                                            .map((item) => {
                                                                if (
                                                                    item.filter_name ===
                                                                        'Color' ||
                                                                    item.filter_name ===
                                                                        'Цвет'
                                                                ) {
                                                                    return {
                                                                        filter_id:
                                                                            item.filter_id,
                                                                        option_id:
                                                                            item.options.find(
                                                                                (
                                                                                    option
                                                                                ) =>
                                                                                    option.name ===
                                                                                    currentColor
                                                                            )
                                                                                ?.option_id,
                                                                    };
                                                                }
                                                                if (
                                                                    item.filter_name ===
                                                                        'Size' ||
                                                                    item.filter_name ===
                                                                        'Размер'
                                                                ) {
                                                                    return {
                                                                        filter_id:
                                                                            item.filter_id,
                                                                        option_id:
                                                                            item.options.find(
                                                                                (
                                                                                    option
                                                                                ) =>
                                                                                    option.name ===
                                                                                    currentOption
                                                                            )
                                                                                ?.option_id,
                                                                    };
                                                                }
                                                                return undefined;
                                                            })
                                                            .filter(
                                                                (
                                                                    item
                                                                ): item is {
                                                                    filter_id: number;
                                                                    option_id:
                                                                        | number
                                                                        | undefined;
                                                                } =>
                                                                    item !==
                                                                    undefined
                                                            ),
                                                })
                                                    .then(() => {
                                                        toast.success(
                                                            'Product sucsesfully aded to basked'
                                                        );
                                                    })
                                                    .catch((error) => {
                                                        console.log(error);
                                                        toast.error(
                                                            'something went wrong'
                                                        );
                                                    });
                                            }
                                        } else {
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.login[
                                                        lang as keyof typeof ROUTES.login
                                                    ]
                                                }`
                                            );
                                        }
                                    }}
                                    className="flex max-sm:items-center max-sm:w-full overflow-hidden flex-col justify-center self-stretch px-16 py-3.5 my-auto text-white bg-blue-600 min-w-[240px] rounded-[100px] w-[285px] max-md:px-5"
                                >
                                    <div className="flex gap-2 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12162e338001dffe48b2f7720205d57a300942ee6d909f5e9d356e6bce11941f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                        />
                                        <div className="self-stretch my-auto text-nowrap">
                                            {tarnslation?.add_to_cart}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="flex overflow-hidden max-sm:items-center max-sm:w-full flex-col justify-center self-stretch px-16 py-3.5 my-auto text-blue-600 border border-solid border-slate-300 min-w-[240px] rounded-[100px] w-[285px] max-md:px-5"
                                    onClick={async () => {
                                        const userStr =
                                            localStorage.getItem('user-info');
                                        if (userStr) {
                                            // const user = JSON.parse(userStr);
                                            // console.log(user);
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.ordersConfirm[
                                                        lang as keyof typeof ROUTES.ordersConfirm
                                                    ]
                                                }`
                                            );
                                            // if (Productslingle) {
                                            //     await addToBasket({
                                            //         product_id:
                                            //             Productslingle.id,
                                            //         price: +Productslingle.price,
                                            //         quantity: 1,
                                            //         token: user.data.token,
                                            //         // options: [
                                            //         //     {
                                            //         //         filter_id: 1,
                                            //         //         option_id: 2,
                                            //         //     },
                                            //         //     {
                                            //         //         filter_id: 2,
                                            //         //         option_id: 5,
                                            //         //     },
                                            //         // ],
                                            //     })
                                            //         .then(() => {
                                            //             toast.success(
                                            //                 'Product sucsesfully aded to basked'
                                            //             );
                                            //         })
                                            //         .catch((error) => {
                                            //             console.log(error);
                                            //             toast.error(
                                            //                 'something went wrong'
                                            //             );
                                            //         });
                                            // }
                                        } else {
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.login[
                                                        lang as keyof typeof ROUTES.login
                                                    ]
                                                }`
                                            );
                                        }
                                    }}
                                >
                                    <div className="flex gap-2 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cf4b1351dde0d9ed370b338053886c40c25d9c6e4c0c5a450da1fb19e13e3b?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                        />
                                        <div className="self-stretch my-auto text-nowrap">
                                            {tarnslation?.Bir_kliklə_al}
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div
                                className="bg-[##F5F5F5]  rounded-full w-11 h-11 flex justify-center items-center"
                                onClick={async () => {
                                    const userStr =
                                        localStorage.getItem('user-info');
                                    if (userStr) {
                                        const User = JSON.parse(userStr);
                                        if (User) {
                                            axiosInstance
                                                .post(
                                                    '/favorites/toggleFavorite',
                                                    {
                                                        product_id:
                                                            Productslingle?.id,
                                                    },
                                                    {
                                                        headers: {
                                                            Authorization: `Bearer ${User.data.token}`,
                                                            Accept: 'application/json',
                                                        },
                                                    }
                                                )
                                                .then(() => {
                                                    // toast.success(
                                                    //     'Product is sucsesfully aded to favorites'
                                                    // );
                                                    if (isliked) {
                                                        setisliked(false);
                                                    } else {
                                                        setisliked(true);
                                                    }
                                                    queryClient.invalidateQueries(
                                                        {
                                                            queryKey: [
                                                                'favorites',
                                                            ],
                                                        }
                                                    );
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                });
                                        }
                                    } else {
                                        navigate(
                                            `/${lang}/${
                                                ROUTES.login[
                                                    lang as keyof typeof ROUTES.login
                                                ]
                                            }`
                                        );
                                    }
                                }}
                            >
                                <img
                                    src={
                                        !isliked
                                            ? '/svg/hartBlack.svg'
                                            : '/svg/hartRed.svg'
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                        <div
                            className="flex rounded-3xl bg-stone-50 max-w-[670px] h-fit px-[40px] py-[48px] max-sm:mt-10 mt-[90px] flex-col"
                            dangerouslySetInnerHTML={{
                                __html: Productslingle?.description || '',
                            }}
                        />
                    </section>
                </section>
                <section className="mt-[100px] max-sm:mt-12 bg-[#F8F8F8] max-sm:px-4 px-[40px]">
                    <div className="flex flex-wrap gap-8 justify-start max-md:justify-center items-center max-sm:pt-[24px] pt-[80px]">
                        <div className="flex flex-col justify-center items-center self-stretch p-8 my-auto bg-white rounded-3xl min-w-[240px] w-[296px] max-md:px-5">
                            <div className="text-6xl font-semibold leading-none text-center text-zinc-900 max-md:text-4xl">
                                {Productslingle?.avg_star}{' '}
                            </div>
                            <div className="flex gap-0.5 items-start mt-3">
                                {Array.from({
                                    length: Productslingle?.avg_star || 0,
                                }).map(() => (
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dca374733cb9d1aba7db23d829c0e6bad1c18b8be000a06d9f7eafe138eabb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-6 aspect-square"
                                    />
                                ))}
                            </div>
                            <div className="mt-3 text-sm text-center text-neutral-600">
                                {tarnslation?.İstifadəçi_dəyərləndirməsi}
                                <span className="text-neutral-600">
                                    {' '}
                                    ({Productslingle?.avg_star})
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start self-stretch my-auto min-w-[240px] w-[40%] max-md:w-full">
                            {Productslingle?.rating_summary
                                .map((item) => extractData(item))
                                .filter((item) => item !== null)
                                .map((item, index) => (
                                    <div className="flex max-sm:flex-col flex-row gap-4 justify-between items-center  self-stretch w-full">
                                        <div className="flex flex-row justify-between w-full">
                                            <div className="flex gap-0.5 items-start self-stretch my-auto">
                                                {/* {Array({
                                                    length: 5,
                                                }).map(() => (
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 aspect-square w-[18px]"
                                                    />
                                                ))} */}
                                                {Array.from({
                                                    length: 5 - index,
                                                }).map(() => (
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 aspect-square w-[18px]"
                                                    />
                                                ))}
                                            </div>
                                            <div className=" max-sm:flex  hidden items-start self-stretch my-auto text-sm">
                                                <div className="text-center text-zinc-900">
                                                    {item.procent}%
                                                </div>
                                                <div className="text-slate-500">
                                                    {' '}
                                                    {item.users}{' '}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex overflow-hidden flex-col self-stretch my-auto max-md:min-w-[240px] min-w-[300px]  w-full">
                                            <div className="flex flex-col items-start bg-gray-200 rounded-[100px] max-md:pr-5 max-md:max-w-full">
                                                <div
                                                    className="flex shrink-0 max-w-full h-1 bg-amber-400 rounded-[100px] "
                                                    style={{
                                                        width: `${item.procent}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex max-sm:hidden items-start self-stretch my-auto text-sm min-w-[42px]">
                                            <div className="text-center text-zinc-900">
                                                {item.procent}%
                                            </div>
                                            <div className="text-slate-500">
                                                {' '}
                                                {item.users}{' '}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            {/* {Array.from({ length: 5 }).map(() => (
                                <div className="flex flex-wrap gap-2 justify-start items-center  self-stretch max-md:max-w-full">
                                    <div className="flex flex-row justify-between w-full">
                                        <div className="flex gap-0.5 items-start self-stretch my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/05c694f83396f923195f2ce2eefa5960a5367c7d052eb1bbeca00c5ed8157138?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                            />
                                        </div>
                                        <div className=" max-sm:flex  hidden items-start self-stretch my-auto text-sm">
                                            <div className="text-center text-zinc-900">
                                                63%
                                            </div>
                                            <div className="text-slate-500">
                                                {' '}
                                                (94,532)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex overflow-hidden flex-col self-stretch my-auto min-w-[240px] w-full max-md:max-w-full">
                                        <div className="flex flex-col items-start bg-gray-200 rounded-[100px] max-md:pr-5 max-md:max-w-full">
                                            <div className="flex shrink-0 max-w-full h-1 bg-amber-400 rounded-[100px] w-[312px]" />
                                        </div>
                                    </div>

                                    <div className="flex max-sm:hidden items-start self-stretch my-auto text-sm">
                                        <div className="text-center text-zinc-900">
                                            63%
                                        </div>
                                        <div className="text-slate-500">
                                            {' '}
                                            (94,532)
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                    {Productslingle && tarnslation && (
                        <CommentsSection
                            data={Productslingle}
                            translate={tarnslation}
                        />
                    )}
                </section>
                <section className="px-[40px] max-sm:px-4">
                    <h3 className="text-[28px] font-semibold max-sm:mt-[48px] mt-[100px]">
                        {tarnslation?.Tövsiyyələr}
                    </h3>{' '}
                    {SimularProducts && SimularProducts?.data.length > 0 && (
                        <div className="grid lg:grid-cols-4 md:grid-cols-3   justify-items-center sm:grid-cols-2 grid-cols-1 mb-[100px] mt-[40px] max-sm:mt-[28px] gap-5">
                            {SimularProducts?.data.map((Product, i) => {
                                if (i <= 12) {
                                    if (Product.id !== Productslingle?.id) {
                                        return (
                                            <ProductCard
                                                bg="grey"
                                                data={Product}
                                            />
                                        );
                                    }
                                }
                            })}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}
