import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ClothingMenu from '../ClothingMenu';
function disableScrolling() {
    // const scrollTop = window.scrollY;
    document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${scrollTop}px`;
}
function enableScrolling() {
    document.body.style.overflow = '';
    document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, scrollTop);
}
export default function Header() {
    const [isCatalogOpen, setIsClothingOpen] = useState<boolean>(false);
    const [isBaskedOpen, setIsBaskedOpen] = useState<boolean>(false);
    const [SearchValue, setSearchValue] = useState<string>('');
    const [showaside, setShowAside] = useState<boolean>(false);
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const CatalogBtnRef = useRef<HTMLDivElement | null>(null);
    const CAtalogDiv = useRef<HTMLDivElement | null>(null);

    const BaskedBtnRef = useRef<HTMLDivElement | null>(null);
    const BaskedDiv = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current?.focus(); // Focus the input element
            inputRef.current?.click(); // Focus the input element
        }
    }, [isSearchOpen === true]);

    useEffect(() => {
        const handleOutsideClicked = (e: any) => {
            if (
                CatalogBtnRef.current &&
                !CatalogBtnRef.current.contains(e.target as Node) &&
                CAtalogDiv.current &&
                !CAtalogDiv.current.contains(e.target as Node)
            ) {
                // console.log('outsideClick');
                setIsClothingOpen(false);

                enableScrolling();
            } else {
                console.log('insideClick');
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClicked);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClicked);
        };
    }, [CAtalogDiv.current, CatalogBtnRef.current]);

    useEffect(() => {
        const handleOutsideClicked = (e: any) => {
            if (
                BaskedBtnRef.current &&
                !BaskedBtnRef.current.contains(e.target as Node) &&
                BaskedDiv.current &&
                !BaskedDiv.current.contains(e.target as Node)
            ) {
                // console.log('outsideClick');
                setIsBaskedOpen(false);
                enableScrolling();
            } else {
                console.log('insideClick');
            }
        };

        // Add the event listener when the component mounts
        document.addEventListener('mousedown', handleOutsideClicked);

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleOutsideClicked);
        };
    }, [BaskedDiv.current, BaskedBtnRef.current]);
    return (
        <div className="  block w-full z-[99999999999] top-0 min-h-[68px]">
            <div className=" lg:flex hidden flex-col relative bg-white">
                <div className="w-full bg-[#3873C3] h-[40px] text-center text-[14px] font-normal text-white flex items-center justify-center">
                    p5 noyabr-25 noyabr 30% endirim
                </div>
                <div className="flex overflow-hidden flex-wrap gap-5  justify-between items-center px-10 py-2.5 w-full text-black border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                    <Link to={'/'}>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 self-stretch aspect-[1.4] w-[98px]"
                        />
                    </Link>

                    <div className="flex flex-wrap gap-6 justify-center items-center self-stretch my-auto text-base max-md:max-w-full ">
                        <Link to={'/poducts'}>
                            <div className="self-stretch my-auto">Geyim</div>
                        </Link>
                        <Link to={'/poducts'}>
                            <div className="self-stretch my-auto">
                                Elektronika
                            </div>
                        </Link>
                        <Link to={'/poducts'}>
                            <div className="self-stretch my-auto">
                                Kosmetika
                            </div>
                        </Link>
                        <Link to={'/brends'}>
                            <div className="self-stretch my-auto">Brendlər</div>
                        </Link>
                        <Link to={'/poducts'}>
                            <div className="self-stretch my-auto">Endirim</div>
                        </Link>
                        <Link to={'/poducts'}>
                            <div className="self-stretch my-auto">
                                Bütün məhsullar
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-6 items-center self-stretch my-auto text-sm">
                        <div className="flex gap-5 items-center self-stretch my-auto ">
                            <Link to={'/user/login'}>
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
                            </Link>

                            {/* <div className=" flex flex-row gap-2">
                                <div className="w-[36px] h-[36px] rounded-md bg-[#B1C7E4] text-black flex justify-center items-center">
                                    AZ
                                </div>
                                <div className="w-[36px] h-[36px] rounded-md bg-[#F5F5F5] text-black flex justify-center items-center">
                                    AZ
                                </div>{' '}
                                <div className="w-[36px] h-[36px] rounded-md bg-[#F5F5F5] text-black flex justify-center items-center">
                                    AZ
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex overflow-hidden  flex-wrap gap-5 justify-between items-center px-10 py-4 w-full text-base bg-white border-b border-black border-opacity-10 max-md:px-5 max-md:max-w-full">
                    <div
                        ref={CatalogBtnRef}
                        className="flex flex-col justify-center self-stretch px-7 py-3 my-auto font-medium text-white whitespace-nowrap bg-blue-600 min-h-[48px] rounded-[100px] max-md:px-5"
                        onClick={() => {
                            setIsClothingOpen((prew) => !prew);
                            setSearchValue('');
                            setIsBaskedOpen(false);
                            if (!isCatalogOpen) {
                                disableScrolling();
                            } else {
                                enableScrolling();
                            }
                        }}
                    >
                        <div className="flex gap-3 items-center w-full ">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35befc4b842efe2488b26ce91bb004beac36ff324b59192df49471be348bd1ac?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-stretch my-auto w-6 rounded-md aspect-square"
                            />
                            <div className="self-stretch my-auto">Kataloq</div>
                        </div>
                    </div>

                    <div className="flex overflow-hidden flex-nowrap gap-10 self-stretch py-1.5 pr-1.5 pl-5 whitespace-nowrap bg-neutral-100 rounded-[100px] text-black text-opacity-60 lg:w-[50%] max-w-[514px] w-full justify-between">
                        <input
                            type="text"
                            placeholder="Axtar"
                            value={SearchValue}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setSearchValue(e.target.value);
                                if (e.target.value !== '') {
                                    disableScrolling();
                                    setIsClothingOpen(false);
                                    setIsBaskedOpen(false);
                                } else {
                                    enableScrolling();
                                }
                            }}
                            className="bg-transparent outline-none flex-1 text-black text-opacity-60 my-auto"
                        />

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f662e6db87fdef7a0f47b78d88abe073291cb9bd2390dd8047857b7fd35816f4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 w-11 aspect-square"
                        />
                    </div>
                    <div className="flex gap-6 self-stretch my-auto text-sm text-black">
                        <Link to={'/liked'}>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                            />
                        </Link>

                        <button
                            className="flex gap-3  items-center"
                            onClick={() => {
                                setIsClothingOpen(false);
                                setSearchValue('');
                                if (!isBaskedOpen) {
                                    disableScrolling();
                                } else {
                                    enableScrolling();
                                }
                                setIsBaskedOpen((prev) => !prev);
                            }}
                        >
                            <div
                                className="w-[48px] h-[48px] rounded-full bg-[#3873C3] flex justify-center items-center relative"
                                ref={BaskedBtnRef}
                            >
                                <img src="/svg/basked.svg" />
                                <div className="w-[12px] h-[12px] flex justify-center items-center  text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                    2
                                </div>
                            </div>
                            <div className="self-stretch my-auto">112 AZN</div>
                        </button>
                    </div>
                </div>
                <div
                    className="absolute w-full min-h-[70vh] bg-black  top-[30vh] z-50 bg-opacity-[60%] px-10 py-2"
                    style={{
                        display: isCatalogOpen ? 'block' : 'none',
                    }}
                >
                    <div ref={CAtalogDiv} className="w-[408px]">
                        <ClothingMenu
                            ref={CAtalogDiv}
                            setIsCatalogOpen={(value) => {
                                enableScrolling();

                                setIsClothingOpen(value);
                            }}
                        />
                    </div>
                    {/* 
                    <div
                        className="w-[300px] h-[300px] bg-white bg-opacity-100"
                        ref={myToggleMenuRef}
                    >
                        <h1 className="text-red-500">my toggle menu</h1>
                    </div> */}
                </div>
                {/* <CatalogBar
                    isCatalogOpen={isCatalogOpen && SearchValue === ''}
                    setIsCatalogOpen={(value) => {
                        enableScrolling();

                        setIsClothingOpen(value);
                    }}
                /> */}

                <div
                    className="absolute top-[100%] w-full h-[100vh] px-10 py-2 z-[99999999999] bg-black bg-opacity-60"
                    style={
                        SearchValue === ''
                            ? { display: 'none' }
                            : { display: 'block' }
                    }
                >
                    <div
                        className="h-[200vh] bg-black bg-opacity-60 w-full absolute top-0 left-0 z-[-1] "
                        onClick={() => {
                            setSearchValue('');
                            enableScrolling();
                        }}
                    />
                    <div className="flex overflow-hidden flex-wrap gap-10 items-start py-10 pr-20 pl-10 bg-white rounded-3xl max-md:px-5">
                        <div className="flex flex-col whitespace-nowrap min-w-[280px]">
                            <div className="text-sm text-black text-opacity-60">
                                Kateqoriyalar
                            </div>
                            <div className="flex flex-col mt-7 w-full text-lg font-medium text-black">
                                <div className="flex gap-10 justify-between items-center w-full">
                                    <div className="self-stretch my-auto">
                                        Geyim
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eaf2ee9ec4a4b6ec490a50798f603a24709a01889ad8676e784277a0c81d6f3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                    <div className="self-stretch my-auto">
                                        Elektronika
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eaf2ee9ec4a4b6ec490a50798f603a24709a01889ad8676e784277a0c81d6f3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                </div>
                                <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                    <div className="self-stretch my-auto">
                                        Kosmetika
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eaf2ee9ec4a4b6ec490a50798f603a24709a01889ad8676e784277a0c81d6f3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch w-px border border-solid border-black border-opacity-10 h-[305px]" />
                        <div className="flex flex-col">
                            <div className="text-sm text-black text-opacity-60">
                                Məhsullar
                            </div>
                            <div className="flex flex-col mt-5 w-full">
                                <div className="flex gap-2.5 items-center w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col justify-center self-stretch my-auto">
                                        <div className="text-sm text-black">
                                            Zara iki tərəfli kolleksiya pencək
                                        </div>
                                        <div className="mt-2.5 text-base font-semibold text-black">
                                            298 AZN
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2.5 items-center mt-4 w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                    />
                                    <div className="flex flex-col justify-center self-stretch my-auto">
                                        <div className="text-sm text-black">
                                            Zara iki tərəfli kolleksiya pencək
                                        </div>
                                        <div className="mt-2.5 text-base font-semibold text-black">
                                            298 AZN
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    ref={BaskedDiv}
                    className="bg-black  bg-opacity-60 absolute top-[100%] w-full h-[100vh] px-10 py-2 z-[99999999999]"
                    style={
                        !isBaskedOpen
                            ? { display: 'none' }
                            : { display: 'block' }
                    }
                >
                    <div
                        className="h-[200vh] bg-black bg-opacity-60 w-full absolute top-0 left-0 z-[-1] "
                        onClick={() => {
                            setIsBaskedOpen(false);
                            enableScrolling();
                        }}
                    />
                    <div className="flex overflow-hidden max-h-[60vh] flex-col items-center pt-10 bg-white rounded-3xl max-w-[511px] absolute right-4">
                        <div className="flex gap-5 justify-between w-full max-w-[432px] max-md:max-w-full mx-[40px]">
                            <div className="text-lg font-semibold text-center text-slate-800">
                                Səbətdəki məhsullarım
                            </div>
                            <div className="flex gap-2 items-center py-0.5 text-sm font-medium text-blue-600 whitespace-nowrap border-b border-solid border-b-blue-600">
                                <Link to="/basked/sifarislerim">
                                    <div className="self-stretch my-auto">
                                        Səbətim
                                    </div>
                                </Link>

                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7f2acd9a318cf187f0283026a4fe39d7a878ed09e47ff9f7a31b2fad77b951f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                                />
                            </div>
                        </div>
                        <div className="overflow-y-scroll h-[40vh] px-[24px]">
                            {/* onecard */}
                            <div>
                                <div className="flex gap-8 items-center mt-[4px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                        />
                                        <div className="flex flex-col self-stretch my-auto w-[152px]">
                                            <div className="w-full text-sm font-medium text-black">
                                                Zara iki tərəfli kolleksiya
                                                pencək
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
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9358261fb5c9b47ddda71283dc2e74a91d2ff5650a77a1cca91a21f654228?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                        <div className="overflow-hidden flex justify-center items-center self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-slate-400">
                                            01
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9ffafd163cac5114cd6b3eb85e5013d893da6f8069d8e1ffe1279f71fe8a3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-3 w-full text-base font-semibold text-center text-black max-w-[431px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-10 items-center self-start">
                                        <div className="gap-1 self-stretch my-auto">
                                            298 AZN
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8def1bebbad3cbf09bef8d55ed4ec86d21afaa0e256174b36745ad28b51cc5f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-7 aspect-square"
                                    />
                                </div>
                                <div className="mx-[40px] shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px]" />
                            </div>
                            <div>
                                <div className="flex gap-8 items-center mt-[4px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                        />
                                        <div className="flex flex-col self-stretch my-auto w-[152px]">
                                            <div className="w-full text-sm font-medium text-black">
                                                Zara iki tərəfli kolleksiya
                                                pencək
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
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9358261fb5c9b47ddda71283dc2e74a91d2ff5650a77a1cca91a21f654228?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                        <div className="overflow-hidden flex justify-center items-center self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-slate-400">
                                            01
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9ffafd163cac5114cd6b3eb85e5013d893da6f8069d8e1ffe1279f71fe8a3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-3 w-full text-base font-semibold text-center text-black max-w-[431px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-10 items-center self-start">
                                        <div className="gap-1 self-stretch my-auto">
                                            298 AZN
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8def1bebbad3cbf09bef8d55ed4ec86d21afaa0e256174b36745ad28b51cc5f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-7 aspect-square"
                                    />
                                </div>
                                <div className="mx-[40px] shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px]" />
                            </div>{' '}
                            <div>
                                <div className="flex gap-8 items-center mt-[4px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-2.5 items-center self-stretch my-auto min-w-[240px]">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1aada38d8237e05e2eb26c676da63e1b69441ab9b1939b0dbd88f9da64a5a5c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto rounded-3xl aspect-[1.12] w-[134px]"
                                        />
                                        <div className="flex flex-col self-stretch my-auto w-[152px]">
                                            <div className="w-full text-sm font-medium text-black">
                                                Zara iki tərəfli kolleksiya
                                                pencək
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
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ef9358261fb5c9b47ddda71283dc2e74a91d2ff5650a77a1cca91a21f654228?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                        <div className="overflow-hidden flex justify-center items-center self-stretch px-2.5 my-auto w-8 h-8 rounded-lg bg-slate-400">
                                            01
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b9ffafd163cac5114cd6b3eb85e5013d893da6f8069d8e1ffe1279f71fe8a3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-8 rounded-lg aspect-square"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-3 w-full text-base font-semibold text-center text-black max-w-[431px] max-md:max-w-full mx-[40px]">
                                    <div className="flex gap-10 items-center self-start">
                                        <div className="gap-1 self-stretch my-auto">
                                            298 AZN
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8def1bebbad3cbf09bef8d55ed4ec86d21afaa0e256174b36745ad28b51cc5f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-7 aspect-square"
                                    />
                                </div>
                                <div className="mx-[40px] shrink-0 mt-4 max-w-full h-px border border-solid border-black border-opacity-10 w-[431px]" />
                            </div>
                        </div>

                        <div className="flex overflow-hidden flex-wrap gap-5 justify-between self-stretch  py-5 mt-10  px-[40px] bg-slate-100  max-md:max-w-full w-full">
                            <div className="flex gap-3 items-center my-auto">
                                <div className="self-stretch my-auto text-sm text-black text-opacity-60">
                                    Cəmi məbləğ:
                                </div>
                                <div className="self-stretch my-auto text-lg font-semibold text-center text-blue-600">
                                    600 AZN
                                </div>
                            </div>
                            <Link to="/user/basked/confirm">
                                <div className="gap-2.5 self-stretch px-10 py-4 text-base font-medium text-white bg-blue-600 border border-blue-600 border-solid rounded-[100px] max-md:px-5">
                                    Sifariş et
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobil header */}
            <div className="lg:hidden items-center flex h-[68px] px-4 justify-between w-full fixed bg-white z-50">
                <Link to={'/'}>
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0810c4aeebbd64a3e1b72741797d34b3b9cdb99d6d6af4238830cc7f449ae1bc?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className={`object-contain shrink-0 self-stretch aspect-[1.4] duration-300 w-[70px] ${
                            isSearchOpen || showaside
                                ? 'opacity-0   '
                                : 'opacity-100'
                        } `}
                    />
                </Link>{' '}
                <div className="flex gap-4 items-center">
                    <div
                        className={`absolute top-[14px] flex justify-between ease-in-out  duration-500  pr-[16px] z-[54] ${
                            isSearchOpen
                                ? ' left-[16px] h-[40px]  w-[93%] bg-[#F5F5F5] rounded-[100px] '
                                : ' right-[6rem]  w-fit '
                        } `}
                    >
                        <button
                            className={`${
                                showaside ? 'opacity-0' : 'opacity-100'
                            }`}
                            onClick={() => {
                                setIsSearchOpen(true);
                            }}
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="40"
                                    height="40"
                                    rx="20"
                                    fill="#F5F5F5"
                                />
                                <g clip-path="url(#clip0_921_3507)">
                                    <circle
                                        cx="19.1667"
                                        cy="19.1665"
                                        r="7.5"
                                        stroke="black"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M28.1767 27.4791C28.1244 27.558 28.03 27.6525 27.8411 27.8413C27.6523 28.0302 27.5579 28.1246 27.479 28.1768C27.0168 28.4829 26.3916 28.3251 26.1299 27.8365C26.0853 27.7531 26.0469 27.6252 25.9703 27.3693C25.8865 27.0898 25.8446 26.95 25.8365 26.8517C25.7889 26.2725 26.2723 25.789 26.8515 25.8367C26.9498 25.8448 27.0896 25.8867 27.3691 25.9704C27.625 26.0471 27.7529 26.0854 27.8363 26.1301C28.325 26.3918 28.4827 27.017 28.1767 27.4791Z"
                                        stroke="black"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_921_3507">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                            transform="translate(10 10)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search"
                            className={`h-full w-full bg-transparent  outline-none  ${
                                isSearchOpen ? 'opacity-100' : 'hidden'
                            } `}
                            name=""
                        />
                        <button
                            className={` flex justify-center items-center ${
                                isSearchOpen ? 'opacity-100' : 'opacity-0'
                            } `}
                            onClick={() => {
                                setIsSearchOpen(false);
                            }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 5L5 15"
                                    stroke="black"
                                    stroke-opacity="0.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M5 5L15 15"
                                    stroke="black"
                                    stroke-opacity="0.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <button
                        className={`flex gap-3 items-center ${
                            isSearchOpen || showaside
                                ? 'opacity-0'
                                : 'opacity-100'
                        }  `}
                        onClick={() => {
                            setIsBaskedOpen((prev) => !prev);
                            if (!isBaskedOpen) {
                                setIsClothingOpen(false);
                                setSearchValue('');
                                disableScrolling();
                            } else {
                                enableScrolling();
                            }
                        }}
                    >
                        <Link to="/basked/sifarislerim">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#3873C3] flex justify-center items-center relative">
                                <img src="/svg/basked.svg" />
                                <div className="w-[12px] h-[12px] flex justify-center items-center  text-white text-[8px] bg-[#FC394C] rounded-full absolute top-[10px] right-[10px]">
                                    2
                                </div>
                            </div>
                        </Link>
                    </button>
                    <div className="relative ">
                        <div
                            onClick={() => {
                                setShowAside((prew) => !prew);
                            }}
                            className={`w-[40px] h-[40px] aspect-square rounded-full duration-300 bg-[#3873C3] bg-opacity-40 bg-blur-[4px] flex justify-center items-center ${
                                isSearchOpen || showaside
                                    ? 'opacity-0 '
                                    : 'opacity-100 '
                            } `}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 17.27V16.27H20V17.27H4ZM4 12.5V11.5H20V12.5H4ZM4 7.72998V6.72998H20V7.72998H4Z"
                                    fill={'white'}
                                />
                            </svg>
                        </div>
                        {/* <div
                            className={`absolute  ${
                                showaside ? '' : 'hidden'
                            }  right-[0] mt-2 w-48 origin-top-right rounded-md z-50 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu-button"
                        >
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/poducts" className="w-full">
                                    <div>Geyim</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/poducts">
                                    <div>Elektronika</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/poducts">
                                    <div>Kosmetika</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/brends">
                                    <div>Brendlər</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/poducts">
                                    <div>Endirim</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/poducts">
                                    <div>Bütün məhsullar</div>
                                </Link>
                            </div>
                            <div className="block px-4 py-2 text-sm text-gray-700">
                                <Link to="/user/login">
                                    <div>Daxil ol</div>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    <div
                        className="flex flex-row justify-between items-center px-4 w-full min-h-[68px] absolute top-0  duration-300 left-0 "
                        style={{
                            opacity: showaside ? '100' : '0',
                            zIndex: showaside ? '55' : '-55',
                        }}
                    >
                        <div className="flex flex-row gap-5">
                            <Link to={'/liked'}>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a474845e97e67198e85a77d82874411bfb561b5013d0a8a987188427aa587c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 w-12 aspect-square rounded-[100px]"
                                />
                            </Link>
                            <div className="flex gap-6 items-center self-stretch my-auto text-sm">
                                <div className="flex gap-5 items-center self-stretch my-auto ">
                                    <Link to={'/user/login'}>
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setShowAside(false)}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 5L5 15"
                                    stroke="black"
                                    stroke-opacity="0.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M5 5L15 15"
                                    stroke="black"
                                    stroke-opacity="0.8"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {showaside && (
                <div className="hiden max-md:flex fixed top-[70px] left-0 w-full z-[67]">
                    <ClothingMenu
                        ref={CAtalogDiv}
                        setIsCatalogOpen={(value) => {
                            enableScrolling();

                            setIsClothingOpen(value);
                        }}
                    />
                </div>
            )}
        </div>
    );
}
