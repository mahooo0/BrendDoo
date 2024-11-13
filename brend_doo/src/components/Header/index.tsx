import React from 'react';

export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="flex overflow-hidden flex-wrap gap-5  justify-between items-center px-10 py-2.5 w-full text-black border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-contain shrink-0 self-stretch aspect-[1.4] w-[98px]"
                />
                <div className="flex flex-wrap gap-6 justify-center items-center self-stretch my-auto text-base max-md:max-w-full lg:ml-[10%] ml-0">
                    <div className="self-stretch my-auto">Geyim</div>
                    <div className="self-stretch my-auto">Elektronika</div>
                    <div className="self-stretch my-auto">Kosmetika</div>
                    <div className="self-stretch my-auto">Brendlər</div>
                    <div className="self-stretch my-auto">Endirim</div>
                    <div className="self-stretch my-auto">Bütün məhsullar</div>
                </div>
                <div className="flex gap-6 items-center self-stretch my-auto text-sm">
                    <div className="flex gap-5 items-center self-stretch my-auto ">
                        <div className="flex gap-3 items-center self-stretch my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2c5ef44547ee29c9aeeedd574f237ce849c00eefa59f62c0355b167c347f116?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-[100px]"
                            />
                            <div className="self-stretch my-auto">
                                Şəxsi kabinet
                            </div>
                        </div>
                        <div className=" flex flex-row gap-2">
                            <div className="w-[36px] h-[36px] rounded-md bg-[#B1C7E4] text-black flex justify-center items-center">
                                AZ
                            </div>
                            <div className="w-[36px] h-[36px] rounded-md bg-[#F5F5F5] text-black flex justify-center items-center">
                                AZ
                            </div>{' '}
                            <div className="w-[36px] h-[36px] rounded-md bg-[#F5F5F5] text-black flex justify-center items-center">
                                AZ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-center px-10 py-4 w-full text-base bg-white border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col justify-center self-stretch px-7 py-3 my-auto font-medium text-white whitespace-nowrap bg-blue-600 min-h-[48px] rounded-[100px] max-md:px-5">
                    <div className="flex gap-3 items-center w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/35befc4b842efe2488b26ce91bb004beac36ff324b59192df49471be348bd1ac?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch my-auto w-6 rounded-md aspect-square"
                        />
                        <div className="self-stretch my-auto">Kataloq</div>
                    </div>
                </div>
                <div className="flex overflow-hidden flex-nowrap gap-10 self-stretch py-1.5 pr-1.5 pl-5 whitespace-nowrap bg-neutral-100 rounded-[100px] text-black text-opacity-60 lg:w-[30%] max-w-[514px] w-full justify-between">
                    <input
                        type="text"
                        placeholder="Axtar"
                        className="bg-transparent outline-none flex-1 text-black text-opacity-60 my-auto"
                    />
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f662e6db87fdef7a0f47b78d88abe073291cb9bd2390dd8047857b7fd35816f4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 w-11 aspect-square"
                    />
                </div>
                <div className="flex gap-6 self-stretch my-auto text-sm text-black">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                    />
                    <button className="flex gap-3 items-center">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#3873C3] flex justify-center items-center relative">
                            <img src="/svg/basked.svg" />
                            <div className="w-[12px] h-[12px] flex justify-center items-center text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                2
                            </div>
                        </div>
                        <div className="self-stretch my-auto">112 AZN</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
