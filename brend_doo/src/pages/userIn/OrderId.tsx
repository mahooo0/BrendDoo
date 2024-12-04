import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import UserAside from '../../components/userAside';

export default function OrderId() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex flex-row w-full gap-5 p-5">
                <UserAside active={1} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] lg:p-[40px] px-2 py-10">
                    <div className="flex flex-col items-start ">
                        <div className="flex flex-col max-w-full whitespace-nowrap w-[162px]">
                            <div
                                onClick={() => navigate(-1)}
                                className="flex gap-2 items-center self-start text-sm text-zinc-950 cursor-pointer"
                            >
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e16fbda98176a2fcfc899b69e0f7e3fea7dc9adeb9c74702a0323a7762de95d?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                />
                                <div className="self-stretch my-auto">Geri</div>
                            </div>
                            <div className="mt-5 text-3xl font-semibold text-black">
                                Sifarişim
                            </div>
                        </div>

                        <div className="flex flex-nowrap gap-2 items-center mt-10 w-full ">
                            <div>
                                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-green-500 rounded-full fill-green-500 " />
                            </div>
                            <div className="flex shrink-0 self-stretch my-auto bg-green-500 h-[3px]  rounded-[100px] lg:w-[28%] w-[7%]" />
                            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-green-500 rounded-full fill-green-500" />
                            <div className="flex shrink-0 self-stretch my-auto bg-neutral-200 h-[3px]  rounded-[100px] lg:w-[28%] w-[7%]" />
                            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-200" />
                            <div className="flex shrink-0 self-stretch my-auto bg-neutral-200 h-[3px]  rounded-[100px] lg:w-[28%] w-[7%]" />
                            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-200" />
                        </div>
                        <div className="flex flex-wrap lg:flex-row flex-col  gap-2 justify-between self-stretch mt-3 w-full max-md:max-w-full">
                            <div className="flex flex-col">
                                <div className="text-sm w-fit text-black">
                                    Sifariş verildi
                                </div>
                                <div className="mt-1.5 text-xs w-fit text-black text-opacity-60">
                                    05.02.2024
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-sm w-fit text-black">
                                    Sifariş hazırlanır
                                </div>
                                <div className="mt-1.5 text-xs w-fit text-black text-opacity-60">
                                    05.02.2024
                                </div>
                            </div>
                            <div className="self-start text-sm w-fit text-green-950">
                                Kuryerə verildi
                            </div>
                            <div className="self-start text-sm w-fit whitespace-nowrap text-black text-opacity-60">
                                Çatdırıldı
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col font-semibold text-[16px] mt-[60px]">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center w-full max-md:max-w-full">
                            {Array.from({ length: 4 }).map(() => (
                                <div className="flex gap-3 items-center flex-wrap">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col justify-center self-stretch my-auto">
                                        <div className="text-sm text-black text-wrap">
                                            Zara iki tərəfli kolleksiya pencək
                                        </div>
                                        <div className="mt-4 text-xs w-fit text-wrap text-blue-600 underline decoration-auto decoration-solid underline-offset-auto">
                                            Məhsulu dəyərləndir
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-3 items-center flex-wrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                />
                                <div className="flex flex-col justify-center self-stretch my-auto">
                                    <div className="text-sm text-black text-wrap">
                                        Zara iki tərəfli kolleksiya pencək
                                    </div>
                                    <div className="mt-4 text-xs w-fit text-wrap text-blue-600 underline decoration-auto decoration-solid underline-offset-auto">
                                        Məhsulu dəyərləndir
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-wrap gap-10 px-6 py-5 rounded-3xl bg-white bg-opacity-80  justify-between max-md:pr-5 mt-4">
                        <div className="flex gap-5 items-center flex-wrap">
                            <div className="flex gap-5 items-center self-stretch my-auto">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61bb2aca9b7b286baed1108447439f3b7e43632b7436e098db5d7997b28e7858?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[60px]"
                                />
                                <div className="flex flex-col self-stretch my-auto">
                                    <div className="text-xs text-black text-opacity-60">
                                        Sifariş nömrəsi:
                                    </div>
                                    <div className="mt-2 text-base text-black">
                                        23232323
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 self-stretch my-auto w-0 h-11 border border-solid border-zinc-300" />
                            <div className="flex flex-col self-stretch my-auto">
                                <div className="text-xs text-black text-opacity-60">
                                    Sifariş tarixi:{' '}
                                </div>
                                <div className="mt-2 text-base text-black">
                                    12.07.2024
                                </div>
                            </div>
                            <div className="shrink-0 self-stretch my-auto w-0 h-11 border border-solid border-zinc-300" />
                            <div className="flex flex-col self-stretch my-auto">
                                <div className="text-xs text-black text-opacity-60">
                                    Məhsul sayı
                                </div>
                                <div className="mt-2 text-base text-black">
                                    3 məhsul
                                </div>
                            </div>
                        </div>
                        <button className="flex gap-2.5 justify-center items-center px-7 py-3.5 my-auto text-base font-medium text-center text-white bg-[#3873C3] rounded-xl border border-solid border-neutral-100 max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f94626f29baa40253df5d994693071ebb35e01a27694c2109f8aa983ec4265d5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                Faktura yüklə
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-center px-6 py-5 w-full text-base font-medium text-center bg-white rounded-t-3xl text-black text-opacity-80 max-md:px-5 max-md:max-w-full">
                            <div className="self-stretch my-auto">
                                Çatdırılma məlumatları:
                            </div>
                            <div className="self-stretch my-auto">
                                Ödəniş məlumatları:
                            </div>
                            <div className="flex gap-1 items-center self-stretch text-black whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d4a1a23b873f9a7a617a8408e9f84223a82454a0244d5c030c16308e9e29024?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
                                />
                                <div className="self-stretch my-auto">
                                    ****0000
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden px-5 pt-5 pb-11 rounded-b-3xl mt-1 w-full bg-white max-md:pl-5 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full max-md:mt-10 h-full justify-between">
                                        <div className="flex flex-col w-full">
                                            <div className="text-sm text-black text-opacity-60">
                                                Ünvan:
                                            </div>
                                            <div className="mt-2 text-base text-black">
                                                Bakı şəhər, Yasamal, Ə.Əhmədov
                                                24 A. mənzi 45
                                            </div>
                                        </div>
                                        <div className="flex gap-2 items-center self-start py-0.5 mt-5 text-sm font-medium text-blue-600 border-b border-solid border-b-blue-600">
                                            <div className="self-stretch my-auto">
                                                Ünvan məlumatların dəyiş
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0526326e93674398bc67c3737a2087d7b05c1e7206ef11005491f94e8cb5b1f3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                                        <div className="flex gap-5 justify-between text-sm max-md:max-w-full">
                                            <div className="text-black text-opacity-60">
                                                Məhsul məbləği:
                                            </div>
                                            <div className="font-medium text-center text-black">
                                                400 AZN
                                            </div>
                                        </div>
                                        <div className="shrink-0 mt-5 h-px border border-solid border-zinc-300 max-md:max-w-full" />
                                        <div className="flex gap-5 justify-between mt-3 text-sm max-md:max-w-full">
                                            <div className="text-black text-opacity-60">
                                                Çatdırılma məbləği:
                                            </div>
                                            <div className="font-medium text-center text-black">
                                                10 AZN
                                            </div>
                                        </div>
                                        <div className="shrink-0 mt-5 h-px border border-solid border-zinc-300 max-md:max-w-full" />
                                        <div className="flex gap-5 justify-between mt-3 max-md:max-w-full">
                                            <div className="my-auto text-sm text-black text-opacity-60">
                                                Ümumi məbləğ:
                                            </div>
                                            <div className="text-lg font-semibold text-center text-green-500">
                                                410 AZN
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-[40px]">
                        <div className="gap-2.5 self-start px-6 py-3 text-sm font-medium text-rose-500 border border-rose-500 border-solid rounded-[100px]">
                            Sifarişi ləğ et
                        </div>
                        <div className="flex gap-2 items-center mt-3.5 text-xs text-black text-opacity-80">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de6a5b11847522840b6320ba9d9c3ff5184743b8eb06723fc6afbd171fb70ae5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                Sifariş hazırlanma mərhələsinə qədər ləğv edilə
                                bilər.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
