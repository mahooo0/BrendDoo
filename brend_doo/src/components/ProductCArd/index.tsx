import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Basket,
    Favorite,
    Product,
    TranslationsKeys,
} from '../../setting/Types';
import ROUTES from '../../setting/routes';
import GETRequest, { axiosInstance } from '../../setting/Request';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useMutation, useQueryClient } from '@tanstack/react-query';
interface Props {
    data?: Product;
    isnew?: boolean;
    issale?: boolean;
    bg: 'white' | 'grey';
}

export default function ProductCard({ data, issale = false, bg }: Props) {
    console.log('ProductCard', data);
    const queryClient = useQueryClient();
    const [isliked, setisliked] = useState<boolean>(false);
    const [isMauseOn, setisMauseOn] = useState<boolean>(false);
    const [BtnLoadin, setBtnLoadin] = useState<boolean>(false);
    const [variant, setvariant] = useState<number>(1);
    const navigate = useNavigate();
    // const [refetchBaskedState, setRefetchBaskedState] =
    //     useRecoilState<boolean>(RefetchBasked);
    const checkLikedProducts = () => {
        if (favorites?.some((item) => item.product.id === data?.id)) {
            setisliked(true);
        } else {
            setisliked(false);
        }
    };

    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();

    const { data: translation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const { data: favorites } = GETRequest<Favorite[]>(
        `/favorites`,
        'favorites',
        [lang]
    );

    const { data: basked } = GETRequest<Basket>(
        `/basket_items`,
        'basket_items',
        [lang]
    );
    console.log('basked', basked);
    const addToBasket = async (Data: {
        product_id: number;
        quantity: number;
        price: number;
        token: string;
        // options:any
    }) => {
        const response = await axios.post(
            'https://brendo.avtoicare.az/api/basket_items',
            {
                product_id: Data.product_id,
                quantity: Data.quantity,
                price: Data.price,
                options:
                    data?.filters && data?.filters.length > 0
                        ? data?.filters.map((filter) => {
                              const defoultOption = filter.options.find(
                                  (item) => +item.is_default === 1
                              );
                              return {
                                  filter_id: filter.filter_id,
                                  option_id: defoultOption?.option_id,
                                  // {
                                  //     filter_id: 1,
                                  //     option_id: 2,
                                  // },
                                  // {
                                  //     filter_id: 2,
                                  //     option_id: 5,
                                  // },
                              };
                          })
                        : [],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Data.token}`,
                },
            }
        );
        return response.data;
    };
    const mutation = useMutation({
        mutationFn: addToBasket,
        onSuccess: () => {
            toast.success('Məhsul səbətə əlavə edildi');
            setBtnLoadin(false);
            // setRefetchBaskedState((prev) => !prev);
            queryClient.invalidateQueries({ queryKey: ['basket_items'] });
        },
        onError: (error) => {
            toast.error('Xəta baş verdi');
            console.error(error);
        },
    });

    useEffect(() => {
        // Initial check on render
        checkLikedProducts();

        // Listener for storage changes across tabs
        // const handleStorageChange = (e: any) => {
        //     if (e.key === 'liked_Produckts') {
        //         checkLikedProducts();
        //     }
        // };

        // // Add storage event listener
        // window.addEventListener('storage', handleStorageChange);

        // // Cleanup listener on unmount
        // return () => {
        //     window.removeEventListener('storage', handleStorageChange);
        // };
    }, [favorites]);

    // For same-tab updates
    useEffect(() => {
        const originalSetItem = localStorage.setItem;

        // Override localStorage.setItem to detect same-tab changes
        localStorage.setItem = function (key, value) {
            const event = new Event('local-storage-changed');
            originalSetItem.apply(this, [key, value]);
            if (key === 'liked_Produckts') {
                window.dispatchEvent(event);
            }
        };

        const handleLocalStorageChange = () => {
            checkLikedProducts();
        };

        // Listen for the custom event
        window.addEventListener(
            'local-storage-changed',
            handleLocalStorageChange
        );

        return () => {
            // Restore original setItem and cleanup
            localStorage.setItem = originalSetItem;
            window.removeEventListener(
                'local-storage-changed',
                handleLocalStorageChange
            );
        };
    }, [data?.id]);
    useEffect(() => {
        let includes = false;
        if (basked) {
            for (let i = 0; i < basked.basket_items?.length; i++) {
                if (basked.basket_items[i]?.product?.id === data?.id) {
                    includes = true;
                }
            }
        }
        if (includes) {
            setvariant(3);
        }

        // if (data && basked?.includes(data)) {
        //     setvariant(3);
        //     console.log('incules');
        // } else {
        //     console.log('isnot');
        // }
        // console.log('data', data);
    }, [basked, data]);
    useEffect(() => {
        let includes = false;
        if (basked) {
            for (let i = 0; i < basked.basket_items?.length; i++) {
                if (basked.basket_items[i]?.product?.id === data?.id) {
                    includes = true;
                }
            }
        }
        if (data && !includes) {
            const fetchData = async () => {
                const userStr = localStorage.getItem('user-info');
                if (userStr) {
                    const user = JSON.parse(userStr);

                    if (variant === 3) {
                        setBtnLoadin(true);
                        mutation.mutate({
                            product_id: data.id,
                            quantity: 1,
                            price: +data.discounted_price,
                            token: user.data.token,
                        });
                        // await axios
                        //     .post(
                        //         'https://brendo.avtoicare.az/api/basket_items',
                        //         {
                        //             product_id: data?.id,
                        //             quantity: 1,
                        //             price: data?.discounted_price,
                        //         },
                        //         {
                        //             headers: {
                        //                 'Content-Type': 'application/json',
                        //                 Authorization: `Bearer ${user.data.token}`,
                        //             },
                        //         }
                        //     )
                        //     .then((res) => {
                        //         toast.success('Məhsul səbətə əlavə edildi');
                        //         setBtnLoadin(false);
                        //         setRefetchBaskedState((prev) => !prev);
                        //     })
                        //     .catch((err) => {
                        //         toast.error('Xəta baş verdi');
                        //     });
                    }
                }
            };
            fetchData();
        }
    }, [variant]);
    if (!data) {
        return (
            <>
                <div className="flex flex-col w-full h-[400px] max-w-sm p-4 bg-gray-100 rounded-3xl animate-pulse">
                    <div className="w-full h-full bg-gray-300 rounded-3xl"></div>
                </div>
            </>
        );
    }

    return (
        <div className="flex cursor-pointer max-sm:min-w-[300px]  flex-col pb-5 text-base text-black  w-full min-w-full ">
            <div
                className={`flex w-full relative bg-${
                    bg === 'white' ? 'white' : '[#F5F5F5]'
                } rounded-3xl p-3  border border-white overflow-hidden border-solid aspect-[0.8]`}
            >
                <img
                    onClick={() => {
                        localStorage.setItem(
                            'ProductSlug',
                            JSON.stringify(data.slug)
                        );
                        navigate(
                            `/${lang}/${
                                ROUTES.product[
                                    lang as keyof typeof ROUTES.product
                                ]
                            }/${data.slug[lang as keyof typeof data.slug]}`
                        );
                    }}
                    className="rounded-3xl hover:scale-110 duration-300 object-cover w-full h-full"
                    src={data?.image}
                    alt=""
                />
                <div
                    className="bg-[#FFFFFF99]  rounded-full w-11 h-11 absolute top-6 right-6 flex justify-center items-center"
                    onClick={async () => {
                        const userStr = localStorage.getItem('user-info');
                        if (userStr) {
                            const User = JSON.parse(userStr);
                            if (User) {
                                axiosInstance
                                    .post(
                                        '/favorites/toggleFavorite',
                                        { product_id: data.id },
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
                                        queryClient.invalidateQueries({
                                            queryKey: ['favorites'],
                                        });
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
                            !isliked ? '/svg/hartBlack.svg' : '/svg/hartRed.svg'
                        }
                        alt=""
                    />
                </div>
                {data.is_new && (
                    <div className="bg-[#8E98B8] text-white px-3 py-2 h-fit  rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px] font-medium leading-[14px]">
                            Yeni
                        </p>{' '}
                    </div>
                )}
                {data?.discount && (
                    <div className="bg-[#FF3C79] text-white px-3 py-2  h-fit rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px]  font-medium leading-[14px]">
                            {data?.discount}% {translation?.endirim}
                        </p>{' '}
                    </div>
                )}
                <div
                    className="w-full h-[100px] absolute bottom-0 left-0 flex justify-center items-center overflow-hidden"
                    onMouseLeave={() => {
                        setisMauseOn(false);
                    }}
                    onMouseEnter={() => {
                        setisMauseOn(true);
                    }}
                >
                    {variant === 1 && (
                        <div
                            onClick={() => {
                                const userStr =
                                    localStorage.getItem('user-info');
                                if (userStr) {
                                    if (
                                        data.filters.find(
                                            (item) =>
                                                item.filter_name === 'Size' ||
                                                item.filter_name === 'Размер'
                                        )
                                    ) {
                                        setvariant(2);
                                    } else {
                                        setvariant(3);
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
                            className={`flex max-sm:hidden overflow-hidden flex-col justify-center items-center px-16 py-3.5 text-base font-medium text-white bg-blue-600 max-w-[301px] rounded-[100px] duration-300 ${
                                isMauseOn ? ' opacity-100' : ' opacity-0'
                            }`}
                        >
                            <div className="flex gap-2 items-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccd2f29609bd70219e8403081a0990ef297d5230b91e7fae2658815da1e44173?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                />
                                <div className="self-stretch text-nowrap my-auto ">
                                    {translation?.add_to_cart}
                                </div>
                            </div>
                        </div>
                    )}
                    {variant === 2 && (
                        <div className="flex overflow-hidden flex-col justify-center px-3.5 py-2 text-xs text-black whitespace-nowrap rounded-xl bg-white bg-opacity-80 max-w-[278px]">
                            <div className="flex flex-col w-full">
                                <div className="flex gap-2 w-full rounded">
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        XS
                                    </div>
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        S
                                    </div>
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        M
                                    </div>
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        L
                                    </div>
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        XL
                                    </div>
                                    <div
                                        onClick={() => setvariant(3)}
                                        className="px-2.5 py-3 text-center w-[36px] aspect-square rounded border border-solid border-neutral-400 hover:bg-[#8E98B8] hover:cursor-pointer hover:text-white"
                                    >
                                        2X
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {variant === 3 && (
                        <div className="flex overflow-hidden flex-col justify-center px-14 lg:py-3 py-auto items-center text-base font-medium bg-slate-300 max-w-[301px] rounded-[100px] text-slate-800">
                            <div className="flex gap-2 items-center">
                                {BtnLoadin ? (
                                    <div className=" h-6 w-6">
                                        <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                                    </div>
                                ) : (
                                    <>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aea5798032300cff0cb8633f827efc8d9c19b5e90bd7d2d3214a3fe5775d3b4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                        <div className="self-stretch text-nowrap my-auto">
                                            {translation?.added_to_cart}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col mt-5 w-full">
                <div className="pr-2">{data?.title} </div>
                <div className=" flex flex-row gap-2">
                    {data?.discount && (
                        <div className="mt-3 font-semibold text-[14px] line-through opacity-60">
                            {data?.price}
                        </div>
                    )}

                    <div
                        className="mt-3 font-semibold"
                        style={issale ? { color: '#FC3976' } : {}}
                    >
                        {' '}
                        {data?.discounted_price}{' '}
                    </div>
                </div>
            </div>
        </div>
    );
}
