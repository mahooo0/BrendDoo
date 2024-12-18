import React, { useEffect, useState } from 'react';

interface ClothingItem {
    name: string;
}

interface CategoryProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
}

const CategoryHeader: React.FC<CategoryProps> = ({
    title,
    isOpen,
    onToggle,
}) => (
    <div className="flex gap-10 justify-between items-center w-full">
        <h2 className="self-stretch my-auto text-lg font-medium text-black">
            {title}
        </h2>
        <button
            className="flex overflow-hidden flex-col justify-center self-stretch px-1.5 py-3 my-auto w-6"
            aria-label={isOpen ? 'Close category' : 'Open category'}
            onClick={onToggle}
        >
            <span
                className={`flex  transform font-medium text-[30px] transition-transform`}
            >
                {!isOpen ? (
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14 7.99805H8V13.998H6V7.99805H0V5.99805H6V-0.00195312H8V5.99805H14V7.99805Z"
                            fill="black"
                            fill-opacity="0.8"
                        />
                    </svg>
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M19 12.998H5V10.998H19V12.998Z" fill="black" />
                    </svg>
                )}
            </span>
        </button>
    </div>
);

interface ClothingListProps {
    items: ClothingItem[];
}

const ClothingList: React.FC<ClothingListProps> = ({ items }) => (
    <ul
        className="custom-scrollbar flex flex-col  py-3 items-center max-md:px-0 max-md:rounded-none px-5 mt-4 w-full text-base text-black whitespace-nowrap rounded-3xl aspect-square bg-stone-50 max-h-[150px] overflow-y-scroll"
        style={{
            scrollbarWidth: 'thin', // For Firefox
            scrollbarColor: '#a0aec0 #edf2f7', // thumb color and track color for Firefox
        }}
    >
        {' '}
        {items.map((item, index) => (
            <li key={index} className="flex flex-col w-full">
                <span>{item.name}</span>
                {index < items.length - 1 && (
                    <div className="mt-3 max-w-full border border-solid border-black border-opacity-10 min-h-[1px] w-[312px]" />
                )}
            </li>
        ))}
    </ul>
);

// interface CategoryItemProps {
//     title: string;
// }

// const CategoryItem: React.FC<CategoryItemProps> = ({ title }) => (
//     <div className="flex gap-10 justify-between items-center mt-6 w-full">
//         <h3 className="self-stretch my-auto">{title}</h3>
//         <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eaf2ee9ec4a4b6ec490a50798f603a24709a01889ad8676e784277a0c81d6f3?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
//             alt=""
//             className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//         />
//     </div>
// );

interface ClothingMenuProps {
    setIsCatalogOpen: (value: boolean) => void;
    ref: any;
}

const ClothingMenu: React.FC<ClothingMenuProps> = ({ setIsCatalogOpen }) => {
    const [isClothingOpen, setIsClothingOpen] = useState(false);
    const [isElektronikaOpen, setIsElektronikaOpen] = useState(false);
    const [isKosmetikaOpen, setIsKosmetikaOpen] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(
                        entry.isIntersecting
                            ? 'visible'
                            : setIsCatalogOpen(false)
                    );
                });
            },
            { threshold: 0 }
        );

        const element = document.querySelector('.catalog-bar');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);
    const clothingItems: ClothingItem[] = [
        { name: 'Palto' },
        { name: 'Şalvar' },
        { name: 'Pençək' },
        { name: 'Köynək' },
        { name: 'Şalvar' },
        { name: 'Köynək' },
        { name: 'Palto' },
        { name: 'Pençək' },
    ];

    const toggleClothingCategory = () => {
        setIsClothingOpen(!isClothingOpen);
        setIsElektronikaOpen(false);
        setIsKosmetikaOpen(false);
    };
    const toggleElektronikaCategory = () => {
        setIsElektronikaOpen(!isElektronikaOpen);
        setIsClothingOpen(false);
        setIsKosmetikaOpen(false);
    };
    const toggleKosmetikaCategory = () => {
        setIsClothingOpen(false);
        setIsElektronikaOpen(false);
        setIsKosmetikaOpen(!isKosmetikaOpen);
    };

    return (
        <section
            style={{
                scrollbarWidth: 'none',
            }}
            className="catalog-bar  scrollbar-hide max-h-[60vh] overflow-y-scroll flex overflow-hidden flex-col px-7 py-10 bg-white rounded-3xl max-md:max-w-full max-md:w-full max-md:mx-4 max-md:px-4 max-md:py-6 max-md:mt-2 max-md:bg-[#F9F9F9] max-w-[408px] bg-opacity-100 shadow-[0px_0px_12px_rgba(6,27,62,0.12)] !z-[1000] "
        >
            <CategoryHeader
                title="Geyim"
                isOpen={isClothingOpen}
                onToggle={toggleClothingCategory}
            />
            {isClothingOpen && <ClothingList items={clothingItems} />}
            <CategoryHeader
                title="Elektronika"
                isOpen={isElektronikaOpen}
                onToggle={toggleElektronikaCategory}
            />
            {isElektronikaOpen && <ClothingList items={clothingItems} />}
            <CategoryHeader
                title="Kosmetika"
                isOpen={isKosmetikaOpen}
                onToggle={toggleKosmetikaCategory}
            />
            {isKosmetikaOpen && <ClothingList items={clothingItems} />}

            <h2 className="self-start mt-6 text-lg font-medium text-rose-500">
                Endirimli məhsullar
            </h2>
            <h2 className="self-start mt-6 text-lg font-medium text-black">
                Brendlər
            </h2>
        </section>
    );
};

export default ClothingMenu;
