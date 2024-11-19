import React, { useState } from 'react';

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
    <header className="flex gap-10 justify-between items-center w-full">
        <h2 className="self-stretch my-auto text-lg font-medium text-black">
            {title}
        </h2>
        <button
            className="flex overflow-hidden flex-col justify-center self-stretch px-1.5 py-3 my-auto w-6"
            aria-label={isOpen ? 'Close category' : 'Open category'}
            onClick={onToggle}
        >
            <span
                className={`flex  transform font-medium text-[30px] ${
                    isOpen ? 'rotate-[45deg]' : 'rotate-0'
                } transition-transform`}
            >
                +
            </span>
        </button>
    </header>
);

interface ClothingListProps {
    items: ClothingItem[];
}

const ClothingList: React.FC<ClothingListProps> = ({ items }) => (
    <ul
        className="flex flex-col justify-center items-center px-5 mt-4 w-full text-base text-black whitespace-nowrap rounded-3xl aspect-square bg-stone-50 max-h-[200px] overflow-y-scroll"
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

const ClothingMenu: React.FC = () => {
    const [isClothingOpen, setIsClothingOpen] = useState(false);
    const [isElektronikaOpen, setIsElektronikaOpen] = useState(false);
    const [isKosmetikaOpen, setIsKosmetikaOpen] = useState(false);

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
        <section className="flex overflow-hidden flex-col px-7 py-10 bg-white rounded-3xl max-w-[408px] shadow-[0px_0px_12px_rgba(6,27,62,0.12)]">
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
