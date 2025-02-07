import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CategoryHeader } from '../ClothingMenu';
import ROUTES, { getRouteKey } from '../../setting/routes';
import GETRequest, { axiosInstance } from '../../setting/Request';
import {
    Basket,
    CatalogCategory,
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
import {
    RefetchBasked,
    RefetchLocalBasked,
} from '../../setting/StateManagmant';
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
    // const [RefetcLocalBasked, setRefetcLocalBasked] = useState<boolean>(false);
    const [RefetcLocalBasked, setRefetcLocalBasked] =
        useRecoilState(RefetchLocalBasked);
    const [Basked, setBasked] = useState<Basket | null>(null);
    // Search
    const [SearchValue, setSearchValue] = useState<string>('');
    const [User, setUser] = useState<any | null>(null);
    const [debouncedValue, setDebouncedValue] = useState(SearchValue);
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);
    // Search

    const [showaside, setShowAside] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const [showSubCAtegoryes, setshowSubCAtegoryes] = useState<number>(-1);
    const [CurrentCategory, setCurrentCategory] = useState<number>(-1);
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
    function toggleIdInLocalStorage(id: Number) {
        setRefetcLocalBasked((prew) => !prew);
        // Step 1: Get the current value from localStorage
        let storedIds = localStorage.getItem('ids') || '';

        // Step 2: Split the string into an array of IDs and remove any empty strings
        let idArray = storedIds.split(',').filter(Boolean);

        // Step 3: Check if the ID is already in the array
        const index = idArray.indexOf(`${id}`);

        if (index === -1) {
            // If the ID is not in the array, add it
            idArray.push(`${id}`);
        } else {
            // If the ID is in the array, remove it
            idArray.splice(index, 1);
        }

        // Step 4: Join the array back into a comma-separated string
        let updatedIds = idArray.join(',');

        // Step 5: Save the updated string back to localStorage
        localStorage.setItem('ids', updatedIds);
    }
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
            toast.success('Məhsul sayi arti');
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
    const { data: catalog_categories } = GETRequest<CatalogCategory[]>(
        `/catalog_categories`,
        'catalog_categories',
        [lang]
    );
    const fetchBasked = async () => {
        try {
            if (User) {
                if (basked) {
                    setBasked(basked);
                }
            } else {
                let storedIds = localStorage.getItem('ids') || '';
                let idArray = storedIds.split(',').filter(Boolean);
                console.log('idArray', idArray);

                const res = await axiosInstance.post('/getProducts', {
                    product_ids: idArray,
                });

                console.log('res', res);

                const newBasked = {
                    basket_items: res.data.map((item: Product, i: number) => ({
                        id: i,
                        quantity: 1,
                        price: item.price,
                        options: [
                            {
                                filter: 'filter',
                                option: 'option',
                            },
                        ],
                        product: item,
                    })),
                    total_price: 120,
                    discount: 0,
                    delivered_price: 0,
                    final_price: 120,
                };

                setBasked(newBasked);
            }
        } catch (error) {
            console.error('Error fetching basked:', error);
        }
    };

    useEffect(() => {
        // Fetch data on initial load
        fetchBasked();

        // Listen for `storage` events (changes from other tabs)
        const handleStorageChange = (event: any) => {
            if (event.key === 'ids') {
                fetchBasked();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Cleanup event listener
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [User, RefetcLocalBasked]); // Add `User` as a dependency

    // Custom logic to handle `localStorage` changes within the same tab
    useEffect(() => {
        const handleLocalStorageChange = () => {
            fetchBasked();
        };

        // Listen for custom events (triggered within the same tab)
        window.addEventListener('localStorageChange', handleLocalStorageChange);

        // Cleanup event listener
        return () => {
            window.removeEventListener(
                'localStorageChange',
                handleLocalStorageChange
            );
        };
    }, [User, RefetcLocalBasked]);
    console.log('basked:', basked);

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

                    <div className="flex flex-col-reverse gap-3 justify-center items-center  mt-auto text-base max-md:max-w-full ">
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
                    <div className="flex gap-6 items-end justify-end self-end  text-sm">
                        <div className="flex gap-2 items-center self-stretch h-fit ">
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
                            <div className="flex gap-2 self-stretch my-auto text-sm text-black">
                                <img
                                    onClick={() => {
                                        if (User) {
                                            setIsClothingOpen(false);
                                            setSearchValue('');

                                            Navigae(
                                                `/${lang}/${
                                                    ROUTES.liked[
                                                        lang as keyof typeof ROUTES.liked
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
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain  cursor-pointer shrink-0 w-12 aspect-square rounded-[100px]"
                                />

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
                                            // Navigae(
                                            //     `/${lang}/${
                                            //         ROUTES.login[
                                            //             lang as keyof typeof ROUTES.login
                                            //         ]
                                            //     }`
                                            // );
                                            setIsBaskedOpen((prev) => !prev);
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
                {/* katalog bar */}

                <div
                    className="absolute w-full min-h-[90vh] bg-black  top-[100%] z-50 bg-opacity-[60%] px-10 py-2"
                    onClick={() => setIsClothingOpen(false)}
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
                            <CategoryNavigation
                                handleClose={() => {
                                    setIsClothingOpen(false);
                                }}
                            />
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
                    <div className="flex overflow-hidden max-h-[60vh] flex-col items-center pt-10 bg-white rounded-3xl w-[511px] absolute right-4">
                        <div className="flex gap-5 justify-between w-full max-w-[432px] max-md:max-w-full mx-[40px]">
                            <div className="text-lg font-semibold text-center text-slate-800">
                                {translation?.Səbətdəki_məhsullarım}
                            </div>
                            <div className="flex gap-2 items-center py-0.5 text-sm font-medium text-blue-600 whitespace-nowrap border-b border-solid border-b-blue-600">
                                <div
                                    onClick={() => {
                                        if (User) {
                                            navigate(
                                                `/${lang}/${
                                                    ROUTES.order[
                                                        lang as keyof typeof ROUTES.order
                                                    ]
                                                }`
                                            );
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
                                    className="self-stretch my-auto"
                                >
                                    {translation?.Səbətim}
                                </div>

                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f2acd9a318cf187f0283026a4fe39d7a878ed09e47ff9f7a31b2fad77b951f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                />
                            </div>
                        </div>
                        {/* onecard */}

                        {Basked && Basked?.basket_items.length > 0 ? (
                            <div className="overflow-y-scroll h-[40vh] px-[24px]">
                                {Basked.basket_items?.map((item) => (
                                    <div>
                                        <div className="flex gap-8 items-center mt-[4px] justify-between max-md:max-w-full mx-[40px]">
                                            <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                                <img
                                                    loading="lazy"
                                                    src={item.product?.image}
                                                    className="object-cover shrink-0 self-stretch my-auto rounded-3xl h-[100px] w-[100px]"
                                                />
                                                <div className="flex flex-col self-stretch my-auto w-[152px]">
                                                    <div className="w-full text-sm font-medium text-black">
                                                        {item.product?.title}
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
                                            {User && (
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
                                            )}
                                        </div>
                                        <div className="flex gap-5 justify-between mt-3 w-full text-base font-semibold text-center text-black max-w-[431px] max-md:max-w-full mx-[40px]">
                                            <div className="flex gap-10 items-center self-start">
                                                <div className="gap-1 self-stretch my-auto">
                                                    {item.price} AZN
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    User
                                                        ? RemoveFromBaskedmutation.mutate(
                                                              item.id
                                                          )
                                                        : toggleIdInLocalStorage(
                                                              item.product.id
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
                                        <img
                                            src="/images/empty_basked.png"
                                            className="w-[100px] aspect-square"
                                        />
                                        <div className="text-lg font-semibold text-gray-500">
                                            {translation?.basket_empty}
                                        </div>{' '}
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
                            {/* <Link to="/user/basked/confirm"> */}
                            <button
                                onClick={() => {
                                    if (User) {
                                        navigate('/user/basked/confirm');
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
                                className="gap-2.5 self-stretch px-10 py-4 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5"
                            >
                                {translation?.Sifariş_et}
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* mobil header */}
            <div className="lg:hidden items-center flex h-[68px] px-4  justify-between w-screen fixed bg-white z-50">
                {isSearchOpen || (
                    <Link to={'/'}>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className={`object-contain shrink-0 self-stretch aspect-[1.4] duration-300 w-[70px] `}
                        />
                    </Link>
                )}
                {/* <div className="flex gap-4 items-center"> */}

                <div className="flex flex-row gap-4 w-full justify-end">
                    <div
                        className={` top-[14px] flex justify-between ease-in-out  duration-500  pr-[0] z-[54] ${
                            isSearchOpen
                                ? ' left-[16px] h-[40px]  w-full bg-[#F5F5F5] rounded-[100px] '
                                : ' right-[6rem]  w-fit '
                        } `}
                    >
                        <button
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
                            className={`h-full w-full bg-transparent  outline-none  ${
                                isSearchOpen ? 'opacity-100' : 'hidden'
                            } `}
                            name=""
                        />
                        <button
                            className={` flex justify-center items-center ${
                                isSearchOpen ? 'opacity-100' : 'hidden'
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
                        {isSearchOpen && (
                            <div className="bg-white rounded-md  absolute w-[90%]  left-auto right-auto z-50 max-h-[300px] top-[100%]   overflow-y-auto">
                                {' '}
                                {FilteredProduct?.data.map((item) => (
                                    <p
                                        className="h-[44px] w-full  px-[16px] py-[14px] text-[14px] font-normal border-b border-[#E5E5E5] cursor-pointer"
                                        onClick={() => {
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
                                            );
                                            setIsSearchOpen(false);
                                        }}
                                    >
                                        {item.title}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                    {isSearchOpen || (
                        <button
                            className={`flex gap-3 items-center opacity-100}  `}
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
                            <Link
                                onClick={() => {
                                    setShowAside(false);
                                }}
                                to={`/${lang}/${
                                    ROUTES.liked[
                                        lang as keyof typeof ROUTES.liked
                                    ]
                                }`}
                            >
                                <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center relative">
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
                                        <g clip-path="url(#clip0_2530_5515)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M14.6868 13.6868C13.3043 14.3187 12.2915 15.8218 12.2915 17.6142C12.2915 19.4453 13.0409 20.8568 14.1151 22.0664C15.0004 23.0634 16.0722 23.8896 17.1174 24.6954C17.3657 24.8868 17.6125 25.0771 17.8549 25.2682C18.2932 25.6137 18.6843 25.917 19.0612 26.1373C19.4383 26.3576 19.7418 26.4583 19.9998 26.4583C20.2578 26.4583 20.5614 26.3576 20.9385 26.1373C21.3154 25.917 21.7064 25.6137 22.1448 25.2682C22.3872 25.0771 22.634 24.8868 22.8822 24.6954C23.9275 23.8896 24.9992 23.0634 25.8846 22.0664C26.9588 20.8568 27.7082 19.4453 27.7082 17.6142C27.7082 15.8218 26.6954 14.3187 25.3129 13.6868C23.9698 13.0728 22.1651 13.2354 20.4501 15.0172C20.3323 15.1396 20.1697 15.2088 19.9998 15.2088C19.8299 15.2088 19.6674 15.1396 19.5495 15.0172C17.8346 13.2354 16.0299 13.0728 14.6868 13.6868ZM19.9998 13.7156C18.0731 11.9918 15.9156 11.7507 14.1671 12.5499C12.3204 13.394 11.0415 15.3541 11.0415 17.6142C11.0415 19.8355 11.9669 21.53 13.1804 22.8964C14.1522 23.9907 15.3417 24.9066 16.3922 25.7154C16.6303 25.8988 16.8613 26.0766 17.081 26.2498C17.5079 26.5863 17.9661 26.9452 18.4305 27.2165C18.8947 27.4878 19.4245 27.7083 19.9998 27.7083C20.5752 27.7083 21.105 27.4878 21.5692 27.2165C22.0336 26.9452 22.4918 26.5863 22.9187 26.2498C23.1384 26.0766 23.3693 25.8988 23.6075 25.7154C24.658 24.9066 25.8474 23.9907 26.8192 22.8964C28.0328 21.53 28.9582 19.8355 28.9582 17.6142C28.9582 15.3541 27.6792 13.394 25.8325 12.5499C24.084 11.7507 21.9266 11.9918 19.9998 13.7156Z"
                                                fill="black"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2530_5515">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                    transform="translate(10 10)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </Link>
                        </button>
                    )}
                    {isSearchOpen || (
                        <div className="relative ">
                            <div
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
                                className={`w-[40px] h-[40px] aspect-square rounded-full duration-300  bg-opacity-40 bg-blur-[4px] flex justify-center items-center  `}
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
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.9998 11.0417C17.8137 11.0417 16.0415 12.814 16.0415 15.0001C16.0415 17.1862 17.8137 18.9584 19.9998 18.9584C22.186 18.9584 23.9582 17.1862 23.9582 15.0001C23.9582 12.814 22.186 11.0417 19.9998 11.0417ZM17.2915 15.0001C17.2915 13.5043 18.5041 12.2917 19.9998 12.2917C21.4956 12.2917 22.7082 13.5043 22.7082 15.0001C22.7082 16.4959 21.4956 17.7084 19.9998 17.7084C18.5041 17.7084 17.2915 16.4959 17.2915 15.0001Z"
                                        fill="black"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M19.9998 20.2084C18.3004 20.2084 16.7311 20.6007 15.565 21.2671C14.4165 21.9233 13.5415 22.9252 13.5415 24.1667C13.5415 25.4083 14.4165 26.4102 15.565 27.0664C16.7311 27.7328 18.3004 28.1251 19.9998 28.1251C21.6993 28.1251 23.2686 27.7328 24.4347 27.0664C25.5832 26.4102 26.4582 25.4083 26.4582 24.1667C26.4582 22.9252 25.5832 21.9233 24.4347 21.2671C23.2686 20.6007 21.6993 20.2084 19.9998 20.2084ZM14.7915 24.1667C14.7915 23.5674 15.2223 22.9025 16.1851 22.3524C17.1302 21.8123 18.4776 21.4584 19.9998 21.4584C21.5221 21.4584 22.8694 21.8123 23.8145 22.3524C24.7773 22.9025 25.2082 23.5674 25.2082 24.1667C25.2082 24.7661 24.7773 25.431 23.8145 25.9811C22.8694 26.5212 21.5221 26.8751 19.9998 26.8751C18.4776 26.8751 17.1302 26.5212 16.1851 25.9811C15.2223 25.431 14.7915 24.7661 14.7915 24.1667Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                    {isSearchOpen || (
                        <button
                            className={`flex gap-3 items-center opacity-100}  `}
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
                                <div className="w-[40px] h-[40px] rounded-full  flex justify-center items-center relative">
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
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M17.015 12.709C17.2489 12.2159 17.7513 11.875 18.3333 11.875H21.6666C22.2486 11.875 22.751 12.2159 22.9849 12.709C23.5545 12.7131 23.9985 12.7393 24.3948 12.8941C24.8683 13.0792 25.2801 13.3938 25.5832 13.8019C25.889 14.2137 26.0325 14.7414 26.2301 15.4678C26.2402 15.505 26.2505 15.5428 26.261 15.5811L26.7533 17.3869C27.0762 17.5523 27.3588 17.7749 27.5945 18.0768C28.1128 18.7407 28.2046 19.5314 28.1124 20.4384C28.0229 21.3185 27.7459 22.4268 27.399 23.8141L27.377 23.902C27.1577 24.7794 26.9796 25.4917 26.7678 26.0476C26.547 26.6272 26.2667 27.1023 25.8045 27.4631C25.3423 27.824 24.8135 27.9807 24.1976 28.0544C23.607 28.125 22.8727 28.125 21.9684 28.125H18.0315C17.1272 28.125 16.393 28.125 15.8023 28.0544C15.1865 27.9807 14.6576 27.824 14.1954 27.4631C13.7332 27.1023 13.4529 26.6272 13.2321 26.0476C13.0203 25.4917 12.8422 24.7794 12.6229 23.9021L12.6009 23.8141C12.2541 22.4268 11.977 21.3185 11.8875 20.4384C11.7953 19.5314 11.8871 18.7407 12.4054 18.0768C12.6411 17.7749 12.9237 17.5523 13.2466 17.3869L13.739 15.5811C13.7494 15.5428 13.7597 15.505 13.7698 15.4678C13.9674 14.7414 14.1109 14.2137 14.4167 13.8019C14.7198 13.3938 15.1316 13.0792 15.6051 12.8941C16.0014 12.7393 16.4454 12.7131 17.015 12.709ZM17.0162 13.9602C16.4646 13.9657 16.2433 13.9868 16.0602 14.0584C15.8052 14.158 15.5834 14.3274 15.4202 14.5472C15.2735 14.7448 15.1874 15.0209 14.9449 15.91L14.6503 16.9906C15.5151 16.875 16.6316 16.875 18.0188 16.875H21.9811C23.3683 16.875 24.4848 16.875 25.3496 16.9906L25.055 15.91C24.8126 15.0209 24.7264 14.7448 24.5797 14.5472C24.4165 14.3274 24.1947 14.158 23.9398 14.0584C23.7566 13.9868 23.5353 13.9657 22.9838 13.9602C22.7493 14.4519 22.2477 14.7917 21.6666 14.7917H18.3333C17.7523 14.7917 17.2506 14.4519 17.0162 13.9602ZM18.3333 13.125C18.2182 13.125 18.125 13.2183 18.125 13.3333C18.125 13.4484 18.2182 13.5417 18.3333 13.5417H21.6666C21.7817 13.5417 21.875 13.4484 21.875 13.3333C21.875 13.2183 21.7817 13.125 21.6666 13.125H18.3333ZM14.7498 18.2387C13.9905 18.3486 13.6231 18.5485 13.3907 18.8461C13.1583 19.1437 13.0535 19.5487 13.1311 20.312C13.2104 21.0916 13.4639 22.1121 13.8261 23.5611C14.0572 24.4853 14.2181 25.1247 14.4002 25.6026C14.5763 26.0648 14.7487 26.3093 14.9647 26.4779C15.1806 26.6465 15.4596 26.7545 15.9507 26.8132C16.4585 26.874 17.1179 26.875 18.0705 26.875H21.9294C22.8821 26.875 23.5414 26.874 24.0492 26.8132C24.5403 26.7545 24.8193 26.6465 25.0353 26.4779C25.2512 26.3093 25.4236 26.0648 25.5997 25.6026C25.7818 25.1247 25.9427 24.4853 26.1738 23.5611C26.536 22.1121 26.7896 21.0916 26.8688 20.312C26.9464 19.5487 26.8416 19.1437 26.6092 18.8461C26.3769 18.5485 26.0094 18.3486 25.2501 18.2387C24.4746 18.1266 23.423 18.125 21.9294 18.125H18.0705C16.5769 18.125 15.5254 18.1266 14.7498 18.2387Z"
                                            fill="black"
                                        />
                                        <rect
                                            x="20.6665"
                                            y="7.3335"
                                            width="12"
                                            height="12"
                                            rx="6"
                                            fill="#FC394C"
                                        />
                                        <path
                                            d="M24.9625 16.3335V15.7895L27.2425 13.5895C27.4452 13.3975 27.5945 13.2295 27.6905 13.0855C27.7918 12.9362 27.8585 12.8002 27.8905 12.6775C27.9278 12.5495 27.9465 12.4268 27.9465 12.3095C27.9465 12.0215 27.8452 11.7948 27.6425 11.6295C27.4398 11.4642 27.1438 11.3815 26.7545 11.3815C26.4558 11.3815 26.1865 11.4322 25.9465 11.5335C25.7065 11.6295 25.4985 11.7815 25.3225 11.9895L24.7785 11.5175C24.9918 11.2455 25.2772 11.0375 25.6345 10.8935C25.9972 10.7442 26.3945 10.6695 26.8265 10.6695C27.2158 10.6695 27.5545 10.7335 27.8425 10.8615C28.1305 10.9842 28.3518 11.1628 28.5065 11.3975C28.6665 11.6322 28.7465 11.9095 28.7465 12.2295C28.7465 12.4108 28.7225 12.5895 28.6745 12.7655C28.6265 12.9415 28.5358 13.1282 28.4025 13.3255C28.2692 13.5228 28.0772 13.7442 27.8265 13.9895L25.7945 15.9495L25.6025 15.6375H28.9865V16.3335H24.9625Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </button>
                    )}
                    {isSearchOpen || (
                        <div className="relative ">
                            <div
                                onClick={() => {
                                    setShowAside((prew) => !prew);
                                }}
                                className={`w-[40px] h-[40px] aspect-square rounded-full duration-300 bg-[#3873C3] bg-opacity-40 bg-blur-[4px] flex justify-center items-center  `}
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
                                        fill="#3873C3"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.9585 15.8333C28.9585 16.1784 28.6787 16.4583 28.3335 16.4583L11.6668 16.4583C11.3217 16.4583 11.0418 16.1784 11.0418 15.8333C11.0418 15.4881 11.3217 15.2083 11.6668 15.2083L28.3335 15.2083C28.6787 15.2083 28.9585 15.4881 28.9585 15.8333Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M26.4585 20C26.4585 20.3452 26.1787 20.625 25.8335 20.625H14.1668C13.8217 20.625 13.5418 20.3452 13.5418 20C13.5418 19.6548 13.8217 19.375 14.1668 19.375H25.8335C26.1787 19.375 26.4585 19.6548 26.4585 20Z"
                                        fill="white"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M23.9585 24.1667C23.9585 24.5119 23.6787 24.7917 23.3335 24.7917H16.6668C16.3217 24.7917 16.0418 24.5119 16.0418 24.1667C16.0418 23.8216 16.3217 23.5417 16.6668 23.5417H23.3335C23.6787 23.5417 23.9585 23.8216 23.9585 24.1667Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showaside && !isSearchOpen && (
                <div
                    className={` w-[100vw] h-[100vh] bg-black fixed top-0   left-0 z-[99999999999] duration-200 ${
                        showaside
                            ? 'bg-opacity-40 '
                            : 'bg-opacity-40 z-[-99999999]'
                    }  `}
                >
                    <div
                        className={`w-[80vw] h-[100vh]  fixed  top-0  duration-300  right-0  z-[99999999999] bg-white ${
                            !showaside
                                ? ' translate-x-[100%]'
                                : 'translate-x-[0%]'
                        }    `}
                    >
                        <div className=" relative">
                            <div className="flex flex-row justify-between items-center px-4 py-[16px] border-b mb-2 border-black  w-full   border-opacity-10  duration-300 left-0  min-h-[96px]">
                                {CurrentCategory === -1 ? (
                                    <Link
                                        className="w-[200px]"
                                        to={`/${lang}/${
                                            ROUTES.home[
                                                lang as keyof typeof ROUTES.home
                                            ]
                                        }`}
                                    >
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch aspect-[1.4] w-[98px]"
                                        />
                                    </Link>
                                ) : (
                                    <div
                                        onClick={() => setCurrentCategory(-1)}
                                        className="flex flex-row gap-4"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 18L9 12L15 6"
                                                stroke="black"
                                                stroke-opacity="0.8"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        Geri
                                    </div>
                                )}

                                <svg
                                    onClick={() => setShowAside(false)}
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
                                    <path
                                        d="M25 15L15 25"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15 15L25 25"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="w-full bg-red max-h-[70%] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }?discount=true`}
                                >
                                    <div className="h-[60px] px-[16px] w-full bg-[#FDE4EE]  flex flex-row gap-3   border-opacity-10  items-center justify-between pb-[]">
                                        <div className="flex flex-row items-center gap-3 text-[#FD0769]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.78133 3.89076C10.3452 3.41023 10.6271 3.16997 10.9219 3.02907C11.6037 2.7032 12.3963 2.7032 13.0781 3.02907C13.3729 3.16997 13.6548 3.41023 14.2187 3.89076C14.4431 4.08201 14.5553 4.17764 14.6752 4.25796C14.9499 4.44209 15.2584 4.56988 15.5828 4.63393C15.7244 4.66188 15.8713 4.6736 16.1653 4.69706C16.9038 4.75599 17.273 4.78546 17.5811 4.89427C18.2936 5.14594 18.8541 5.7064 19.1058 6.41893C19.2146 6.72699 19.244 7.09625 19.303 7.83475C19.3264 8.12868 19.3381 8.27564 19.3661 8.41718C19.4301 8.74163 19.5579 9.05014 19.7421 9.32485C19.8224 9.44469 19.918 9.55691 20.1093 9.78133C20.5898 10.3452 20.8301 10.6271 20.971 10.9219C21.2968 11.6037 21.2968 12.3963 20.971 13.0781C20.8301 13.3729 20.5898 13.6548 20.1093 14.2187C19.918 14.4431 19.8224 14.5553 19.7421 14.6752C19.5579 14.9499 19.4301 15.2584 19.3661 15.5828C19.3381 15.7244 19.3264 15.8713 19.303 16.1653C19.244 16.9038 19.2146 17.273 19.1058 17.5811C18.8541 18.2936 18.2936 18.8541 17.5811 19.1058C17.273 19.2146 16.9038 19.244 16.1653 19.303C15.8713 19.3264 15.7244 19.3381 15.5828 19.3661C15.2584 19.4301 14.9499 19.5579 14.6752 19.7421C14.5553 19.8224 14.4431 19.918 14.2187 20.1093C13.6548 20.5898 13.3729 20.8301 13.0781 20.971C12.3963 21.2968 11.6037 21.2968 10.9219 20.971C10.6271 20.8301 10.3452 20.5898 9.78133 20.1093C9.55691 19.918 9.44469 19.8224 9.32485 19.7421C9.05014 19.5579 8.74163 19.4301 8.41718 19.3661C8.27564 19.3381 8.12868 19.3264 7.83475 19.303C7.09625 19.244 6.72699 19.2146 6.41893 19.1058C5.7064 18.8541 5.14594 18.2936 4.89427 17.5811C4.78546 17.273 4.75599 16.9038 4.69706 16.1653C4.6736 15.8713 4.66188 15.7244 4.63393 15.5828C4.56988 15.2584 4.44209 14.9499 4.25796 14.6752C4.17764 14.5553 4.08201 14.4431 3.89076 14.2187C3.41023 13.6548 3.16997 13.3729 3.02907 13.0781C2.7032 12.3963 2.7032 11.6037 3.02907 10.9219C3.16997 10.6271 3.41023 10.3452 3.89076 9.78133C4.08201 9.55691 4.17764 9.4447 4.25796 9.32485C4.44209 9.05014 4.56988 8.74163 4.63393 8.41718C4.66188 8.27564 4.6736 8.12868 4.69706 7.83475C4.75599 7.09625 4.78546 6.72699 4.89427 6.41893C5.14594 5.7064 5.7064 5.14594 6.41893 4.89427C6.72699 4.78546 7.09625 4.75599 7.83475 4.69706C8.12868 4.6736 8.27564 4.66188 8.41718 4.63393C8.74163 4.56988 9.05014 4.44209 9.32485 4.25796C9.4447 4.17764 9.55691 4.08201 9.78133 3.89076Z"
                                                    stroke="#FF3C79"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M9 15L15 9"
                                                    stroke="#FF3C79"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z"
                                                    fill="#FF3C79"
                                                />
                                                <path
                                                    d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5C8.94772 10.5 8.5 10.0523 8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z"
                                                    fill="#FF3C79"
                                                />
                                            </svg>
                                            {translation?.Endirim}
                                        </div>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="#FD0769"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>

                                {catalog_categories?.map((item) => (
                                    <div className="h-[60px] w-full bg-white hover:bg-slate-200 flex flex-row gap-3 border-b-2 border-black  border-opacity-10  items-center justify-between pb-[] px-[16px] cursor-pointer">
                                        <Link
                                            to={`/${lang}/${
                                                ROUTES.liked[
                                                    lang as keyof typeof ROUTES.liked
                                                ]
                                            }`}
                                        >
                                            <div className="flex flex-row items-center gap-3  ">
                                                <div className="w-10 aspect-square rounded-full bg-[#F0F6FF] flex justify-center items-center">
                                                    <img
                                                        className="object-contain shrink-0 w-[24px] aspect-square rounded-[100px]"
                                                        src={item.image}
                                                    />
                                                </div>
                                                {item.title}
                                            </div>
                                        </Link>

                                        <svg
                                            onClick={() =>
                                                setCurrentCategory(item.id)
                                            }
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="black"
                                                stroke-opacity="0.8"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={`w-full bg-white
                                 absolute top-[102px] h-[80%] duration-300 ${
                                     CurrentCategory === -1
                                         ? 'right-[-100%]'
                                         : 'right-0'
                                 }`}
                            >
                                {catalog_categories
                                    ?.find(
                                        (item) => item.id === CurrentCategory
                                    )
                                    ?.subCategories?.map((item) => (
                                        <Link
                                            onClick={() => {
                                                setShowAside(false);
                                            }}
                                            to={`/${lang}/${
                                                ROUTES.product[
                                                    lang as keyof typeof ROUTES.product
                                                ]
                                            }?category=${CurrentCategory}&subCategory=${
                                                item.id
                                            }`}
                                        >
                                            {' '}
                                            <div className="h-[60px] w-full bg-white hover:bg-slate-200 flex flex-row gap-3 border-b-2 border-black  border-opacity-10  items-center justify-between pb-[] px-[16px] cursor-pointer">
                                                <div className="flex flex-row items-center gap-3  ">
                                                    {item.title}
                                                </div>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9 6L15 12L9 18"
                                                        stroke="black"
                                                        stroke-opacity="0.8"
                                                        stroke-width="1.5"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                            <div className="w-full h-[400px] absolute z-30 bottom-[-100%] bg-[#F5F5F5]">
                                {/* <Link
                                    onClick={() => {
                                        setShowAside(false);
                                    }}
                                    to={`/${lang}/${
                                        ROUTES.liked[
                                            lang as keyof typeof ROUTES.liked
                                        ]
                                    }`}
                                >
                                    {' '}
                                    <div className="h-[60px] w-full bg-[#F5F5F5]  flex flex-row gap-3 border-b-2 border-black  border-opacity-10  items-center justify-between pb-[] px-[16px] cursor-pointer">
                                        <div className="flex flex-row items-center gap-3  ">
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
                                                    fill="white"
                                                />
                                                <g clip-path="url(#clip0_2576_5719)">
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M14.6868 13.6868C13.3043 14.3187 12.2915 15.8218 12.2915 17.6142C12.2915 19.4453 13.0409 20.8568 14.1151 22.0664C15.0004 23.0634 16.0722 23.8896 17.1174 24.6954C17.3657 24.8868 17.6125 25.0771 17.8549 25.2682C18.2932 25.6137 18.6843 25.917 19.0612 26.1373C19.4383 26.3576 19.7418 26.4583 19.9998 26.4583C20.2578 26.4583 20.5614 26.3576 20.9385 26.1373C21.3154 25.917 21.7064 25.6137 22.1448 25.2682C22.3872 25.0771 22.634 24.8868 22.8822 24.6954C23.9275 23.8896 24.9992 23.0634 25.8846 22.0664C26.9588 20.8568 27.7082 19.4453 27.7082 17.6142C27.7082 15.8218 26.6954 14.3187 25.3129 13.6868C23.9698 13.0728 22.1651 13.2354 20.4501 15.0172C20.3323 15.1396 20.1697 15.2088 19.9998 15.2088C19.8299 15.2088 19.6674 15.1396 19.5495 15.0172C17.8346 13.2354 16.0299 13.0728 14.6868 13.6868ZM19.9998 13.7156C18.0731 11.9918 15.9156 11.7507 14.1671 12.5499C12.3204 13.394 11.0415 15.3541 11.0415 17.6142C11.0415 19.8355 11.9669 21.53 13.1804 22.8964C14.1522 23.9907 15.3417 24.9066 16.3922 25.7154C16.6303 25.8988 16.8613 26.0766 17.081 26.2498C17.5079 26.5863 17.9661 26.9452 18.4305 27.2165C18.8947 27.4878 19.4245 27.7083 19.9998 27.7083C20.5752 27.7083 21.105 27.4878 21.5692 27.2165C22.0336 26.9452 22.4918 26.5863 22.9187 26.2498C23.1384 26.0766 23.3693 25.8988 23.6075 25.7154C24.658 24.9066 25.8474 23.9907 26.8192 22.8964C28.0328 21.53 28.9582 19.8355 28.9582 17.6142C28.9582 15.3541 27.6792 13.394 25.8325 12.5499C24.084 11.7507 21.9266 11.9918 19.9998 13.7156Z"
                                                        fill="black"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2576_5719">
                                                        <rect
                                                            width="20"
                                                            height="20"
                                                            fill="white"
                                                            transform="translate(10 10)"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            {translation?.Bəyəndiklərim}{' '}
                                        </div>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 6L15 12L9 18"
                                                stroke="black"
                                                stroke-opacity="0.8"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>{' '} */}
                                {/* <div
                                    className="h-[60px] w-full bg-[#F5F5F5] flex flex-row gap-3 border-b-2 border-black  border-opacity-10  items-center justify-between pb-[] px-[16px] cursor-pointer"
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
                                    <div className="flex flex-row items-center gap-3  ">
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
                                                fill="white"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M19.9998 11.0417C17.8137 11.0417 16.0415 12.814 16.0415 15.0001C16.0415 17.1862 17.8137 18.9584 19.9998 18.9584C22.186 18.9584 23.9582 17.1862 23.9582 15.0001C23.9582 12.814 22.186 11.0417 19.9998 11.0417ZM17.2915 15.0001C17.2915 13.5043 18.5041 12.2917 19.9998 12.2917C21.4956 12.2917 22.7082 13.5043 22.7082 15.0001C22.7082 16.4959 21.4956 17.7084 19.9998 17.7084C18.5041 17.7084 17.2915 16.4959 17.2915 15.0001Z"
                                                fill="black"
                                            />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M19.9998 20.2084C18.3004 20.2084 16.7311 20.6007 15.565 21.2671C14.4165 21.9233 13.5415 22.9252 13.5415 24.1667C13.5415 25.4083 14.4165 26.4102 15.565 27.0664C16.7311 27.7328 18.3004 28.1251 19.9998 28.1251C21.6993 28.1251 23.2686 27.7328 24.4347 27.0664C25.5832 26.4102 26.4582 25.4083 26.4582 24.1667C26.4582 22.9252 25.5832 21.9233 24.4347 21.2671C23.2686 20.6007 21.6993 20.2084 19.9998 20.2084ZM14.7915 24.1667C14.7915 23.5674 15.2223 22.9025 16.1851 22.3524C17.1302 21.8123 18.4776 21.4584 19.9998 21.4584C21.5221 21.4584 22.8694 21.8123 23.8145 22.3524C24.7773 22.9025 25.2082 23.5674 25.2082 24.1667C25.2082 24.7661 24.7773 25.431 23.8145 25.9811C22.8694 26.5212 21.5221 26.8751 19.9998 26.8751C18.4776 26.8751 17.1302 26.5212 16.1851 25.9811C15.2223 25.431 14.7915 24.7661 14.7915 24.1667Z"
                                                fill="black"
                                            />
                                        </svg>
                                        {translation?.Şəxsi_kabinet}
                                    </div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9 6L15 12L9 18"
                                            stroke="black"
                                            stroke-opacity="0.8"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div> */}
                                <div className=" flex flex-row  m-3">
                                    <div
                                        onClick={() => HandleSetUrlByLang('en')}
                                        style={
                                            lang === 'en'
                                                ? { color: '#3873C3' }
                                                : {}
                                        }
                                        className="w-[43px] h-[40px] rounded-s-3xl flex justify-center items-center bg-[#ffffff] border-r border-black border-opacity-10"
                                    >
                                        EN
                                    </div>
                                    <div
                                        onClick={() => HandleSetUrlByLang('ru')}
                                        style={
                                            lang === 'ru'
                                                ? { color: '#3873C3' }
                                                : {}
                                        }
                                        className="w-[43px] h-[40px] rounded-e-3xl flex  justify-center items-center bg-[#ffffff]"
                                    >
                                        RU
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
