import { BreadCump } from '../../components/BroadCump';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import ProductSwipper from '../../components/ProductSwipper.tsx';
import { Link } from 'react-router-dom';

export default function Basked() {
    return (
        <div>
            <Header />
            <main className="lg:mt-[0px] mt-0">
                <div className="px-[40px] pt-[40px] mb-[28px]">
                    <BreadCump />
                </div>
                <section className="px-[28px]">
                    <h3 className="text-[40px] font-semibold mt-[28px] mb-[40px]">
                        Brendlər{' '}
                    </h3>{' '}
                </section>
                <section className="flex lg:flex-row flex-col  h-fit px-[40px] justify-between mb-[100px] gap-[65px]">
                    <div className="flex overflow-hidden flex-col justify-center p-10 rounded-3xl bg-stone-50 w-full gap-[65px] h-fit max-md:px-5">
                        <div className="flex flex-col max-md:max-w-full">
                            <div className="flex flex-wrap gap-10 items-center justify-between mt-5 max-md:max-w-full">
                                <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col self-stretch my-auto w-[152px]">
                                        <div className="gap-1 self-start text-base font-semibold text-center text-black">
                                            298 AZN
                                        </div>
                                        <div className="mt-2.5 w-full text-sm text-black">
                                            Zara iki tərəfli kolleksiya pencək
                                        </div>
                                        <div className="flex flex-col items-start mt-2.5 w-full text-xs text-black text-opacity-80">
                                            <div className="flex gap-3 items-start">
                                                <div>Qara rəng</div>
                                                <div>L Ölçü</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center self-stretch my-auto text-sm text-white whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d193498fe0181ef85fe4ae9724992dc65cbe3fabda2add56210add53339fe5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                    />
                                    <div className="overflow-hidden self-stretch px-2.5 my-auto w-8 h-8 flex justify-center items-center rounded-lg bg-slate-400">
                                        01
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0141e195a9e4eacd357b98a238f5374b7d80c129448dd3fe9f98c88a3f2d375e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                    />
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fc83e19d3515c691d41a84b841f0d56e9ac8d5ef3c476eac75fb6fdab0b3c5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square rounded-[100px]"
                                />
                            </div>
                            <div className="mt-5 max-w-full min-h-0 border border-solid border-black border-opacity-10 w-full" />
                            <div className="flex flex-wrap gap-10 items-center justify-between mt-5 max-md:max-w-full">
                                <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/433bd11231e5650c10a77ce2802324b5d17cb98cb604e8219eb9b2010e366408?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col self-stretch my-auto w-[152px]">
                                        <div className="gap-1 self-start text-base font-semibold text-center text-black">
                                            298 AZN
                                        </div>
                                        <div className="mt-2.5 w-full text-sm text-black">
                                            Zara iki tərəfli kolleksiya pencək
                                        </div>
                                        <div className="flex flex-col items-start mt-2.5 w-full text-xs text-black text-opacity-80">
                                            <div className="flex gap-3 items-start">
                                                <div>Qara rəng</div>
                                                <div>L Ölçü</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center self-stretch my-auto text-sm text-white whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28d193498fe0181ef85fe4ae9724992dc65cbe3fabda2add56210add53339fe5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                    />
                                    <div className="overflow-hidden self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-slate-400">
                                        01
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0141e195a9e4eacd357b98a238f5374b7d80c129448dd3fe9f98c88a3f2d375e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                    />
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fc83e19d3515c691d41a84b841f0d56e9ac8d5ef3c476eac75fb6fdab0b3c5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square rounded-[100px]"
                                />
                            </div>
                            <div className="mt-5 max-w-full min-h-0 border border-solid border-black border-opacity-10 w-full" />
                        </div>
                    </div>
                    <div className="w-[2px]  min-h-[400px] h-[100%] bg-black lg:block hidden  opacity-10" />
                    <div className="flex flex-col rounded-3xl min-w-[306px]">
                        <div className="flex overflow-hidden flex-col justify-center p-7 w-full rounded-3xl bg-stone-50">
                            <div className="flex flex-col">
                                <div className="text-base font-semibold text-black">
                                    Ümumi sifariş
                                </div>
                                <div className="flex flex-col mt-6 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full text-sm">
                                            <div className="flex gap-10 justify-between items-center w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    Məbləğ:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    250 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    Çatdırılma:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    5 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full text-rose-500">
                                                <div className="self-stretch my-auto">
                                                    Endirim
                                                </div>
                                                <div className="self-stretch my-auto text-right">
                                                    5 AZN
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 w-full border border-solid border-zinc-300 min-h-[1px]" />
                                        <div className="flex gap-10 justify-between items-center mt-3">
                                            <div className="self-stretch my-auto text-sm text-black text-opacity-80">
                                                Cəmi məbləğ:
                                            </div>
                                            <div className="self-stretch my-auto text-base font-semibold text-blue-600">
                                                260 AZN
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/user/basked/confirm">
                                        <button className="flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 mt-6 w-full text-base font-medium text-white bg-[#3873C3] rounded-[100px]">
                                            <div className="gap-2 self-stretch">
                                                sifarish et
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px] px-[40px] bg-[white] pb-[80px]">
                    <div className="flex flex-row flex-wrap justify-between ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            Tiktok hekayələr
                        </h2>
                    </div>
                    <ProductSwipper bg="white" />
                </section>
            </main>
            <Footer />
        </div>
    );
}
