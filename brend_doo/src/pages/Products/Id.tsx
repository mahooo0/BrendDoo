import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { BreadCump } from '../../components/BroadCump';
import CommentsSection from '../../components/Comments';
import ProductCard from '../../components/ProductCArd';
import { useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import {
    ProductDetail,
    ProductResponse,
    TranslationsKeys,
} from '../../setting/Types';
import Loading from '../../components/Loading';
import { useEffect, useState } from 'react';

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
    console.log('SimularProducts', SimularProducts);
    console.log('slug', slug);
    const [currentColor, setCurrentColor] = useState<string>('');
    const [currentOption, setCurrentOption] = useState<string>('');
    useEffect(() => {
        const CurrentColorNAme = Productslingle?.options.find(
            (item) => item.color_code
        )?.title;
        const CurrentOptionNAme = Productslingle?.options.find(
            (item) => !item.color_code
        )?.title;
        if (CurrentColorNAme) {
            setCurrentColor(CurrentColorNAme);
        }
        if (CurrentOptionNAme) {
            setCurrentOption(CurrentOptionNAme);
        }
    }, [Productslingle]);
    if (ProductslingleLoading || tarnslationLoading || SimularProductsLoading) {
        return <Loading />;
    }
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[54px] mt-0 max-sm:mt-3">
                <div className="px-[40px] max-sm:px-4">
                    <BreadCump />
                </div>
                <section className="flex lg:flex-row flex-col gap-10 mx-[40px]  max-sm:mx-4">
                    <div className="relative lg:w-[40%] w-full ">
                        {' '}
                        {/* Parent container with height */}
                        <section className="flex flex-col rounded-3xl w-full max-w-[670px] lg:h-auto h-fit  sticky top-[10px]">
                            <section
                                className=" sroll- flex flex-col  lg:h-[90vh] custom-scrollbar h-fit  overflow-y-scroll mt-[28px] gap-5 max-sm:gap-3 custom-scrollbar pb-[0px]"
                                style={{
                                    scrollbarWidth: 'thin', // For Firefox
                                    scrollbarColor: '#888 transparent', // For Firefox
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
                        </section>
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
                                    Uzun kollu, yaka detaylı ceket. Önde yama
                                    cepli. Aynı renkte suni yünlü iç astarlı.
                                    Önden düğmeli.
                                    <br />
                                    ------- bura ne yazim 0------------
                                </div>
                                <div className="mt-4 w-full text-sm max-md:max-w-full">
                                    Məhsulun kodu:12345678
                                    <br />
                                    ------- bura ne yazim 0------------
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
                        {/* {Productslingle?.options.map(
                            (option: {
                                id: number;
                                is_default: number;
                                title: string;
                                color_code: string | null;
                            }) => {
                                if (option.color_code) {
                                    return (
                                        <div
                                            key={option.id}
                                            className="flex gap-2.5 items-center self-stretch pb-1 my-auto w-8 border-b border-black"
                                        >
                                            <div
                                                className="flex self-stretch my-auto w-8 h-8 rounded bg-slate-800 min-h-[32px]"
                                                style={{
                                                    backgroundColor:
                                                        option.color_code,
                                                }}
                                            />
                                        </div>
                                    );
                                }
                                return null;
                            }
                        )} */}
                        {currentColor && (
                            <div className="flex flex-col mt-7 max-w-full w-[254px]">
                                <div className="text-sm text-black text-opacity-60">
                                    {tarnslation?.color}: {currentColor}
                                </div>
                                <div className="flex gap-2 items-center self-start mt-3">
                                    {Productslingle?.options.map(
                                        (option: {
                                            id: number;
                                            is_default: number;
                                            title: string;
                                            color_code: string | null;
                                        }) => {
                                            if (option.color_code) {
                                                return (
                                                    <div
                                                        onClick={() =>
                                                            setCurrentColor(
                                                                option.title
                                                            )
                                                        }
                                                        key={option.id}
                                                        className={`flex gap-2.5 cursor-pointer items-center self-stretch pb-1 my-auto w-8 ${
                                                            currentColor ===
                                                            option.title
                                                                ? 'border-b border-black'
                                                                : ''
                                                        } `}
                                                    >
                                                        <div
                                                            className="flex self-stretch my-auto w-8 h-8 rounded bg-slate-800 min-h-[32px]"
                                                            style={{
                                                                backgroundColor:
                                                                    option.color_code,
                                                            }}
                                                        />
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }
                                    )}
                                </div>
                            </div>
                        )}

                        {currentOption && (
                            <div className="flex flex-col mt-7 max-w-full whitespace-nowrap w-[280px]">
                                <div className="text-sm text-black text-opacity-60">
                                    {tarnslation?.size}
                                </div>
                                <div className="flex gap-2 mt-3 w-full text-xs  text-black rounded">
                                    {Productslingle?.options.map(
                                        (option: {
                                            id: number;
                                            is_default: number;
                                            title: string;
                                            color_code: string | null;
                                        }) => {
                                            if (option.color_code === null) {
                                                return (
                                                    <div
                                                        onClick={() =>
                                                            setCurrentOption(
                                                                option.title
                                                            )
                                                        }
                                                        className={`px-3 min-w-[40px] ${
                                                            currentOption ===
                                                            option.title
                                                                ? 'bg-black text-white'
                                                                : 'bg-white'
                                                        }  py-3.5 text-center cursor-pointer aspect-square rounded border border-solid border-neutral-400`}
                                                    >
                                                        {option.title}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }
                                    )}
                                </div>
                            </div>
                        )}
                        <div className="flex flex-wrap gap-5 items-center mt-7 w-full max-md:max-w-full">
                            <div className="flex gap-2 justify-center items-center self-stretch px-4 py-2.5 my-auto w-40 text-sm text-green-600 bg-emerald-50 rounded-[100px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b62d68e0d6115b8dd376935f9a020305d201f125a5ae0023584b7f5eddf7971?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                />
                                <div className="self-stretch my-auto">
                                    Stokda var
                                </div>
                            </div>
                            <div className="flex gap-4 items-center self-stretch my-auto text-base font-semibold min-w-[240px] text-slate-800 w-[276px]">
                                <div className="flex gap-2 items-center self-stretch my-auto">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8cb6d7f93b0332f135d17e49a58e6371bc747e917151fb4be5c60f2e035e3f1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[120px]"
                                    />
                                    <div className="self-stretch my-auto">
                                        5.0{'  '}
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
                                <button className="flex max-sm:items-center max-sm:w-full overflow-hidden flex-col justify-center self-stretch px-16 py-3.5 my-auto text-white bg-blue-600 min-w-[240px] rounded-[100px] w-[285px] max-md:px-5">
                                    <div className="flex gap-2 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/12162e338001dffe48b2f7720205d57a300942ee6d909f5e9d356e6bce11941f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            Səbətə əlavə et
                                        </div>
                                    </div>
                                </button>
                                <button className="flex overflow-hidden max-sm:items-center max-sm:w-full flex-col justify-center self-stretch px-16 py-3.5 my-auto text-blue-600 border border-solid border-slate-300 min-w-[240px] rounded-[100px] w-[285px] max-md:px-5">
                                    <div className="flex gap-2 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75cf4b1351dde0d9ed370b338053886c40c25d9c6e4c0c5a450da1fb19e13e3b?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            Bir kliklə al
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07d431d73088f7a9f3aed7f9493deda18edf1f9e2a2aa01d2a8d1ce05d8757a7?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain max-sm:hidden shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                            />
                        </div>
                        <div
                            className="flex rounded-3xl bg-stone-50 max-w-[670px] min-h-[824px] px-[40px] py-[48px] max-sm:mt-10 mt-[90px] flex-col"
                            dangerouslySetInnerHTML={{
                                __html: '<p>Burara description eleve ele </p>',
                            }}
                        />
                    </section>
                </section>
                <section className="mt-[100px] max-sm:mt-12 bg-[#F8F8F8] max-sm:px-4 px-[40px]">
                    <div className="flex flex-wrap gap-8 justify-start max-sm:justify-center items-center max-sm:pt-[24px] pt-[80px]">
                        <div className="flex flex-col justify-center items-center self-stretch p-8 my-auto bg-white rounded-3xl min-w-[240px] w-[296px] max-md:px-5">
                            <div className="text-6xl font-semibold leading-none text-center text-zinc-900 max-md:text-4xl">
                                4.7
                            </div>
                            <div className="flex gap-0.5 items-start mt-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dca374733cb9d1aba7db23d829c0e6bad1c18b8be000a06d9f7eafe138eabb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dca374733cb9d1aba7db23d829c0e6bad1c18b8be000a06d9f7eafe138eabb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dca374733cb9d1aba7db23d829c0e6bad1c18b8be000a06d9f7eafe138eabb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dca374733cb9d1aba7db23d829c0e6bad1c18b8be000a06d9f7eafe138eabb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/591791d9bf0466acd38c03315eeb78ca082e8d782cd227b4348cd394161b7ec6?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-6 aspect-square"
                                />
                            </div>
                            <div className="mt-3 text-sm text-center text-neutral-600">
                                İstifadəçi dəyərləndirməsi{' '}
                                <span className="text-neutral-600"> (4)</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
                            {Array.from({ length: 5 }).map(() => (
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
                            ))}
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
                        Tövsiyyələr
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
