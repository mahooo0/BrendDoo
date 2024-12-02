import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {
    isnew?: boolean;
    issale?: boolean;
    bg: 'white' | 'grey';
}
export default function ProductCard({
    isnew = false,
    issale = false,
    bg,
}: Props) {
    const [isliked, setisliked] = useState<boolean>(false);
    const [isMauseOn, setisMauseOn] = useState<boolean>(false);
    const [variant, setvariant] = useState<number>(1);
    const navigate = useNavigate();
    return (
        <div className="flex flex-col pb-5 text-base text-black max-w-[325px] ">
            <div
                className={`flex w-full relative bg-${
                    bg === 'white' ? 'white' : '[#F5F5F5]'
                } rounded-3xl p-3  border border-white overflow-hidden border-solid aspect-[0.8]`}
            >
                <img
                    onClick={() => navigate(`/poducts/aa`)}
                    className="rounded-3xl hover:scale-110 duration-300 object-cover w-full h-full"
                    src="https://s3-alpha-sig.figma.com/img/af34/0b4a/d14e809defed0b62ae2ad984556af37d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8PLdqoRPYhRzk4BjTlGS~Xe~ebrE4UHTxZrWg9hldO~VafdHKuJCuZuu60r0Z1ONvhm2Gh6LFMr5PEHaxtwzyn8Ta7W1xwNOKbe196EK7sFknzRBtqfqeamlaaopWb3Ux4r9mvieQySOW6A1yKU3I0jRP2jOyyIcpZvveMR1Mfoy8Uu7sKw2UfqAqEMTtwYdKsuwIGL1orLz2XNJp7Nb4cTRf2h7aeOMtpPNceanyZIz8dzhO1L0WRgjeGfuTck90S390MK-Bc2dXv6beruw8mmlp6TTWP-8wrE5jCk683nlGYM5YPZjMW6X59LG-JQFiM~VyQQi7R7LzedF86hBA__"
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
                    <div className="bg-[#8E98B8] text-white px-3 py-2  rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px] font-medium">Yeni</p>{' '}
                    </div>
                )}
                {issale && (
                    <div className="bg-[#FF3C79] text-white px-3 py-2  rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text-[12px] font-medium">10% endirim</p>{' '}
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
                            className={`flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 text-base font-medium text-white bg-blue-600 max-w-[301px] rounded-[100px] duration-300 ${
                                isMauseOn ? ' opacity-100' : ' opacity-0'
                            }`}
                        >
                            <div className="flex gap-2 items-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccd2f29609bd70219e8403081a0990ef297d5230b91e7fae2658815da1e44173?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                />
                                <div className="self-stretch my-auto ">
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
                        <div className="flex overflow-hidden flex-col justify-center px-14 py-3 text-base font-medium bg-slate-300 max-w-[301px] rounded-[100px] text-slate-800">
                            <div className="flex gap-2 items-center">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aea5798032300cff0cb8633f827efc8d9c19b5e90bd7d2d3214a3fe5775d3b4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                                <div className="self-stretch my-auto">
                                    Səbətə əlavə edildi
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col mt-5 w-full">
                <div>İki tərəfli zara kolleksiyasından qalın pencək</div>
                <div className=" flex flex-row gap-2">
                    {issale && (
                        <div className="mt-3 font-semibold text-[14px] line-through opacity-60">
                            298 AZN
                        </div>
                    )}

                    <div
                        className="mt-3 font-semibold"
                        style={issale ? { color: '#FC3976' } : {}}
                    >
                        {' '}
                        298 AZN
                    </div>
                </div>
            </div>
        </div>
    );
}
