import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClothingMenu, { CategoryHeader } from '../ClothingMenu';
import ROUTES, { getRouteKey } from '../../setting/routes';
import GETRequest from '../../setting/Request';
import {
    Basket,
    Category,
    Product,
    ProductResponse,
    SubCategory,
    TopLine,
    TranslationsKeys,
} from '../../setting/Types';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import { RefetchBasked } from '../../setting/StateManagmant';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Story from './story';
import CategoryNavigation from '../CategoryPop';
function disableScrolling() {
    // const scrollTop = window.scrollY;
    document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${scrollTop}px`;
}
function enableScrolling() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, scrollTop);
}
export default function Header() {
    const [isCatalogOpen, setIsClothingOpen] = useState<boolean>(false);
    const [isBaskedOpen, setIsBaskedOpen] = useState<boolean>(false);
    // Search
    const [SearchValue, setSearchValue] = useState<string>('');
    const [User, setUser] = useState<any | null>(null);
    const [debouncedValue, setDebouncedValue] = useState(SearchValue);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    // Search

    const [showaside, setShowAside] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [showSubCAtegoryes, setshowSubCAtegoryes] = useState<number>(-1);
    const [currentSubCategoryId, setCurrentSubCategoryId] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        lang = 'ru',
        page,
        slug,
    } = useParams<{ lang: string; page: string; slug: string }>();
    const navigate = useNavigate();

    const CatalogBtnRef = useRef<HTMLDivElement | null>(null);
    const CAtalogDiv = useRef<HTMLDivElement | null>(null);
    const [refetchBaskedState, setRefetchBaskedState] =
        useRecoilState<boolean>(RefetchBasked);

    const BaskedBtnRef = useRef<HTMLDivElement | null>(null);
    const BaskedDiv = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus(); // Focus the input element
            inputRef.current?.click(); // Focus the input element
        }
    }, [isSearchOpen === true]);

    useEffect(() => {
        const handleOutsideClicked = (e: any) => {
            if (
                CatalogBtnRef.current &&
                !CatalogBtnRef.current.contains(e.target as Node) &&
                CAtalogDiv.current &&
                !CAtalogDiv.current.contains(e.target as Node)
            ) {
                console.log('outsideClick');
                setIsClothingOpen(false);

                // enableScrolling();
            } else {
                console.log('insideClick');
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClicked);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClicked);
        };
    }, [CAtalogDiv.current, CatalogBtnRef.current]);

    useEffect(() => {
        const handleOutsideClicked = (e: any) => {
            if (
                BaskedBtnRef.current &&
                !BaskedBtnRef.current.contains(e.target as Node) &&
                BaskedDiv.current &&
                !BaskedDiv.current.contains(e.target as Node)
            ) {
                // console.log('outsideClick');
                setIsBaskedOpen(false);
                // enableScrolling();
            } else {
                console.log('insideClick');
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClicked);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClicked);
        };
    }, [BaskedDiv.current, BaskedBtnRef.current]);
    useEffect(() => {
        if (
            isCatalogOpen === false &&
            isBaskedOpen === false &&
            SearchValue === ''
        ) {
            enableScrolling();
        }
    }, [isBaskedOpen, isCatalogOpen, SearchValue]);

    const Navigae = useNavigate();
    const HandleSetUrlByLang = (Lang: string) => {
        if (page) {
            const newPage = getRouteKey(page);
            if (slug) {
                const strSlug = localStorage.getItem('ProductSlug');
                if (strSlug) {
                    const Slug = JSON.parse(strSlug);
                    const NewSlug = Slug[Lang];
                    console.log('NewSlug:', NewSlug);

                    Navigae(
                        newPage
                            ? `/${Lang}/${
                                  ROUTES[newPage][
                                      Lang as keyof typeof ROUTES.home
                                  ]
                              }/${NewSlug}`
                            : '/'
                    );
                    return;
                }
            }
            Navigae(
                newPage
                    ? `/${Lang}/${
                          ROUTES[newPage][Lang as keyof typeof ROUTES.home]
                      }`
                    : '/'
            );
        } else {
            Navigae(
                `/${Lang}/${ROUTES.home[Lang as keyof typeof ROUTES.home]}`
            );
        }
    };
    useEffect(() => {
        setRefetchBaskedState((prev) => !prev);

        const userStr = localStorage.getItem('user-info');

        if (userStr) {
            const User = JSON.parse(userStr);
            setUser(User);
        }
    }, []);
    const RemoveFromBasked = async (id: number) => {
        const userStr = localStorage.getItem('user-info');
        if (userStr) {
            const User = JSON.parse(userStr);
            if (User) {
                await axios.delete(
                    `https://brendo.avtoicare.az/api/basket_items/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${User.data.token}`,
                            Accept: 'application/json',
                        },
                    }
                );
            }
        }
    };
    const UpdateBasked = async (
        id: number,
        price: string,
        quantity: number
    ) => {
        const userStr = localStorage.getItem('user-info');
        if (userStr) {
            const User = JSON.parse(userStr);
            if (User) {
                await axios.put(
                    `https://brendo.avtoicare.az/api/basket_items/${id}`,
                    { price, quantity },
                    {
                        headers: {
                            Authorization: `Bearer ${User.data.token}`,
                            Accept: 'application/json',
                        },
                    }
                );
            }
        }
    };
    const queryClient = useQueryClient();

    const RemoveFromBaskedmutation = useMutation({
        mutationFn: RemoveFromBasked,
        onSuccess: () => {
            toast.success('Məhsul səbətdən silindi');
            queryClient.invalidateQueries({ queryKey: ['basket_items'] });
        },
        onError: (error) => {
            toast.error('Xəta baş verdi');
            console.error(error);
        },
    });
    const UpdateBaskedmutation = useMutation({
        mutationFn: ({
            id,
            price,
            quantity,
        }: {
            id: number;
            price: string;
            quantity: number;
        }) => UpdateBasked(id, price, quantity),
        onSuccess: () => {
            toast.success('Məhsul səbətdən silindi');
            queryClient.invalidateQueries({ queryKey: ['basket_items'] });
        },
        onError: (error) => {
            toast.error('Xəta baş verdi');
            console.error(error);
        },
    });

    const { data: categories, isLoading: categoriesLoading } = GETRequest<
        Category[]
    >(`/categories`, 'categories', [lang]);
    const { data: FilteredProduct } = GETRequest<ProductResponse>(
        `/products${
            debouncedValue
                ? `?search=${debouncedValue} ${
                      currentSubCategoryId === 0
                          ? ''
                          : `&sub_category_id=${currentSubCategoryId}`
                  }`
                : ``
        }`,
        'products',
        [lang, debouncedValue, currentSubCategoryId]
    );
    const { data: translation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const { data: basked, isLoading: baskedLoading } = GETRequest<Basket>(
        `/basket_items`,
        'basket_items',
        [lang, refetchBaskedState]
    );
    const { data: top_line } = GETRequest<TopLine>(`/top_line`, 'top_line', [
        lang,
    ]);
    console.log('basked:', basked);

    useEffect(() => {
        console.log('refetchBaskedState:', refetchBaskedState);
    }, [refetchBaskedState]);

    return (
        <div className="  block w-full z-[99999999999] top-0 min-h-[68px]">
            <div className=" lg:flex hidden flex-col relative bg-white">
                {top_line?.top_line && (
                    <div className="w-full bg-[#3873C3] h-[40px] text-center text-[14px] font-normal text-white flex items-center justify-center">
                        {top_line.data?.title}
                    </div>
                )}

                <div className="flex overflow-hidden flex-wrap gap-5  justify-between items-center px-10 py-2.5 w-full text-black border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                    <Link
                        className="w-[200px]"
                        to={`/${lang}/${
                            ROUTES.home[lang as keyof typeof ROUTES.home]
                        }`}
                    >
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch aspect-[1.4] w-[140px]"
                        />
                    </Link>

                    <div className="flex flex-col gap-3 justify-center items-center  my-auto text-base max-md:max-w-full ">
                        <div className="flex flex-row justify-around gap-3">
                            {categories?.map((category: Category) => (
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }?category=${category.id}`}
                                >
                                    <div className="self-stretch my-auto">
                                        {category.title}
                                    </div>
                                </Link>
                            ))}
                            {categoriesLoading && (
                                <div className="flex gap-6">
                                    <div className="self-stretch my-auto w-24 h-6 bg-gray-200 animate-pulse"></div>
                                    <div className="self-stretch my-auto w-24 h-6 bg-gray-200 animate-pulse"></div>
                                    <div className="self-stretch my-auto w-24 h-6 bg-gray-200 animate-pulse"></div>
                                </div>
                            )}
                            <Link
                                to={`/${lang}/${
                                    ROUTES.brends[
                                        lang as keyof typeof ROUTES.brends
                                    ]
                                }`}
                            >
                                <div className="self-stretch my-auto">
                                    {translation?.Brendlər}
                                </div>
                            </Link>
                            <Link
                                to={`/${lang}/${
                                    ROUTES.product[
                                        lang as keyof typeof ROUTES.product
                                    ]
                                }?discount=true`}
                            >
                                <div className="self-stretch my-auto">
                                    {' '}
                                    {translation?.Endirim}
                                </div>
                            </Link>
                            <Link
                                to={`/${lang}/${
                                    ROUTES.product[
                                        lang as keyof typeof ROUTES.product
                                    ]
                                }`}
                            >
                                <div className="self-stretch my-auto">
                                    {translation?.Bütün_məhsullar}
                                </div>
                            </Link>
                        </div>
                        <div className="flex overflow-hidden flex-nowrap gap-10 self-stretch mx-auto h-[50px] py-1.5 pr-1.5 pl-5 whitespace-nowrap bg-neutral-100 rounded-[100px] text-black text-opacity-60 lg:w-[50%] max-w-[514px] w-full justify-between">
                            <input
                                type="text"
                                placeholder="Axtar"
                                value={SearchValue}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    const value = e.target.value;
                                    setSearchValue(value);
                                    if (debounceTimeout.current) {
                                        clearTimeout(debounceTimeout.current);
                                    }
                                    debounceTimeout.current = setTimeout(() => {
                                        setDebouncedValue(value);

                                        if (value !== '') {
                                            disableScrolling();
                                            // Add your additional logic here
                                        } else {
                                            enableScrolling();
                                        }
                                    }, 300);
                                    // if (e.target.value !== '') {
                                    //     disableScrolling();
                                    //     setIsClothingOpen(false);
                                    //     setIsBaskedOpen(false);
                                    // } else {
                                    //     enableScrolling();
                                    // }
                                }}
                                className="bg-transparent outline-none flex-1 text-black text-opacity-60 my-auto"
                            />

                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f662e6db87fdef7a0f47b78d88abe073291cb9bd2390dd8047857b7fd35816f4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-11 aspect-square"
                            />
                        </div>{' '}
                    </div>
                    <div className="flex gap-6 items-center self-stretch my-auto text-sm">
                        <div className="flex gap-2 items-center self-stretch my-auto ">
                            <div className="flex gap-2 self-stretch my-auto text-sm text-black">
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.liked[
                                            lang as keyof typeof ROUTES.liked
                                        ]
                                    }`}
                                >
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                                    />
                                </Link>

                                <div
                                    ref={BaskedBtnRef}
                                    className="flex gap-3 cursor-pointer  items-center"
                                    onClick={() => {
                                        if (User) {
                                            setIsClothingOpen(false);
                                            setSearchValue('');
                                            setRefetchBaskedState(
                                                !refetchBaskedState
                                            );

                                            if (!isBaskedOpen) {
                                                disableScrolling();
                                            } else {
                                                enableScrolling();
                                            }
                                            setIsBaskedOpen((prev) => !prev);
                                        } else {
                                            Navigae(
                                                `/${lang}/${
                                                    ROUTES.login[
                                                        lang as keyof typeof ROUTES.login
                                                    ]
                                                }`
                                            );
                                        }
                                    }}
                                >
                                    <div className="w-[48px] h-[48px] rounded-full bg-[#3873C3] flex justify-center items-center relative">
                                        <img src="/svg/basked.svg" />
                                        <div className="w-[12px] h-[12px] flex justify-center items-center  text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                            {basked?.basket_items?.length}
                                        </div>
                                    </div>
                                    {/* {User && (
                                        <div className="self-stretch my-auto">
                                            {basked?.final_price}
                                            AZN
                                        </div>
                                    )} */}
                                </div>
                            </div>
                            <div
                                className="flex gap-3 items-center self-stretch my-auto cursor-pointer"
                                onClick={() => {
                                    const userStr =
                                        localStorage.getItem('user-info');
                                    if (userStr) {
                                        // const User = JSON.parse(userStr);

                                        // if (User) {
                                        // }
                                        Navigae(
                                            `/${lang}/${
                                                ROUTES.userSettings[
                                                    lang as keyof typeof ROUTES.userSettings
                                                ]
                                            }`
                                        );
                                    } else {
                                        Navigae(
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
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c5ef44547ee29c9aeeedd574f237ce849c00eefa59f62c0355b167c347f116?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                />
                            </div>
                            {/* </Link> */}

                            <div className=" flex flex-row gap-2 cursor-pointer">
                                <button
                                    onClick={() => HandleSetUrlByLang('ru')}
                                    className={`w-[36px] h-[36px] rounded-md ${
                                        lang === 'ru'
                                            ? 'bg-[#B1C7E4]'
                                            : 'bg-[#F5F5F5]'
                                    } text-black flex justify-center items-center`}
                                >
                                    RU
                                </button>
                                <div
                                    className={`w-[36px] h-[36px] rounded-md ${
                                        lang === 'en'
                                            ? 'bg-[#B1C7E4]'
                                            : 'bg-[#F5F5F5]'
                                    } text-black flex justify-center items-center`}
                                    onClick={() => HandleSetUrlByLang('en')}
                                >
                                    EN
                                </div>{' '}
                                {/* <div className="w-[36px] h-[36px] rounded-md bg-[#F5F5F5] text-black flex justify-center items-center">
                                    AZ
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex overflow-hidden  flex-row gap-5 justify-between items-center px-10 py-4 w-full text-base bg-white border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                    <div
                        ref={CatalogBtnRef}
                        className="flex flex-col min-w-[150px] justify-center self-stretch px-7 py-3 cursor-pointer my-auto font-medium text-white whitespace-nowrap bg-blue-600 min-h-[48px] rounded-[100px] max-md:px-5"
                        onClick={() => {
                            setIsClothingOpen((prew) => !prew);
                            setSearchValue('');
                            setIsBaskedOpen(false);
                            if (!isCatalogOpen) {
                                disableScrolling();
                            } else {
                                enableScrolling();
                            }
                        }}
                    >
                        <div className="flex gap-3 items-center w-full ">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35befc4b842efe2488b26ce91bb004beac36ff324b59192df49471be348bd1ac?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-6 rounded-md aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                {' '}
                                {translation?.Kataloq}
                            </div>
                        </div>
                    </div>
                    <Story />
                    {/* make it story */}
                    {/* <div className="flex overflow-hidden flex-nowrap gap-10 self-stretch py-1.5 pr-1.5 pl-5 whitespace-nowrap bg-neutral-100 rounded-[100px] text-black text-opacity-60 lg:w-[50%] max-w-[514px] w-full justify-between">
                        <input
                            type="text"
                            placeholder="Axtar"
                            value={SearchValue}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const value = e.target.value;
                                setSearchValue(value);
                                if (debounceTimeout.current) {
                                    clearTimeout(debounceTimeout.current);
                                }
                                debounceTimeout.current = setTimeout(() => {
                                    setDebouncedValue(value);

                                    if (value !== '') {
                                        disableScrolling();
                                        // Add your additional logic here
                                    } else {
                                        enableScrolling();
                                    }
                                }, 300);
                                // if (e.target.value !== '') {
                                //     disableScrolling();
                                //     setIsClothingOpen(false);
                                //     setIsBaskedOpen(false);
                                // } else {
                                //     enableScrolling();
                                // }
                            }}
                            className="bg-transparent outline-none flex-1 text-black text-opacity-60 my-auto"
                        />

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f662e6db87fdef7a0f47b78d88abe073291cb9bd2390dd8047857b7fd35816f4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 w-11 aspect-square"
                        />
                    </div> */}
                    {/* <div className="flex gap-6 self-stretch my-auto text-sm text-black">
                        <Link
                            to={`/${lang}/${
                                ROUTES.liked[lang as keyof typeof ROUTES.liked]
                            }`}
                        >
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                            />
                        </Link>

                        <div
                            ref={BaskedBtnRef}
                            className="flex gap-3 cursor-pointer  items-center"
                            onClick={() => {
                                if (User) {
                                    setIsClothingOpen(false);
                                    setSearchValue('');
                                    setRefetchBaskedState(!refetchBaskedState);

                                    if (!isBaskedOpen) {
                                        disableScrolling();
                                    } else {
                                        enableScrolling();
                                    }
                                    setIsBaskedOpen((prev) => !prev);
                                } else {
                                    Navigae(
                                        `/${lang}/${
                                            ROUTES.login[
                                                lang as keyof typeof ROUTES.login
                                            ]
                                        }`
                                    );
                                }
                            }}
                        >
                            <div className="w-[48px] h-[48px] rounded-full bg-[#3873C3] flex justify-center items-center relative">
                                <img src="/svg/basked.svg" />
                                <div className="w-[12px] h-[12px] flex justify-center items-center  text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                    {basked?.basket_items?.length}
                                </div>
                            </div>
                            {User && (
                                <div className="self-stretch my-auto">
                                    {basked?.final_price}
                                    AZN
                                </div>
                            )}
                        </div>
                    </div> */}
                </div>
                <div
                    className="absolute w-full min-h-[90vh] bg-black  top-[31vh] z-50 bg-opacity-[60%] px-10 py-2"
                    style={{
                        display: isCatalogOpen ? 'block' : 'none',
                    }}
                >
                    <div ref={CAtalogDiv} className="w-full">
                        {categories && (
                            // <ClothingMenu
                            //     translation={translation}
                            //     data={categories}
                            //     ref={CAtalogDiv}
                            //     setIsCatalogOpen={(value) => {
                            //         setIsClothingOpen(value);
                            //     }}
                            // />
                            <CategoryNavigation />
                        )}
                    </div>
                    {/* 
                    <div
                        className="w-[300px] h-[300px] bg-white bg-opacity-100"
                        ref={myToggleMenuRef}
                    >
                        <h1 className="text-red-500">my toggle menu</h1>
                    </div> */}
                </div>
                {/* search bar */}
                <div
                    className="absolute top-[100%] w-full h-[100vh] px-10 py-2 z-[99999999999] bg-black bg-opacity-60"
                    style={
                        SearchValue === ''
                            ? { display: 'none' }
                            : { display: 'block' }
                    }
                >
                    <div
                        className="h-[200vh] bg-black bg-opacity-60 w-full absolute top-0 left-0 z-[-1] "
                        onClick={() => {
                            setSearchValue('');
                            enableScrolling();
                        }}
                    />
                    <div className="flex overflow-hidden flex-wrap gap-10 items-start py-10 pr-20 pl-10 bg-white rounded-3xl max-md:px-5">
                        <div className="flex flex-col whitespace-nowrap min-w-[280px]">
                            <div className="text-sm text-black text-opacity-60">
                                {translation?.Kateqoriyalar}
                            </div>
                            <div className="flex flex-col mt-7 w-full text-lg font-medium text-black">
                                {categories?.map(
                                    (category: Category, index: number) => (
                                        <>
                                            <CategoryHeader
                                                title={category.title}
                                                isOpen={
                                                    showSubCAtegoryes === index
                                                }
                                                onToggle={() => {
                                                    showSubCAtegoryes === index
                                                        ? setshowSubCAtegoryes(
                                                              -1
                                                          )
                                                        : setshowSubCAtegoryes(
                                                              index
                                                          );
                                                }}
                                            />
                                            {showSubCAtegoryes === index && (
                                                <ul
                                                    className="custom-scrollbar flex flex-col  py-3 items-center max-md:px-0 max-md:rounded-none px-5 mt-4 w-full text-base text-black whitespace-nowrap rounded-3xl  bg-stone-50 max-h-[150px] overflow-y-scroll"
                                                    style={{
                                                        scrollbarWidth: 'thin', // For Firefox
                                                        scrollbarColor:
                                                            '#a0aec0 #edf2f7', // thumb color and track color for Firefox
                                                    }}
                                                >
                                                    {' '}
                                                    {category?.subCategories?.map(
                                                        (
                                                            subcategory: SubCategory,
                                                            index: number
                                                        ) => (
                                                            <li
                                                                onClick={() =>
                                                                    setCurrentSubCategoryId(
                                                                        subcategory.id
                                                                    )
                                                                }
                                                                key={index}
                                                                className="flex flex-col w-full cursor-pointer"
                                                            >
                                                                <span>
                                                                    {
                                                                        subcategory.title
                                                                    }
                                                                </span>
                                                                <div className="mt-3 max-w-full border border-solid border-black border-opacity-10 min-h-[1px] w-[312px]" />
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            )}
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch w-px border border-solid border-black border-opacity-10 h-[305px]" />
                        <div className="flex flex-col w-3/5">
                            <div className="text-sm text-black text-opacity-60">
                                {translation?.Məhsullar}
                            </div>
                            <div className="grid xl:grid-cols-2   grid-cols-1 max-h-[270px] overflow-y-scroll flex-col mt-5 w-full  no-scrollbar gap-4">
                                {FilteredProduct?.data?.map((item: Product) => (
                                    <div
                                        className="flex gap-2.5 items-center w-full min-w-[120px] cursor-pointer"
                                        onClick={() =>
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.product[
                                                        lang as keyof typeof ROUTES.product
                                                    ]
                                                }/${
                                                    item.slug[
                                                        lang as keyof typeof item.slug
                                                    ]
                                                }`
                                            )
                                        }
                                    >
                                        <img
                                            loading="lazy"
                                            src={item.image}
                                            className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-square w-[120px]"
                                        />
                                        <div className="flex flex-col justify-center self-stretch my-auto">
                                            <div className="text-sm text-black">
                                                {item.title}
                                            </div>
                                            <div className="mt-2.5 text-base font-semibold text-black">
                                                {item.discounted_price}{' '}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* search bar */}
                {/* basked bar */}

                <div
                    ref={BaskedDiv}
                    className="bg-black  bg-opacity-60 absolute top-[100%] w-full h-[100vh] px-10 py-2 z-[99999999999]"
                    style={
                        !isBaskedOpen
                            ? { display: 'none' }
                            : { display: 'block' }
                    }
                >
                    <div
                        className="h-[200vh] bg-black bg-opacity-60 w-full absolute top-0 left-0 z-[-1] "
                        onClick={() => {
                            setIsBaskedOpen(false);
                            enableScrolling();
                        }}
                    />
                    <div className="flex overflow-hidden max-h-[60vh] flex-col items-center pt-10 bg-white rounded-3xl max-w-[511px] absolute right-4">
                        <div className="flex gap-5 justify-between w-full max-w-[432px] max-md:max-w-full mx-[40px]">
                            <div className="text-lg font-semibold text-center text-slate-800">
                                {translation?.Səbətdəki_məhsullarım}
                            </div>
                            <div className="flex gap-2 items-center py-0.5 text-sm font-medium text-blue-600 whitespace-nowrap border-b border-solid border-b-blue-600">
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.order[
                                            lang as keyof typeof ROUTES.order
                                        ]
                                    }`}
                                >
                                    <div className="self-stretch my-auto">
                                        {translation?.Səbətim}
                                    </div>
                                </Link>

                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f2acd9a318cf187f0283026a4fe39d7a878ed09e47ff9f7a31b2fad77b951f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                />
                            </div>
                        </div>
                        {/* onecard */}

                        {basked && basked?.basket_items.length > 0 ? (
                            <div className="overflow-y-scroll h-[40vh] px-[24px]">
                                {basked.basket_items?.map((item) => (
                                    <div>
                                        <div className="flex gap-8 items-center mt-[4px] justify-between max-md:max-w-full mx-[40px]">
                                            <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                                <img
                                                    loading="lazy"
                                                    src={item.product.image}
                                                    className="object-cover shrink-0 self-stretch my-auto rounded-3xl h-[100px] w-[100px]"
                                                />
                                                <div className="flex flex-col self-stretch my-auto w-[152px]">
                                                    <div className="w-full text-sm font-medium text-black">
                                                        {item.product.title}
                                                    </div>
                                                    <div className="flex flex-col items-start mt-2.5 w-full text-xs text-black text-opacity-80">
                                                        <div className="flex gap-3 items-start">
                                                            {item.options.map(
                                                                (item) => (
                                                                    <div>
                                                                        {' '}
                                                                        {
                                                                            item.option
                                                                        }{' '}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 items-center self-stretch my-auto text-sm text-white whitespace-nowrap">
                                                <button
                                                    disabled={
                                                        item.quantity === 1
                                                    }
                                                    onClick={async () => {
                                                        UpdateBaskedmutation.mutate(
                                                            {
                                                                id: item.id,
                                                                price: item.price,
                                                                quantity:
                                                                    item.quantity -
                                                                    1,
                                                            }
                                                        );
                                                    }}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9358261fb5c9b47ddda71283dc2e74a91d2ff5650a77a1cca91a21f654228?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                                    />
                                                </button>
                                                <div className="overflow-hidden flex justify-center items-center self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-slate-400">
                                                    {item.quantity}
                                                </div>
                                                <button
                                                    onClick={async () => {
                                                        UpdateBaskedmutation.mutate(
                                                            {
                                                                id: item.id,
                                                                price: item.price,
                                                                quantity:
                                                                    item.quantity +
                                                                    1,
                                                            }
                                                        );
                                                    }}
                                                >
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9ffafd163cac5114cd6b3eb85e5013d893da6f8069d8e1ffe1279f71fe8a3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 justify-between mt-3 w-full text-base font-semibold text-center text-black max-w-[431px] max-md:max-w-full mx-[40px]">
                                            <div className="flex gap-10 items-center self-start">
                                                <div className="gap-1 self-stretch my-auto">
                                                    {item.price} AZN
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    RemoveFromBaskedmutation.mutate(
                                                        item.id
                                                    )
                                                }
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8def1bebbad3cbf09bef8d55ed4ec86d21afaa0e256174b36745ad28b51cc5f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                    className="object-contain shrink-0 w-7 aspect-square"
                                                />
                                            </button>
                                        </div>
                                        <div className="mx-[40px] shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px]" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {baskedLoading ? (
                                    <>
                                        <div className="overflow-y-scroll h-[40vh] px-[24px]">
                                            {[1, 2, 3].map((item) => (
                                                <div key={item}>
                                                    <div className="flex gap-8 items-center mt-[4px] justify-between max-md:max-w-full mx-[40px]">
                                                        <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                                            {/* Image skeleton */}
                                                            <div className="animate-pulse bg-gray-200 rounded-3xl h-[100px] w-[100px]" />
                                                            <div className="flex flex-col self-stretch my-auto w-[152px]">
                                                                {/* Title skeleton */}
                                                                <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                                                                {/* Options skeleton */}
                                                                <div className="flex gap-3 items-start mt-2.5">
                                                                    <div className="h-3 bg-gray-200 rounded w-12 animate-pulse" />
                                                                    <div className="h-3 bg-gray-200 rounded w-12 animate-pulse" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Quantity controls skeleton */}
                                                        <div className="flex gap-1 items-center self-stretch my-auto">
                                                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                                                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                                                            <div className="w-8 h-8 bg-gray-200 rounded-lg animate-pulse" />
                                                        </div>
                                                    </div>
                                                    {/* Price and remove button skeleton */}
                                                    <div className="flex gap-5 justify-between mt-3 w-full max-w-[431px] max-md:max-w-full mx-[40px]">
                                                        <div className="flex gap-10 items-center self-start">
                                                            <div className="h-5 bg-gray-200 rounded w-16 animate-pulse" />
                                                        </div>
                                                        <div className="w-7 h-7 bg-gray-200 rounded animate-pulse" />
                                                    </div>
                                                    {/* Divider */}
                                                    <div className="mx-[40px] shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px]" />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className="text-lg font-semibold text-gray-500">
                                            'Your basket is empty.'
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between self-stretch  py-5 mt-10  px-[40px] bg-slate-100  max-md:max-w-full w-full">
                            <div className="flex gap-3 items-center my-auto">
                                <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                    {translation?.Cəmi_məbləğ}
                                </div>
                                <div className="self-stretch my-auto text-lg font-semibold text-center text-blue-600">
                                    {basked?.final_price}
                                    AZN
                                </div>
                            </div>
                            <Link to="/user/basked/confirm">
                                <div className="gap-2.5 self-stretch px-10 py-4 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5">
                                    {translation?.Sifariş_et}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobil header */}
            <div className="lg:hidden items-center flex h-[68px] px-4 justify-between w-full fixed bg-white z-50">
                <Link to={'/'}>
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className={`object-contain shrink-0 self-stretch aspect-[1.4] duration-300 w-[70px] ${
                            isSearchOpen || showaside
                                ? 'opacity-0   '
                                : 'opacity-100'
                        } `}
                    />
                </Link>
                {/* <div className="flex gap-4 items-center"> */}
                <div
                    className={` top-[14px] flex justify-between ease-in-out  duration-500  pr-[16px] z-[54] ${
                        isSearchOpen
                            ? ' left-[16px] h-[40px]  w-[93%] bg-[#F5F5F5] rounded-[100px] '
                            : ' right-[6rem]  w-fit '
                    } `}
                >
                    <button
                        className={`${showaside ? 'opacity-0' : 'opacity-100'}`}
                        onClick={() => {
                            setIsSearchOpen(true);
                        }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="40"
                                height="40"
                                rx="20"
                                fill="#F5F5F5"
                            />
                            <g clip-path="url(#clip0_921_3507)">
                                <circle
                                    cx="19.1667"
                                    cy="19.1665"
                                    r="7.5"
                                    stroke="black"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M28.1767 27.4791C28.1244 27.558 28.03 27.6525 27.8411 27.8413C27.6523 28.0302 27.5579 28.1246 27.479 28.1768C27.0168 28.4829 26.3916 28.3251 26.1299 27.8365C26.0853 27.7531 26.0469 27.6252 25.9703 27.3693C25.8865 27.0898 25.8446 26.95 25.8365 26.8517C25.7889 26.2725 26.2723 25.789 26.8515 25.8367C26.9498 25.8448 27.0896 25.8867 27.3691 25.9704C27.625 26.0471 27.7529 26.0854 27.8363 26.1301C28.325 26.3918 28.4827 27.017 28.1767 27.4791Z"
                                    stroke="black"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_921_3507">
                                    <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                        transform="translate(10 10)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        className={`h-full w-full bg-transparent  outline-none  ${
                            isSearchOpen ? 'opacity-100' : 'hidden'
                        } `}
                        name=""
                    />
                    <button
                        className={` flex justify-center items-center ${
                            isSearchOpen ? 'opacity-100' : 'opacity-0'
                        } `}
                        onClick={() => {
                            setIsSearchOpen(false);
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 5L5 15"
                                stroke="black"
                                stroke-opacity="0.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M5 5L15 15"
                                stroke="black"
                                stroke-opacity="0.8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <button
                    className={`flex gap-3 items-center ${
                        isSearchOpen || showaside ? 'opacity-0' : 'opacity-100'
                    }  `}
                    onClick={() => {
                        setIsBaskedOpen((prev) => !prev);
                        if (!isBaskedOpen) {
                            setIsClothingOpen(false);
                            setSearchValue('');
                            disableScrolling();
                        } else {
                            enableScrolling();
                        }
                    }}
                >
                    <Link to="/basked/sifarislerim">
                        <div className="w-[40px] h-[40px] rounded-full bg-[#3873C3] flex justify-center items-center relative">
                            <img src="/svg/basked.svg" />
                            <div className="w-[12px] h-[12px] flex justify-center items-center  text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                2
                            </div>
                        </div>
                    </Link>
                </button>
                <div className="relative ">
                    <div
                        onClick={() => {
                            setShowAside((prew) => !prew);
                        }}
                        className={`w-[40px] h-[40px] aspect-square rounded-full duration-300 bg-[#3873C3] bg-opacity-40 bg-blur-[4px] flex justify-center items-center ${
                            isSearchOpen || showaside
                                ? 'opacity-0 '
                                : 'opacity-100 '
                        } `}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                                fill={'white'}
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className="flex flex-row justify-between items-center px-4 border-b mb-2 border-black border-opacity-50 w-full min-h-[68px] absolute top-0  duration-300 left-0 "
                    style={{
                        opacity: showaside ? '100' : '0',
                        zIndex: showaside ? '55' : '-55',
                    }}
                >
                    <Link
                        className="w-[200px]"
                        to={`/${lang}/${
                            ROUTES.home[lang as keyof typeof ROUTES.home]
                        }`}
                    >
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch aspect-[1.4] w-[98px]"
                        />
                    </Link>

                    <button onClick={() => setShowAside(false)}>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="40"
                                height="40"
                                rx="20"
                                fill="#3873C3"
                            />
                            <path
                                d="M26 14L14 26"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M14 14L26 26"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                {/* </div> */}
            </div>
            {showaside && categories && (
                <div className=" max-md:flex fixed top-[68px] left-0 w-full z-[67] h-[100vh] bg-white flex flex-col">
                    <div className=" flex flex-row  justify-around">
                        <Link
                            to={`/${lang}/${
                                ROUTES.liked[lang as keyof typeof ROUTES.liked]
                            }`}
                        >
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                            />
                        </Link>
                        <div>
                            <div className="flex gap-6 items-center self-stretch my-auto text-sm">
                                <div className="flex gap-5 items-center self-stretch my-auto ">
                                    <Link to={'/user/login'}>
                                        <div className="flex gap-3 items-center self-stretch my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c5ef44547ee29c9aeeedd574f237ce849c00eefa59f62c0355b167c347f116?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                                            />
                                            <div className="self-stretch my-auto">
                                                {translation?.Şəxsi_kabinet}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-row ">
                            <div
                                onClick={() => HandleSetUrlByLang('en')}
                                style={
                                    lang === 'en' ? { color: '#3873C3' } : {}
                                }
                                className="w-[43px] h-[40px] rounded-s-3xl flex justify-center items-center bg-[#F5F5F5] border-r border-black border-opacity-10"
                            >
                                EN
                            </div>
                            <div
                                onClick={() => HandleSetUrlByLang('ru')}
                                style={
                                    lang === 'ru' ? { color: '#3873C3' } : {}
                                }
                                className="w-[43px] h-[40px] rounded-e-3xl flex  justify-center items-center bg-[#F5F5F5]"
                            >
                                RU
                            </div>
                        </div>
                    </div>
                    <ClothingMenu
                        translation={translation}
                        data={categories}
                        ref={CAtalogDiv}
                        setIsCatalogOpen={(value) => {
                            enableScrolling();

                            setIsClothingOpen(value);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
