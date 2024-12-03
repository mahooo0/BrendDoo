import { useState } from 'react';
import { NoneTolightBlue } from '../buttons/NoneT0Blue';

const faqData = [
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/7ed81901e60d7031974952b0cd1a20d6408f2d4059577fba6ce7e38b327ee0f1?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description:
            'Description 1: This is the first image description, providing more context about the image.Description 1: This is the first image description, providing more context about the image.Description 1: This is the first image description, providing more context about the image.Description 1: This is the first image description, providing more context about the image.',
    },
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/d443c6132dd0e7e25f54f2b8d304395208a230e41bb4a73ec30a5dc182d63d02?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description: 'Description 2: This is the second image description.',
    },
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/f11ed6aac2664b90afda317c8d46a2ce7b2905c6f7dba11aefd98595c809022b?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description:
            'Description 3: Detailed information about the third image.',
    },
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/865eb216cff3a319a5a1e4a4b55c932c74d0577536a40c7b16332b343ca2b8eb?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description: 'Description 4: Description for the fourth image.',
    },
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/1adab8232d97b76e7522db05b27be74d422ebea743672a1fb02f3a6fdec8b798?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description: 'Description 5: This is the fifth image description.',
    },
    {
        question:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        imageSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/f3018e0d82ce8532fdc458e04c471e9a28ad6663730796c2f665f38d7be4059a?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        description:
            'Description 6: Additional information for the sixth image.',
    },
];

function FAQItem({
    question,
    description,
    isOpen,
    onClick,
}: {
    question: string;
    imageSrc: string;
    description: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div
            className={`flex overflow-hidden flex-col justify-center px-6 py-3 w-full border border-solid bg-white  border-white border-opacity-40  max-md:pl-5 max-md:max-w-full cursor-pointer  ${
                isOpen ? ' rounded-[20px]' : 'rounded-[100px]'
            }`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                }
            }}
            aria-expanded={isOpen}
        >
            <div className="flex  gap-10 items-center max-md:max-w-full justify-between">
                <p className="self-stretch my-auto max-md:max-w-full text-[16px]  text-wrap text-black font-medium ">
                    {question}
                </p>
                <button
                    className={`bg-[#F5F5F5] flex justify-center items-center rounded-full min-w-[40px] !h-[40px] text-[30px]  ${
                        isOpen ? 'rotate-[45deg]' : ''
                    }`}
                >
                    <img src="/svg/plus.svg" alt="" />
                </button>{' '}
                {/* <img
                    loading="lazy"
                    src={imageSrc}
                    alt="FAQ"
                    className={`object-contain shrink-0 self-stretch my-auto w-10 aspect-square transition-transform ${
                        isOpen ? 'rotate-[45deg]' : ''
                    }`}
                /> */}
            </div>
            {isOpen && (
                <div className="p-2 text-left">
                    <p className="mt-2 text-sm text-gray-700 ">{description}</p>
                </div>
            )}
        </div>
    );
}

function FAQSection({
    Title,
    isContact,
}: {
    Title: string;
    isContact?: boolean;
}) {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="flex mx-[40px] rounded-[20px] mb-[100px] lg:flex-row flex-col gap-10 justify-between items-start max-md:max-w-full bg-[#F8F8F8] lg:px-[60px] px-[30px] py-[100px]"
        >
            <div className="flex flex-col max-w-[414px]">
                <div className="flex flex-col w-full">
                    <h3 className="text-[40px]  font-semibold text-slate-900">
                        {Title}{' '}
                    </h3>
                    {!isContact && (
                        <p className="mt-5 text-base text-black text-opacity-80 ">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been{' '}
                        </p>
                    )}
                </div>
                {!isContact && (
                    <button className="gap-2.5 self-start px-10 py-4 mt-10 text-base font-medium text-white bg-[#3873C3] border border-[#3873C3] border-solid rounded-[100px]">
                        Bizimlə əlaqə
                    </button>
                )}
            </div>
            <div className="flex flex-col text-base font-medium text-center text-black min-w-[240px] w-full max-md:max-w-full">
                <div className="flex flex-row flex-wrap w-full lg:justify-end justify-center gap-3 mb-[30px]">
                    <NoneTolightBlue isactive={true}>Hamısı</NoneTolightBlue>
                    <NoneTolightBlue>Geri qaytarılma</NoneTolightBlue>
                    <NoneTolightBlue>Ödəniş</NoneTolightBlue>
                    <NoneTolightBlue>Çatdırılma</NoneTolightBlue>
                </div>
                {faqData.map((item, index) => (
                    <div key={index} className={index > 0 ? 'mt-3' : ''}>
                        <FAQItem
                            question={item.question}
                            imageSrc={item.imageSrc}
                            description={item.description}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQSection;
