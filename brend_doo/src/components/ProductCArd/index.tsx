import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../setting/Types';
interface Props {
    data?: Product;
    isnew?: boolean;
    issale?: boolean;
    bg: 'white' | 'grey';
}
export default function ProductCard({
    data,
    isnew = false,
    issale = false,
    bg,
}: Props) {
    console.log('ProductCard111', data);

    const [isliked, setisliked] = useState<boolean>(false);
    const [isMauseOn, setisMauseOn] = useState<boolean>(false);
    const [variant, setvariant] = useState<number>(1);
    const navigate = useNavigate();
    if (!data) {
        return (
            <>
                <div className="flex flex-col w-full h-[400px] max-w-sm p-4 bg-gray-100 rounded-3xl animate-pulse">
                    <div className="w-full h-full bg-gray-300 rounded-3xl"></div>
                    {/* <div className="mt-4 h-4 bg-gray-300 rounded"></div>
                <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 flex gap-2">
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div> */}
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
                    onClick={() => navigate(`/poducts/aa`)}
                    className="rounded-3xl hover:scale-110 duration-300 object-cover w-full h-full"
                    src={data?.image}
                    alt=""
                />
                <div
                    className="bg-[#FFFFFF99]  rounded-full w-11 h-11 absolute top-6 right-6 flex justify-center items-center"
                    onClick={() => setisliked((prew: boolean) => !prew)}
                >
                    <img
                        src={
                            !isliked ? '/svg/hartBlack.svg' : '/svg/hartRed.svg'
                        }
                        alt=""
                    />
                </div>
                {isnew && (
                    <div className="bg-[#8E98B8] text-white px-3 py-2 h-fit  rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px] font-medium leading-[14px]">
                            Yeni
                        </p>{' '}
                    </div>
                )}
                {data?.discount && (
                    <div className="bg-[#FF3C79] text-white px-3 py-2  h-fit rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px]  font-medium leading-[14px]">
                            {data?.discount}% endirim
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
                                setvariant(2);
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
                                    Səbətə əlavə et
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
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aea5798032300cff0cb8633f827efc8d9c19b5e90bd7d2d3214a3fe5775d3b4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                                <div className="self-stretch text-nowrap my-auto">
                                    Səbətə əlavə edildi
                                </div>
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
