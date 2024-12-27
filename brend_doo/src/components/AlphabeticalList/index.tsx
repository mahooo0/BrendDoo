import React from 'react';

interface AlphabeticalListProps {
    letters: string[];
}

const AlphabeticalList: React.FC<AlphabeticalListProps> = ({ letters }) => {
    return (
        <section className="flex flex-col whitespace-nowrap">
            <div className="flex flex-col w-full text-xl font-light text-black  max-md:max-w-full">
                <nav className="flex w-[100vw]  max-sm:overflow-x-scroll max-w-full no-scrollbar gap-7 items-center max-md:max-w-full justify-between hide-scrollbar">
                    {letters.map((letter) => (
                        <div key={letter} className="self-stretch my-auto">
                            {letter}
                        </div>
                    ))}
                </nav>
                <div className="mt-7 w-full border border-solid border-black border-opacity-60 min-h-[1px] max-md:max-w-full" />
            </div>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 items-start mt-10 w-full max-md:max-w-full hide-scrollbar">
                {letters.map((letter, index) => (
                    <div
                        className="w-full min-w-[230px] pt-[20px]"
                        key={letter}
                    >
                        <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
                            <div className="flex gap-5 items-start self-stretch my-auto">
                                <div className="text-xl font-semibold text-[#B1C7E4] w-[43px]">
                                    {letter}
                                </div>
                                <div className="flex flex-col text-base font-medium text-black text-opacity-80 w-[43px]">
                                    {[
                                        'Zara',
                                        'Zara',
                                        'Zara',
                                        'Zara',
                                        'Zara',
                                        'Zara',
                                    ].map((brand, brandIndex) => (
                                        <div
                                            key={brandIndex}
                                            className={
                                                brandIndex > 0 ? 'mt-4' : ''
                                            }
                                        >
                                            {brand}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {index < letters.length - 1 && (
                            <div className="self-stretch mt-5 w-full border border-solid border-black border-opacity-10 min-h-[1px] max-md:max-w-full" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AlphabeticalList;
