import { useState } from 'react';

const CommentsSection = () => {
    const [sortOrder, setSortOrder] = useState('newest');

    const reviewData = [
        {
            id: 1,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 2,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 3,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
        {
            id: 4,
            name: 'Ilaha Nazarova',
            date: '01/10/2024',
            content:
                'From quick spills and spots to weekly entire floor mopping, the Braava jet® m6 Robot Mop mops like you would, using the Precision Jet Spray to help tackle sticky messes and kitchen grease.',
            avatarSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/a5540671aa70313d23346b763636f4f483f2787cbfffaa12eefa61b058a9f85d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
            ratingSrc:
                'https://cdn.builder.io/api/v1/image/assets/TEMP/9081f9108e40e4f82a1b0395b105c5cf51c06b8327322da894e8cbcb79c3db1d?placeholderIfAbsent=true&apiKey=c6f3c7bb740649e5a32c147b3037a1c2',
        },
    ];

    const handleSortChange = (event: any) => {
        setSortOrder(event.target.value);
    };

    const sortedReviews = [...reviewData].sort(() => {
        if (sortOrder === 'newest') {
            return Date.now();
        } else {
            return Date.now();
        }
    });

    return (
        <section className="flex flex-col w-full max-md:max-w-full mt-10 ">
            <header className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                <p className="gap-3 self-stretch my-auto text-sm text-black">
                    440 rəy
                </p>
                <div className="flex gap-4 max-sm:justify-between max-sm:w-full items-center self-stretch my-auto min-w-[240px] flex-wrap">
                    <label
                        htmlFor="sortDropdown"
                        className="self-stretch my-auto text-sm text-black text-opacity-60"
                    >
                        Sırala
                    </label>
                    <div className="flex overflow-hidden gap-10 self-stretch p-3 my-auto text-base bg-white rounded-[100px] min-w-[240px] text-black text-opacity-90 w-[283px]">
                        <select
                            id="sortDropdown"
                            className="flex-grow bg-transparent border-none outline-none"
                            value={sortOrder}
                            onChange={handleSortChange}
                        >
                            <option value="newest">Yenidən köhnəyə</option>
                            <option value="oldest">Köhnədən yeniyə</option>
                        </select>
                    </div>
                </div>
            </header>
            <main className="flex flex-col mt-7 w-full max-md:max-w-full pb-[20px]">
                {sortedReviews.map((review) => (
                    <article
                        key={review.id}
                        className="flex overflow-hidden flex-col justify-center p-7 mt-3 max-w-full bg-white rounded-3xl w-full max-md:px-5"
                    >
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <header className="flex gap-3 items-center self-start text-sm text-black">
                                <img
                                    loading="lazy"
                                    src={review.avatarSrc}
                                    alt={`${review.name}'s avatar`}
                                    className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[100px] w-[60px]"
                                />
                                <div className="flex flex-col justify-center self-stretch my-auto w-[120px]">
                                    <img
                                        loading="lazy"
                                        src={review.ratingSrc}
                                        alt="User rating"
                                        className="object-contain max-w-full aspect-[5] w-[120px]"
                                    />
                                    <p className="self-start mt-1">
                                        {review.name}
                                    </p>
                                </div>
                            </header>
                            <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                                <time className="text-sm text-black text-opacity-60 max-md:max-w-full">
                                    {review.date}
                                </time>
                                <p className="mt-2 text-base text-black text-opacity-80 max-md:max-w-full">
                                    {review.content}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </section>
    );
};

export default CommentsSection;
