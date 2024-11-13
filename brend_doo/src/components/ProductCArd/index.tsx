import { useState } from 'react';
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

    return (
        <div className="flex flex-col pb-5 text-base text-black max-w-[325px]">
            <div
                className={`flex w-full relative bg-${
                    bg === 'white' ? 'white' : '[#F5F5F5]'
                } rounded-3xl p-3  border border-white border-solid min-h-[386px]`}
            >
                <img
                    className="rounded-3xl"
                    src="https://s3-alpha-sig.figma.com/img/d098/fc21/21f632847e78f6c23b06739006833a33?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2T7KmYOqmEcB~gVgUdzDLrNcgDjymTsavsuIn5rbpvC5Y9UGWA2~8eXLOPbkRHcthpOpsBPZiKhb1Z~nnphLGGvD1nUrAFnefGh7etLqI3L5HEc~c6ASNzDw-pE1wdNfJlGkMBjx6er-dxY~NoCvLTrT6pxUjpqPv2eQg19Q5pwaqhOrAiHRzm5OrEPeL7PvfcWjKY8owbx5l8WgoV2g535h2VBhJTEFvCuqzLw4zHd-lcKzrDVHzUIyqI-db2GPVdiYGYC9WCEDP9pFal-a1sPvMLqsLkI08Tb6zbtHL0fTtamppL9dhaeagkUoP7gjcxUb1QiRYHay64iryjhyg__"
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
                        <p className="text">Yeni</p>{' '}
                    </div>
                )}
                {issale && (
                    <div className="bg-[#FF3C79] text-white px-3 py-2  rounded-full  absolute top-6 left-6 flex justify-center items-center">
                        <p className="text">10% endirim</p>{' '}
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
                    <div
                        className={`flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 text-base font-medium text-white bg-blue-600 max-w-[301px] rounded-[100px] duration-300 ${
                            isMauseOn ? ' translate-y-0' : 'translate-y-[100px]'
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
