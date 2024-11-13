import React from 'react';
import Header from '../components/Header';
import TikTokSlider from '../components/TikTokSwipper';
import NoneToBlue from '../components/buttons/NoneT0Blue';
import ProductSwipper from '../components/ProductSwipper.tsx';
import InstaqramSlider from '../components/InstaqramSwipper/index.tsx';
import ImageSwipper from '../components/İmgSwipper.tsx/index.tsx';
import ProductSwipperShort from '../components/ProductSwipperShort.tsx/index.tsx';
import { Footer } from '../components/Footer/index.tsx';

export default function Home() {
    return (
        <div>
            <Header />
            <main className=" flex flex-col justify-center">
                <section className="relative rounded-[20px] overflow-hidden mt-[20px] mx-[40px]">
                    {/* Background Video */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source
                            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1133314765284192593/ddc0c3e57465367651c0aeebc90f221fcb15ec33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwHn6efBkCDSrFSBTU1MfDHxFqpQuTrhUKP07W2XiwEyeeGywiuuPrNYlU-dvu4RRpR0jwOGpq-nhGouaj~9l3g3vrhJiillpjTVC8kuxmbge5YaaxlhtjNhCyncdA6UFCVFpZvpy6D~q2yFGCCwTMMgCUo1Ssk3b9x~mC9QiqJ0MeVh3qlhB4do-2BVU8KzkGO9ai-OyUYn3QQ3DqhOxEQdC-9KxiEjPg32aUkEhFHYky9ypP5wo54G-PLRimVc1wjXp60VwqVStmkKYm141kIHi0WaQJRdqZjAPdOL5oVzWfcbNzeAo92R8gbAFhHYBb6cgUQp~gntgEpiObYc3A__"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Content */}
                    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-52 rounded-3xl bg-black bg-opacity-20 max-md:px-5 max-md:py-24 relative z-10">
                        <div className="flex flex-col max-w-full w-[497px]">
                            <div className="flex flex-col w-full text-center text-neutral-100 max-md:max-w-full">
                                <div className="self-center text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                                    Zara yeni kolleksiya
                                </div>
                                <div className="mt-5 text-lg font-medium max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.
                                </div>
                            </div>
                            <button className="gap-2.5 self-center px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5">
                                Yeni məhsullar
                            </button>
                        </div>
                    </div>
                </section>
                <section className="flex overflow-hidden flex-col justify-center items-center px-[106px] py-9 text-lg font-medium bg-indigo-100 rounded-3xl text-slate-800 max-md:px-5 mt-[20px] mx-[40px]">
                    <div className="flex flex-wrap gap-10 items-center max-md:max-w-full justify-between w-full">
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60d7d28db449fd70332d1d40f0a2507207eea8da26277a2a822b10966b641fa?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                Sürətli çatdırılma
                            </div>
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto min-w-[240px]">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c3492603f1a47b7b41f35900f3dd3664214e8f59e47831bc127b5c363b68d47?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                14 gün ərzində qaytarılma
                            </div>
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0765ac155a1d8d42a861e4bdabe7da708a32d6e42255c5669c3d5c32aecd196e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                2 illik zəmanət
                            </div>
                        </div>
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/33586673d02ec7a3ae6a97cf00523800b30072f9d44f08a8bcb9cadc2e250457?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-9 aspect-square"
                            />
                            <div className="self-stretch my-auto">
                                24/7 aktiv dəstək
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px]">
                    <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium px-[40px] ">
                        Tiktok hekayələr
                    </h2>
                    <TikTokSlider />
                </section>
                <section className="mt-[100px] px-[40px]">
                    <div className="flex flex-row flex-wrap justify-between ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            Tiktok hekayələr
                        </h2>
                        <div className="flex flex-row flex-wrap justify-between gap-3">
                            <NoneToBlue>Hamısı</NoneToBlue>
                            <NoneToBlue>Elektronika</NoneToBlue>
                            <NoneToBlue>Geyim</NoneToBlue>
                            <NoneToBlue>Kosmetika</NoneToBlue>
                        </div>
                    </div>
                    <ProductSwipper bg="grey" />
                </section>{' '}
                <section className="mt-[100px] px-[40px] bg-[#F5F5F5] py-[80px]">
                    <div className="flex flex-row flex-wrap justify-between ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            Tiktok hekayələr
                        </h2>
                        <button className="rounded-[100px] duration-300  bg-[#3873C3] text-white px-[28px] py-[14px] border border-black border-opacity-10">
                            {' '}
                            Hamısına bax
                        </button>{' '}
                    </div>
                    <ProductSwipper bg="white" />
                </section>
                <section className="px-[40px] py-[100px]">
                    <div className="overflow-hidden rounded-3xl bg-slate-400 ">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cba23af55123e1e9f439d44ad64f6fe0cb0e9155f193286b156189514d837975?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain grow mt-32 mr-0 w-full aspect-[2.29] max-md:mt-10 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex z-10 flex-col self-stretch my-auto mr-0 w-full text-white max-md:mt-10 max-md:max-w-full">
                                    <div className="text-3xl font-semibold text-center max-md:max-w-full">
                                        Qeydiyyatdan keç və doya-doya alış-veriş
                                        et!
                                    </div>
                                    <button className="gap-2.5 self-center px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5">
                                        Qeydiyyatdan keç{' '}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a711db3987acd2d59b3e3e00bdf58f01e57883f723707a2fcee8305e25486dff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain w-full aspect-[1.49] max-md:max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px] flex justify-center flex-col">
                    <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium px-[40px] text-center ">
                        İnstaqram heyakələr{' '}
                    </h2>
                    <InstaqramSlider />
                </section>
                <section className="mt-[100px] flex justify-center gap-5 px-[40px] lg:flex-row flex-col">
                    <ImageSwipper />
                    <div className="flex l:w-[60%] w-full overflow-hidden flex-col items-start px-12 pt-12 pb-32 rounded-3xl bg-[#8E98B8]  max-md:px-5 max-md:pb-24">
                        <div className="text-xl font-semibold text-indigo-200">
                            Xüsusi təklif
                        </div>
                        <div className="flex flex-col mt-14 w-full text-white max-w-[629px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <div className="text-4xl font-semibold max-md:max-w-full">
                                    Seçilmiş məhsullara 30% qədər endirim!
                                </div>
                                <div className="mt-5 text-lg font-medium max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever
                                </div>
                            </div>
                            <button className="gap-2.5 self-start px-10 py-4 mt-10 text-xl font-medium text-white border border-white hover:bg-[#FFFFFF] hover:text-black duration-300 border-solid rounded-[100px] max-md:px-5">
                                Məhsullara bax
                            </button>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col px-[40px] mt-[100px]">
                    <div className="flex flex-wrap gap-10 justify-between items-center max-md:max-w-full">
                        <div className="self-stretch my-auto text-4xl font-semibold text-slate-900">
                            Brendlər
                        </div>
                        <div className="self-stretch my-auto text-base font-medium text-blue-600 underline decoration-auto decoration-solid underline-offset-auto">
                            <span className="text-[#3873C3] underline">
                                Hamısına bax
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-12 w-full  max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-wrap gap-4 items-center w-full justify-between">
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-8 my-auto w-36 rounded-3xl bg-neutral-100 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.2] w-[120px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-1 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.51] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.4] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-8 my-auto w-36 rounded-3xl bg-neutral-100 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.2] w-[120px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-3.5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.95] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-1 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.51] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.4] w-[140px]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-8 my-auto w-36 rounded-3xl bg-neutral-100 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.2] w-[120px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-1 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.51] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.4] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-8 my-auto w-36 rounded-3xl bg-neutral-100 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25b0174b3e81ea7f836919503966593fdcacefc3df73d9aa624f5b3d5b38facc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.2] w-[120px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-3.5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c93d2b6bdc8b9c32f3bb24eeee4033ed0efaf42c9602e949eafdcec0ef19f022?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.95] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink justify-center self-stretch px-5 py-1 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f5a63ab17b843b013b1a49338a7f0b5eb8b00afb6bfb6d0b118e00567d1797e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.51] w-[140px]"
                                />
                            </div>
                            <div className="flex overflow-hidden flex-col grow shrink self-stretch px-5 my-auto w-36 rounded-3xl bg-neutral-100">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad92110f3401f200e9870ab443460079ebe7329a40d88a2a5a056161f98dc582?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain aspect-[1.4] w-[140px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px] px-[40px] bg-[#F5F5F5] py-[80px] flex lg:flex-row flex-col justify-between">
                    <div className="flex flex-col flex-wrap gap-7 ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            Tiktok hekayələr
                        </h2>
                        <div>
                            <button className="rounded-[100px] duration-300  bg-[#3873C3] text-white px-[28px] py-[14px] border border-black border-opacity-10">
                                {' '}
                                Hamısına bax
                            </button>{' '}
                        </div>
                    </div>
                    <ProductSwipperShort bg="white" />
                </section>
                <section className="relative  rounded-3xl overflow-hidden mx-[40px]">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1133314765284192593/4adef74a6045f6d7095e79d88caa979400bb66f3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5iq1Rtn5ooRp-npfE4DiBU~J02zdfQXwdY3ZbZ07a~ks0AuluL90JuvsBU748CxDW4IxWaFP3GAqWdEUSm6Tr44NLq6S2G5qiCFYyjaqAwn0pvstPopdULRcaHZ2wfWm5YagOawcJTcJp0h8kOn4~Ol2fBK0PIu0fZmNGn8h2ZdFTtWf~phqbeASZeeOLMy9eqHqxMu0yU7zdI3ZQpYbBtyOz1T~CZ~cIf6rP784GiimPYOFR7M8chWsX5iowOpna1mivHLZ4Omon3gQNMD5F9dLWzpDIPOHWQHUd58TJQkTTbAm1ZI0rkmIcey512fge-IjGuAi8fdY6gl8PvDBQ__"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    <div
                        className="flex overflow-hidden flex-col justify-center items-start px-16 py-24 rounded-3xl max-md:px-5 relative"
                        style={{
                            background:
                                'linear-gradient(269.78deg, rgba(0, 0, 0, 0) 44.74%, rgba(0, 0, 0, 0.102252) 54.13%, rgba(0, 0, 0, 0.306484) 60.6%, rgba(0, 0, 0, 0.488446) 71%, rgba(0, 0, 0, 0.6) 77.76%)',
                        }}
                    >
                        <div className="flex flex-col max-w-full w-[538px]">
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <div className="flex flex-col w-full">
                                    <div className="text-xl font-medium text-white text-opacity-60 max-md:max-w-full">
                                        BÖ!
                                    </div>
                                    <div className="mt-3 text-4xl font-semibold text-white max-md:max-w-full">
                                        Holloween-də yalnız sən fərqlən!
                                    </div>
                                </div>
                                <div className="mt-5 text-lg font-medium text-white text-opacity-90 max-md:max-w-full">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever
                                </div>
                            </div>
                            <div className="gap-2.5 self-start px-10 py-4 mt-10 text-lg font-medium text-white border border-white border-solid rounded-[100px] max-md:px-5">
                                Məhsullara bax
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-row flex-wrap px-[40px] mt-[100px] gap-5 w-fit">
                    <div className=" w-[29%]  flex items-center justify-between">
                        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10">
                            <div className="flex flex-col w-full">
                                <div className="text-4xl font-semibold text-slate-900">
                                    Mövsüm təklifləri
                                </div>
                                <div className="mt-5 text-base text-black text-opacity-80">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever
                                </div>
                            </div>
                            <div className="gap-2.5 self-start px-10 py-4 mt-10 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5">
                                Hamısına bax
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full rounded-3xl "
                        style={{
                            backgroundImage:
                                'url("https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2T7KmYOqmEcB~gVgUdzDLrNcgDjymTsavsuIn5rbpvC5Y9UGWA2~8eXLOPbkRHcthpOpsBPZiKhb1Z~nnphLGGvD1nUrAFnefGh7etLqI3L5HEc~c6ASNzDw-pE1wdNfJlGkMBjx6er-dxY~NoCvLTrT6pxUjpqPv2eQg19Q5pwaqhOrAiHRzm5OrEPeL7PvfcWjKY8owbx5l8WgoV2g535h2VBhJTEFvCuqzLw4zHd-lcKzrDVHzUIyqI-db2GPVdiYGYC9WCEDP9pFal-a1sPvMLqsLkI08Tb6zbtHL0fTtamppL9dhaeagkUoP7gjcxUb1QiRYHay64iryjhyg__")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24 max-md:mt-5 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                <div className="flex flex-col">
                                    <div>
                                        İki tərəfli zara kolleksiyasından qalın
                                        pencək
                                    </div>
                                    <div className="mt-3 font-semibold">
                                        298 AZN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full rounded-3xl "
                        style={{
                            backgroundImage:
                                'url("https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2T7KmYOqmEcB~gVgUdzDLrNcgDjymTsavsuIn5rbpvC5Y9UGWA2~8eXLOPbkRHcthpOpsBPZiKhb1Z~nnphLGGvD1nUrAFnefGh7etLqI3L5HEc~c6ASNzDw-pE1wdNfJlGkMBjx6er-dxY~NoCvLTrT6pxUjpqPv2eQg19Q5pwaqhOrAiHRzm5OrEPeL7PvfcWjKY8owbx5l8WgoV2g535h2VBhJTEFvCuqzLw4zHd-lcKzrDVHzUIyqI-db2GPVdiYGYC9WCEDP9pFal-a1sPvMLqsLkI08Tb6zbtHL0fTtamppL9dhaeagkUoP7gjcxUb1QiRYHay64iryjhyg__")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24 max-md:mt-5 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                <div className="flex flex-col">
                                    <div>
                                        İki tərəfli zara kolleksiyasından qalın
                                        pencək
                                    </div>
                                    <div className="mt-3 font-semibold">
                                        298 AZN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full rounded-3xl "
                        style={{
                            backgroundImage:
                                'url("https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2T7KmYOqmEcB~gVgUdzDLrNcgDjymTsavsuIn5rbpvC5Y9UGWA2~8eXLOPbkRHcthpOpsBPZiKhb1Z~nnphLGGvD1nUrAFnefGh7etLqI3L5HEc~c6ASNzDw-pE1wdNfJlGkMBjx6er-dxY~NoCvLTrT6pxUjpqPv2eQg19Q5pwaqhOrAiHRzm5OrEPeL7PvfcWjKY8owbx5l8WgoV2g535h2VBhJTEFvCuqzLw4zHd-lcKzrDVHzUIyqI-db2GPVdiYGYC9WCEDP9pFal-a1sPvMLqsLkI08Tb6zbtHL0fTtamppL9dhaeagkUoP7gjcxUb1QiRYHay64iryjhyg__")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24 max-md:mt-5 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                <div className="flex flex-col">
                                    <div>
                                        İki tərəfli zara kolleksiyasından qalın
                                        pencək
                                    </div>
                                    <div className="mt-3 font-semibold">
                                        298 AZN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full rounded-3xl "
                        style={{
                            backgroundImage:
                                'url("https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2T7KmYOqmEcB~gVgUdzDLrNcgDjymTsavsuIn5rbpvC5Y9UGWA2~8eXLOPbkRHcthpOpsBPZiKhb1Z~nnphLGGvD1nUrAFnefGh7etLqI3L5HEc~c6ASNzDw-pE1wdNfJlGkMBjx6er-dxY~NoCvLTrT6pxUjpqPv2eQg19Q5pwaqhOrAiHRzm5OrEPeL7PvfcWjKY8owbx5l8WgoV2g535h2VBhJTEFvCuqzLw4zHd-lcKzrDVHzUIyqI-db2GPVdiYGYC9WCEDP9pFal-a1sPvMLqsLkI08Tb6zbtHL0fTtamppL9dhaeagkUoP7gjcxUb1QiRYHay64iryjhyg__")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="flex overflow-hidden flex-col grow px-3 pt-96 pb-3 text-base text-black rounded-3xl border border-solid border-neutral-100 max-md:pt-24 max-md:mt-5 max-md:max-w-full">
                            <div className="flex overflow-hidden flex-col justify-center px-6 py-3.5 rounded-3xl bg-white bg-opacity-80 max-md:px-5">
                                <div className="flex flex-col">
                                    <div>
                                        İki tərəfli zara kolleksiyasından qalın
                                        pencək
                                    </div>
                                    <div className="mt-3 font-semibold">
                                        298 AZN
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[100px] px-[40px] bg-[#F5F5F5] py-[80px]">
                    <div className="flex flex-row flex-wrap justify-between ">
                        <h2 className="lg:text-[40px] md:text-[36px] text-[28px] font-medium  ">
                            Tiktok hekayələr
                        </h2>
                        <button className="rounded-[100px] duration-300  bg-[#3873C3] text-white px-[28px] py-[14px] border border-black border-opacity-10">
                            {' '}
                            Hamısına bax
                        </button>{' '}
                    </div>
                    <ProductSwipper bg="white" />
                </section>
            </main>
            <Footer />
        </div>
    );
}
