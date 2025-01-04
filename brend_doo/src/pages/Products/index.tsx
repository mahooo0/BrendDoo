import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import ProductCard from '../../components/ProductCArd';
import { Pagination } from '../../components/Pagination';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
    Category,
    Filter,
    Product,
    ProductResponse,
} from '../../setting/Types';
import GETRequest from '../../setting/Request';
import Loading from '../../components/Loading';
import ROUTES from '../../setting/routes';
// import Liked from '../Liked';
const DropdownItem = ({ data }: { data: Category }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang = 'ru' } = useParams<{
        lang: string;
    }>();
    const location = useLocation();

    // Extract `subCategory` from the query string
    const queryParams = new URLSearchParams(location.search);
    const subCategory = queryParams.get('subCategory');
    const category = queryParams.get('category');
    useEffect(() => {
        if (category && +category === data.id) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [category]);
    const toggleDropdown = () => {
        // setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col w-full">
            {category && +category === data.id ? (
                <Link
                    to={`/${lang}/${
                        ROUTES.product[lang as keyof typeof ROUTES.product]
                    } `}
                >
                    <div className="flex flex-col w-full  text-base">
                        <div
                            className="flex overflow-hidden flex-row gap-5 justify-between px-4 py-3.5 w-full bg-neutral-100 rounded-[100px] cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <div className="my-auto">{data.title}</div>
                            <img
                                style={
                                    isOpen
                                        ? { transform: 'rotate(180deg)' }
                                        : {}
                                }
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67247d6cece276d38b6843cadeec5ef50381594d81ab035a8f6139f4bac01ffa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-6 aspect-square"
                                alt="Dropdown Icon"
                            />
                        </div>
                    </div>
                </Link>
            ) : (
                <Link
                    to={`/${lang}/${
                        ROUTES.product[lang as keyof typeof ROUTES.product]
                    }?category=${data.id}`}
                >
                    <div className="flex flex-col w-full  text-base">
                        <div
                            className="flex overflow-hidden flex-row gap-5 justify-between px-4 py-3.5 w-full bg-neutral-100 rounded-[100px] cursor-pointer"
                            // onClick={toggleDropdown}
                        >
                            <div className="my-auto">{data.title}</div>
                            <img
                                style={
                                    isOpen
                                        ? { transform: 'rotate(180deg)' }
                                        : {}
                                }
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67247d6cece276d38b6843cadeec5ef50381594d81ab035a8f6139f4bac01ffa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-6 aspect-square"
                                alt="Dropdown Icon"
                            />
                        </div>
                    </div>
                </Link>
            )}

            {isOpen && (
                <div className="flex flex-col mt-2 w-full text-sm gap-3">
                    {data.subCategories.map((SubCategory) => {
                        console.log(subCategory, SubCategory.id);

                        if (subCategory && +subCategory === SubCategory.id) {
                            return (
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }?category=${data.id}`}
                                    key={SubCategory.id}
                                >
                                    <div className="overflow-hidden px-4 py-3.5 w-full text-white bg-[#3873C3] rounded-[100px]">
                                        {SubCategory.title}
                                    </div>
                                </Link>
                            );
                        }
                        return (
                            <Link
                                to={`/${lang}/${
                                    ROUTES.product[
                                        lang as keyof typeof ROUTES.product
                                    ]
                                }?category=${data.id}&subCategory=${
                                    SubCategory.id
                                }`}
                                key={SubCategory.id}
                            >
                                <div className="overflow-hidden px-4 py-3.5 w-full text-black bg-[#F5F5F5] rounded-[100px]">
                                    {SubCategory.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
const DropdownItemFilter = ({
    data,
    setoptions,
    options,
}: {
    data: Filter;
    setoptions: (par: any) => void;
    options: number[];
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Extract `subCategory` from the query string
    // const queryParams = new URLSearchParams(location.search);

    // const option_ids = queryParams.get('option_ids');
    // const category = queryParams.get('category');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col w-full  text-base">
                <div
                    className="flex overflow-hidden flex-row gap-5 justify-between px-4 py-3.5 w-full bg-neutral-100 rounded-[100px] cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <div className="my-auto">{data.title}</div>
                    <img
                        style={isOpen ? { transform: 'rotate(180deg)' } : {}}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67247d6cece276d38b6843cadeec5ef50381594d81ab035a8f6139f4bac01ffa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 w-6 aspect-square"
                        alt="Dropdown Icon"
                    />
                </div>
            </div>
            <div
                style={isOpen ? { padding: '20px' } : { padding: 0 }}
                className="flex flex-row flex-wrap justify-start gap-[14px] bg-[#F5F5F5]  rounded-[20px] mt-3"
            >
                {isOpen &&
                    data.options.map((item) => {
                        if (item.color_code) {
                            return (
                                <div
                                    className="flex justify-center items-center flex-col"
                                    onClick={() => {
                                        if (options.includes(item.id)) {
                                            setoptions(
                                                options.filter(
                                                    (id) => id !== item.id
                                                )
                                            );
                                        } else {
                                            setoptions([...options, item.id]);
                                        }
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: item.color_code,
                                        }}
                                        className={` w-11 h-11 rounded-full   cursor-pointer flex justify-center items-center `}
                                    >
                                        {options.includes(item.id) && (
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.16675 9.99992L8.33341 14.1666L16.6667 5.83325"
                                                    stroke="black"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                    <p className="text-[10px] mt-2 text-black text-opacity-60">
                                        {item.title}
                                    </p>
                                </div>
                            );
                        }
                        // return (
                        //     <div className="overflow-hidden px-4 py-3.5 w-full text-white bg-[#3873C3] rounded-[100px]">
                        //         {item.title}{' '}
                        //     </div>
                        // );
                    })}
                {isOpen &&
                    data.options.map((item) => {
                        if (!item.color_code) {
                            return (
                                <div
                                    style={
                                        options.includes(item.id)
                                            ? { backgroundColor: '#3873C3' }
                                            : {
                                                  backgroundColor: '#FCFCFC',
                                                  color: 'black',
                                              }
                                    }
                                    className="overflow-hidden px-4 py-3.5 w-full text-white cursor-pointer  rounded-[100px]"
                                    onClick={() => {
                                        if (options.includes(item.id)) {
                                            setoptions(
                                                options.filter(
                                                    (id) => id !== item.id
                                                )
                                            );
                                        } else {
                                            setoptions([...options, item.id]);
                                        }
                                    }}
                                >
                                    {item.title}{' '}
                                </div>
                            );
                        }
                    })}
            </div>
            {/* {category && +category === data.id ? (
                <Link
                    to={`/${lang}/${
                        ROUTES.product[lang as keyof typeof ROUTES.product]
                    } `}
                >
                    <div className="flex flex-col w-full  text-base">
                        <div
                            className="flex overflow-hidden flex-row gap-5 justify-between px-4 py-3.5 w-full bg-neutral-100 rounded-[100px] cursor-pointer"
                            onClick={toggleDropdown}
                        >
                            <div className="my-auto">{data.title}</div>
                            <img
                                style={
                                    isOpen
                                        ? { transform: 'rotate(180deg)' }
                                        : {}
                                }
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67247d6cece276d38b6843cadeec5ef50381594d81ab035a8f6139f4bac01ffa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-6 aspect-square"
                                alt="Dropdown Icon"
                            />
                        </div>
                    </div>
                </Link>
            ) : (
                <Link
                    to={`/${lang}/${
                        ROUTES.product[lang as keyof typeof ROUTES.product]
                    }?category=${data.id}`}
                >
                    <div className="flex flex-col w-full  text-base">
                        <div
                            className="flex overflow-hidden flex-row gap-5 justify-between px-4 py-3.5 w-full bg-neutral-100 rounded-[100px] cursor-pointer"
                            // onClick={toggleDropdown}
                        >
                            <div className="my-auto">{data.title}</div>
                            <img
                                style={
                                    isOpen
                                        ? { transform: 'rotate(180deg)' }
                                        : {}
                                }
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67247d6cece276d38b6843cadeec5ef50381594d81ab035a8f6139f4bac01ffa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-6 aspect-square"
                                alt="Dropdown Icon"
                            />
                        </div>
                    </div>
                </Link>
            )}

            {isOpen && (
                <div className="flex flex-col mt-2 w-full text-sm gap-3">
                    {data.subCategories.map((SubCategory) => {
                        console.log(subCategory, SubCategory.id);

                        if (subCategory && +subCategory === SubCategory.id) {
                            return (
                                <Link
                                    to={`/${lang}/${
                                        ROUTES.product[
                                            lang as keyof typeof ROUTES.product
                                        ]
                                    }?category=${data.id}`}
                                    key={SubCategory.id}
                                >
                                    <div className="overflow-hidden px-4 py-3.5 w-full text-white bg-[#3873C3] rounded-[100px]">
                                        {SubCategory.title}
                                    </div>
                                </Link>
                            );
                        }
                        return (
                            <Link
                                to={`/${lang}/${
                                    ROUTES.product[
                                        lang as keyof typeof ROUTES.product
                                    ]
                                }?category=${data.id}&subCategory=${
                                    SubCategory.id
                                }`}
                                key={SubCategory.id}
                            >
                                <div className="overflow-hidden px-4 py-3.5 w-full text-black bg-[#F5F5F5] rounded-[100px]">
                                    {SubCategory.title}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            )} */}
        </div>
    );
};
export default function Products() {
    // const checkref = useRef<any>();
    const [checked, setChecked] = useState(false);
    const [Page, setPage] = useState<number>(1);
    const [options, setoptions] = useState<number[]>([]);
    const location = useLocation();

    // Extract `subCategory` from the query string
    const queryParams = new URLSearchParams(location.search);
    const subCategory = queryParams.get('subCategory');
    const category = queryParams.get('category');
    useEffect(() => {
        setoptions([]);
    }, [category, subCategory]);
    const { lang = 'ru' } = useParams<{ lang: string }>();
    const { data: categories, isLoading: categoriesLoading } = GETRequest<
        Category[]
    >(`/categories`, 'categories', [lang]);
    const { data: products, isLoading: productsLoading } =
        GETRequest<ProductResponse>(
            `/products?page=${Page}${
                category ? `&category_id=${category}` : ''
            }${
                subCategory ? `&sub_category_id=${subCategory}` : ''
            }&is_discount=${checked ? 1 : 0}`,
            'products',
            [lang, Page, category, subCategory, checked, options],
            { 'option_ids[]': options }
        );
    const { data: filters, isLoading: filtersLoading } = GETRequest<Filter[]>(
        `/filters`,
        'filters',
        [lang]
    );
    if (categoriesLoading || filtersLoading) {
        return <Loading />;
    }
    return (
        <div className="relative">
            <Header />
            <main className=" mt-0">
                <section className="flex overflow-hidden  flex-col bg-neutral-100">
                    <div className="flex relative flex-col pt-10 pr-20 pb-36 pl-10 w-full min-h-[324px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5e2893c3501b317f9f1cc42597715926aaf24262ce6d4db514708a628eb9da64?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative gap-2 items-center self-start text-base">
                            <Link
                                to={`/${lang}`}
                                className="flex gap-2 items-center"
                            >
                                <div className="self-stretch my-auto text-white">
                                    Ana səhifə
                                </div>
                            </Link>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a06e1c6285cb46f6524f6d6023531f25dabadfc0b9b5097943e091c33f26f94a?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <div className="self-stretch my-auto text-white text-opacity-80">
                                Məhsullar
                            </div>
                        </div>
                        <div className="relative self-center mt-20 mb-0 text-4xl font-semibold text-white max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
                            Axtardığınız bütün məhsullar
                        </div>
                    </div>
                </section>{' '}
                <section className="flex flex-col w-full max-md:px-5   max-sm:px-0 ">
                    <div className="flex lg:flex-row flex-col mt-[60px] lg:px-[40px] px-[10px] gap-4">
                        <section className="flex flex-col  w-full lg:max-w-[330px]">
                            <div className="text-xl font-semibold text-black">
                                Filter
                            </div>
                            <div className="flex overflow-hidden flex-col px-5 py-6 mt-5 w-full rounded-3xl border border-solid border-black border-opacity-10">
                                <div className="flex flex-col mt-2 text-black whitespace-nowrap gap-4">
                                    <label className="text-black">
                                        Kategoriyyalar
                                    </label>
                                    {categories?.map((category: Category) => (
                                        <DropdownItem data={category} />
                                    ))}
                                    {category
                                        ? categories
                                              ?.find(
                                                  (item) =>
                                                      item.id === +category
                                              )
                                              ?.filters?.map((item: Filter) => (
                                                  <DropdownItemFilter
                                                      options={options}
                                                      setoptions={setoptions}
                                                      data={item}
                                                  />
                                              ))
                                        : filters?.map((item: Filter) => (
                                              <DropdownItemFilter
                                                  options={options}
                                                  setoptions={setoptions}
                                                  data={item}
                                              />
                                          ))}

                                    <div className="flex flex-col mt-4 w-full text-sm whitespace-nowrap">
                                        <label className="text-black">
                                            Qiymət
                                        </label>
                                        <div className="flex overflow-hidden gap-2 p-1.5 mt-2 w-full bg-neutral-100 rounded-[100px] text-black text-opacity-60">
                                            <input
                                                type="number"
                                                placeholder="Min"
                                                className="overflow-hidden p-3 bg-white rounded-[100px] outline-none w-full"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Max"
                                                className="overflow-hidden p-3 bg-white rounded-[100px] outline-none w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center self-start mt-4 font-medium text-black text-opacity-80">
                                        <input
                                            type="checkbox"
                                            style={{ display: 'none' }}
                                        />
                                        {checked ? (
                                            <div
                                                onClick={() =>
                                                    setChecked(false)
                                                }
                                                className="flex bg-[#3873C3] shrink-0 self-stretch my-auto w-6 h-6 border border-solid border-black border-opacity-40 rounded-[100px]"
                                            />
                                        ) : (
                                            <div
                                                onClick={() => setChecked(true)}
                                                className="flex  shrink-0 self-stretch my-auto w-6 h-6 border border-solid border-black border-opacity-40 rounded-[100px]"
                                            />
                                        )}
                                        {/* <div className="flex shrink-0 self-stretch my-auto w-6 h-6 border border-solid border-black border-opacity-40 rounded-[100px]" /> */}
                                        <div className="self-stretch my-auto">
                                            Endirimli məhsullar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col rounded-none w-full">
                            <div className="flex flex-col max-sm:flex-col-reverse">
                                {' '}
                                <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full mt-[44px]">
                                    <div className="my-auto text-base font-medium text-black">
                                        {products &&
                                            products?.meta?.last_page * 15}{' '}
                                        məhsul
                                    </div>
                                    <div className="flex gap-4 items-center flex-wrap">
                                        <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                            Sırala
                                        </div>
                                        <div className="flex overflow-hidden gap-10 self-stretch px-4 py-3.5 my-auto text-base font-medium text-black bg-neutral-100  rounded-[100px] lg:w-[283px] w-[200px]">
                                            <select
                                                name=""
                                                id=""
                                                className="w-full bg-[#F5F5F5]"
                                            >
                                                <option value="">aaa</option>
                                                <option value="">aaa</option>
                                                <option value="">aaa</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-3">
                                    {category &&
                                        categories
                                            ?.filter(
                                                (item: Category) =>
                                                    +category === item.id
                                            )
                                            .map((item) => (
                                                <div className="flex gap-2.5 justify-center items-center self-start px-7 py-3.5 max-sm:mt-1 mt-5 text-base font-medium text-black whitespace-nowrap border border-solid border-black border-opacity-10 rounded-[100px] max-md:px-5">
                                                    <div className="self-stretch my-auto">
                                                        {item.title}
                                                    </div>
                                                    <Link
                                                        to={`/${lang}/${
                                                            ROUTES.product[
                                                                lang as keyof typeof ROUTES.product
                                                            ]
                                                        } `}
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cb50113a191ac3232ff04e9cd73f88231de4b607b8e1436abe0365b70e6b221?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                            className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-5 aspect-square"
                                                        />
                                                    </Link>
                                                </div>
                                            ))}
                                    {category &&
                                        subCategory &&
                                        categories
                                            ?.filter(
                                                (item: Category) =>
                                                    +category === item.id
                                            )[0]
                                            .subCategories.filter(
                                                (item) =>
                                                    +subCategory === item.id
                                            )
                                            .map((item) => (
                                                <div className="flex gap-2.5 justify-center items-center self-start px-7 py-3.5 max-sm:mt-1 mt-5 text-base font-medium text-black whitespace-nowrap border border-solid border-black border-opacity-10 rounded-[100px] max-md:px-5">
                                                    <div className="self-stretch my-auto">
                                                        {item.title}
                                                    </div>
                                                    <Link
                                                        to={`/${lang}/${
                                                            ROUTES.product[
                                                                lang as keyof typeof ROUTES.product
                                                            ]
                                                        }?category=${category} `}
                                                    >
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cb50113a191ac3232ff04e9cd73f88231de4b607b8e1436abe0365b70e6b221?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                            className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-5 aspect-square"
                                                        />
                                                    </Link>
                                                </div>
                                            ))}
                                </div>
                            </div>

                            <div
                                className=" w-full justify-items-center self-center clear-start grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  gap-5 mt-10
                            "
                            >
                                {productsLoading &&
                                    Array.from({ length: 15 }).map(
                                        (_, i: number) => (
                                            <ProductCard key={i} bg="grey" />
                                        )
                                    )}
                                {products?.data.map((product: Product) => (
                                    <ProductCard
                                        key={product.id}
                                        bg="grey"
                                        data={product}
                                    />
                                ))}
                            </div>
                            <section>
                                <Pagination
                                    currentPage={Page}
                                    totalPages={products?.meta.last_page || 10}
                                    onPageChange={(page) => {
                                        setPage(page);
                                    }}
                                />
                            </section>
                        </section>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
