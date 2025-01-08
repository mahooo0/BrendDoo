import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import ProductSwipper from '../../components/ProductSwipper.tsx';
import { Link, useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request.ts';
import { BaskedItem, TranslationsKeys } from '../../setting/Types.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import ROUTES from '../../setting/routes.tsx';

export default function Basked() {
    const { lang = 'ru' } = useParams<{ lang: string }>();
    const { data: basked } = GETRequest<BaskedItem[]>(
        `/basket_items`,
        'basket_items',
        [lang]
    );
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
    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    return (
        <div>
            <Header />
            <main className="lg:mt-[0px] mt-0">
                <div className="px-[40px] pt-[40px] max-sm:px-4 mb-[28px]">
                    <div className="flex items-center gap-2">
                        <Link to={`${lang}`}>
                            <h6 className="text-nowrap self-stretch my-auto text-black hover:text-blue-600">
                                {tarnslation?.home}{' '}
                            </h6>
                        </Link>
                        {/* <img
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
                        </Link> */}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bb3b3dae771cd265db1accd95aa96f30bd9da3da88a57867743da53bebc0eb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <h6 className="text-nowrap self-stretch my-auto">
                            {tarnslation?.basked}{' '}
                        </h6>
                    </div>{' '}
                </div>
                <section className="px-[40px] max-sm:px-4">
                    <h3 className="text-[40px] font-semibold  max-sm:text-[32px] mt-[28px] mb-[40px]">
                        {tarnslation?.basked}{' '}
                    </h3>{' '}
                </section>
                <section className="flex lg:flex-row flex-col max-sm:px-4  h-fit px-[40px] justify-between mb-[100px] gap-[65px]">
                    <div className="flex overflow-hidden flex-col justify-center p-10 rounded-3xl bg-stone-50 w-full gap-[65px] h-fit max-md:px-5">
                        <div className="flex flex-col max-md:max-w-full">
                            {basked?.map((item) => (
                                <>
                                    <div className="flex flex-wrap gap-10 items-center justify-between mt-5 max-md:max-w-full">
                                        <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                            <img
                                                loading="lazy"
                                                src={item.product.image}
                                                className="object-cover shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                            />
                                            <div className="flex flex-col self-stretch my-auto w-[152px]">
                                                <div className="gap-1 self-start text-base font-semibold text-center text-black">
                                                    {
                                                        item.product
                                                            .discounted_price
                                                    }{' '}
                                                    AZN
                                                </div>
                                                <div className="mt-2.5 w-full text-sm text-black">
                                                    {item.product.title}
                                                </div>
                                                <div className="flex flex-col items-start mt-2.5 w-full text-xs text-black text-opacity-80">
                                                    <div className="flex gap-3 items-start">
                                                        <div>
                                                            -----FILter---
                                                        </div>
                                                        <div>
                                                            -----FILter---
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 items-center self-stretch my-auto text-sm text-white whitespace-nowrap">
                                            <button
                                                disabled={item.quantity === 1}
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
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d193498fe0181ef85fe4ae9724992dc65cbe3fabda2add56210add53339fe5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                    className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                                />
                                            </button>

                                            <div className="overflow-hidden self-stretch px-2.5 my-auto w-8 h-8 flex justify-center items-center rounded-lg bg-slate-400">
                                                {item.quantity}
                                            </div>
                                            <img
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
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0141e195a9e4eacd357b98a238f5374b7d80c129448dd3fe9f98c88a3f2d375e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain cursor-pointer shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                            />
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
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fc83e19d3515c691d41a84b841f0d56e9ac8d5ef3c476eac75fb6fdab0b3c5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square rounded-[100px]"
                                            />
                                        </button>
                                    </div>
                                    <div className="mt-5 max-w-full min-h-0 border border-solid border-black border-opacity-10 w-full" />
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="w-[2px]  min-h-[400px] h-[100%] bg-black lg:block hidden  opacity-10" />
                    <div className="flex flex-col rounded-3xl min-w-[306px]">
                        <div className="flex overflow-hidden flex-col justify-center p-7 w-full rounded-3xl bg-stone-50">
                            <div className="flex flex-col">
                                <div className="text-base font-semibold text-black">
                                    {tarnslation?.Ümumi_sifariş}
                                </div>
                                <div className="flex flex-col mt-6 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full text-sm">
                                            <div className="flex gap-10 justify-between items-center w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    {tarnslation?.Məbləğ}:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    250 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    {tarnslation?.Çatdırılma}:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    5 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full text-rose-500">
                                                <div className="self-stretch my-auto">
                                                    {tarnslation?.Endirim}:
                                                </div>
                                                <div className="self-stretch my-auto text-right">
                                                    5 AZN
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 w-full border border-solid border-zinc-300 min-h-[1px]" />
                                        <div className="flex gap-10 justify-between items-center mt-3">
                                            <div className="self-stretch my-auto text-sm text-black text-opacity-80">
                                                {tarnslation?.Cəmi_məbləğ}:
                                            </div>
                                            <div className="self-stretch my-auto text-base font-semibold text-blue-600">
                                                260 AZN
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/${lang}/${
                                            ROUTES.ordersConfirm[
                                                lang as keyof typeof ROUTES.ordersConfirm
                                            ]
                                        }`}
                                    >
                                        <button className="flex overflow-hidden h-[48px] flex-col justify-center items-center px-16 py-3.5 mt-6 w-full text-base font-medium text-white bg-[#3873C3] rounded-[100px]">
                                            <div className="gap-2 self-stretch">
                                                {tarnslation?.sifarish_et}:
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px] px-[40px] max-sm:px-0 bg-[white] pb-[80px]">
                    <div className="flex flex-row flex-wrap justify-between  max-sm:px-4">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            {tarnslation?.Tövsiyyələr}
                        </h2>
                    </div>
                    <ProductSwipper bg="white" />
                </section>
            </main>
            <Footer />
        </div>
    );
}
