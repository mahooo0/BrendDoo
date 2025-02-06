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
            `/products?category_id=${Productslingle?.category?.id}&sub_category_id=${Productslingle?.sub_category?.id}`,
            'products',
            [lang, Productslingle]
        );

    const [currentColor, setCurrentColor] = useState<string>('');
    const [currentOption, setCurrentOption] = useState<string>('');
    const [isliked, setisliked] = useState<boolean>(false);
    const [IsSizeBarOpen, setIsSizeBarOpen] = useState<boolean>(false);
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
                        <Link
                            to={`/${lang}/${
                                ROUTES.home[lang as keyof typeof ROUTES.product]
                            }`}
                        >
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
                        <div className="flex flex-wrap  justify-around gap-5 max-sm:justify-start items-center mt-7 w-full max-md:max-w-full">
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
                            <button
                                onClick={() => {
                                    setIsSizeBarOpen(true);
                                }}
                                className="flex flex-row bg-none gap-2 border-none text-[14px] font-normal"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.2017 10.7918C23.1165 10.6122 22.9017 10.5362 22.7219 10.6211C21.4051 11.2468 19.8247 11.7429 18.083 12.089V7.1764C18.0856 7.1392 18.0883 7.102 18.0883 7.06456C18.0883 6.93592 18.0736 6.81424 18.0448 6.69664C17.5934 4.75672 14.1899 3.34888 9.95178 3.34888C9.68634 3.34888 9.4125 3.35488 9.13746 3.36712C3.45858 3.62056 0.916504 5.83048 0.916504 7.90816C0.916504 7.9096 0.916744 7.91128 0.916744 7.91296C0.916744 7.91392 0.916504 7.91488 0.916504 7.91584V13.3175C0.916504 13.4872 0.936664 13.6595 0.976504 13.829C1.65426 16.745 6.33546 18.7814 12.3602 18.7814C12.7725 18.7814 13.1867 18.7718 13.5904 18.7528C17.2039 18.5925 20.5564 17.8566 23.0308 16.6809C23.1563 16.6211 23.2363 16.4946 23.2363 16.3557V10.954C23.2363 10.9511 23.2353 10.9487 23.2353 10.9458C23.2355 10.894 23.2255 10.8417 23.2017 10.7918ZM14.4628 12.5697C14.1604 12.5918 13.8571 12.6105 13.5523 12.6242C13.1579 12.6429 12.7559 12.652 12.3573 12.6522C12.3527 12.6522 12.3484 12.6522 12.3441 12.6522C12.1161 12.6522 11.89 12.6482 11.6649 12.6422C11.6116 12.6407 11.5588 12.639 11.5058 12.6374C9.75546 12.5795 8.10138 12.3438 6.6669 11.9447V8.89576C6.6957 8.91976 6.72738 8.9428 6.75762 8.96608C6.78426 8.98672 6.8097 9.0076 6.83754 9.028C6.91338 9.0832 6.9933 9.1372 7.07754 9.18928C7.10298 9.20512 7.13034 9.22 7.1565 9.2356C7.22418 9.27544 7.29378 9.31432 7.36626 9.352C7.3977 9.36856 7.42938 9.38488 7.46178 9.40096C7.5501 9.44488 7.6413 9.48712 7.7361 9.52792C7.7493 9.53344 7.7613 9.53968 7.77474 9.5452C7.8849 9.59176 8.00034 9.63544 8.11866 9.67744C8.14602 9.68728 8.17434 9.69664 8.20218 9.706C8.30202 9.74008 8.4045 9.77272 8.50938 9.80368C8.53482 9.81112 8.55978 9.8188 8.58546 9.82624C8.84874 9.90112 9.1269 9.9652 9.41778 10.0185C9.44202 10.023 9.46626 10.0274 9.4905 10.0314C9.63402 10.0566 9.77994 10.0799 9.92922 10.0996C9.9309 10.0998 9.93234 10.1001 9.93402 10.1003C10.0929 10.1212 10.2547 10.139 10.4195 10.1534C10.4426 10.1553 10.4659 10.157 10.4891 10.1586C10.6226 10.1694 10.7575 10.1783 10.8943 10.1846C10.9307 10.1862 10.9672 10.1884 11.0042 10.1896C11.1631 10.1956 11.3234 10.1999 11.4861 10.1999H11.4887C11.4887 10.1999 11.4904 10.1999 11.4914 10.1999C11.6723 10.1999 11.8567 10.1951 12.0386 10.1874C12.179 10.1812 12.3172 10.1723 12.4545 10.1625C12.4725 10.1613 12.4905 10.1596 12.5085 10.1582C12.6383 10.1483 12.7667 10.1368 12.8937 10.1238L12.9153 10.1217C14.8989 9.91384 16.493 9.3208 17.3635 8.5144V12.2186C16.4584 12.3738 15.5265 12.4878 14.5804 12.5606C14.5411 12.5639 14.5019 12.5668 14.4628 12.5697ZM11.5173 6.16768C11.5763 6.17584 11.6354 6.184 11.6923 6.1936C11.7585 6.20464 11.8226 6.21736 11.8862 6.23008C11.9068 6.23416 11.9284 6.23776 11.9486 6.24208C12.8846 6.4408 13.5227 6.81304 13.6396 7.17352V9.29032C13.3749 9.3364 13.1054 9.37408 12.833 9.4036C12.8306 9.40384 12.8282 9.40408 12.8258 9.40432C12.5529 9.43384 12.2769 9.45472 11.999 9.46744C11.8281 9.47464 11.6539 9.4792 11.4832 9.4792C10.9751 9.4792 10.4959 9.44704 10.0509 9.3892C8.12298 9.1372 6.84546 8.4016 6.68394 7.70344C6.67602 7.67392 6.67242 7.64152 6.67242 7.60408C6.67242 6.9556 8.07402 6.19888 10.1623 6.10552C10.2782 6.1 10.3939 6.09712 10.5064 6.09712C10.828 6.09736 11.1347 6.11752 11.4215 6.15352C11.4544 6.15808 11.4854 6.16312 11.5173 6.16768ZM9.16962 4.08616C9.43386 4.07464 9.69714 4.06864 9.95202 4.06864C13.7327 4.06864 16.9797 5.29456 17.3447 6.86368C17.3587 6.92056 17.3639 6.97912 17.3654 7.03984C17.3649 7.04824 17.363 7.05592 17.363 7.06456C17.363 7.828 16.2559 8.68384 14.3599 9.14488V7.19728C14.3697 7.14832 14.3702 7.09672 14.3582 7.04464C14.1573 6.18544 13.0257 5.67712 11.7681 5.47672C11.3493 5.40952 10.9163 5.3764 10.4987 5.37616C10.3747 5.37616 10.2472 5.37928 10.1207 5.38552C7.70082 5.49376 5.9445 6.42616 5.9445 7.60312C5.9445 7.61752 5.94642 7.63048 5.9469 7.6444V11.7323C3.59946 10.9545 2.02098 9.73264 1.67778 8.25568C1.65042 8.13952 1.63674 8.02264 1.63674 7.90816C1.6365 6.2296 3.99402 4.31752 9.16962 4.08616ZM22.5165 16.1262C21.7939 16.4558 20.9959 16.7469 20.1398 16.9977V15.425C20.1398 15.226 19.9787 15.065 19.7798 15.065C19.5808 15.065 19.4198 15.226 19.4198 15.425V17.195C18.664 17.3891 17.8687 17.5526 17.0433 17.6838V16.0538C17.0433 15.8548 16.8823 15.6938 16.6833 15.6938C16.4843 15.6938 16.3233 15.8548 16.3233 16.0538V17.7887C15.5515 17.8917 14.7568 17.9668 13.9466 18.0124V16.2861C13.9466 16.0871 13.7855 15.9261 13.5866 15.9261C13.3876 15.9261 13.2266 16.0871 13.2266 16.2861V18.045C12.9393 18.0549 12.6499 18.0614 12.3602 18.0614C11.8454 18.0614 11.3416 18.0462 10.8501 18.0172V16.2861C10.8501 16.0871 10.6891 15.9261 10.4901 15.9261C10.2911 15.9261 10.1301 16.0871 10.1301 16.2861V17.9637C9.2937 17.8893 8.49834 17.7734 7.75338 17.6198V15.856C7.75338 15.657 7.59234 15.496 7.39338 15.496C7.19442 15.496 7.03338 15.657 7.03338 15.856V17.4566C6.15138 17.2358 5.35386 16.9581 4.6569 16.6331V14.7822C4.6569 14.5833 4.49586 14.4222 4.2969 14.4222C4.09794 14.4222 3.9369 14.5833 3.9369 14.7822V16.2592C2.71314 15.551 1.91058 14.6668 1.67778 13.665C1.65042 13.5486 1.63674 13.4318 1.63674 13.3173V9.80608C2.50914 10.9722 4.10394 11.9207 6.17682 12.5466C6.18642 12.5505 6.19434 12.557 6.20466 12.5601C6.27906 12.5822 6.3573 12.6014 6.4329 12.6225C6.44154 12.6249 6.45018 12.6273 6.45882 12.6297C6.65394 12.6844 6.85218 12.7365 7.05474 12.7852C7.23186 12.8284 7.4109 12.8699 7.59378 12.9086C7.60338 12.9105 7.61322 12.9124 7.62306 12.9146C9.05418 13.2153 10.6531 13.3792 12.3607 13.3792C12.7737 13.3792 13.1879 13.3694 13.5909 13.3504C16.9593 13.2009 20.1014 12.5512 22.517 11.5113V16.1262H22.5165Z"
                                        fill="black"
                                    />
                                </svg>
                                <p>Bədən ölçüləri</p>
                            </button>
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
                                                        queryClient.invalidateQueries(
                                                            {
                                                                queryKey: [
                                                                    'basket_items',
                                                                ],
                                                            }
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
                {IsSizeBarOpen && (
                    <div className="bg-black bg-opacity-35 flex justify-center items-center fixed top-0 left-0 w-full h-full  z-50">
                        <div className="bg-white w-1/2 lg:w-[40%]  max-md:w-[80%] rounded-3xl max-sm:p-4 p-[50px] text-[28px] font-medium">
                            <div className="w-full flex flex-row justify-between items-center">
                                <h4>Bədən ölçüsü</h4>
                                <svg
                                    className=" cursor-pointer"
                                    onClick={() => {
                                        setIsSizeBarOpen(false);
                                    }}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6L6 18"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6 6L18 18"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </div>
                            <img
                                className=" w-full "
                                src="https://s3-alpha-sig.figma.com/img/115a/f053/3e47f2d36c4b5decdb91a5aa5006ec69?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DMUaleRVbB1C-IjDw8O~4A9x0raFy7olR936YaIAux7VbG3b1pz~YR2-S4vyhl6EJ42tPYEHzfPTFZf3OAXuNafxeDg~R~gaa4mDfS95Rxi58n9rDPtlh2enqIobuYC--w1485cSVKjYd8IOiRJXWi85BRhTqPRiPp10TKMbMGqisklfA5wQPOEEPCKrXH~rZ8g9V4SnWgCRxsRrGmdCt~Cb4Kqlz9VankIQXNf0IDdjoedAceEZEpPex~M1wtbFoM9dzWU19mr7sgfxIYltgdjkQZ1fNZQoGs~FpD~fg9TFsu5BFk1uZ55SaVW57udPc~FBVQJQZM~jcRg1cPDq-w__"
                                alt=""
                            />
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
