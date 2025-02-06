import * as React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

interface PaginationItemProps {
    number: number;
    isActive?: boolean;
    onClick?: () => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
    number,
    isActive = false,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 w-[52px] h-[52px] text-black rounded-full ${
                isActive
                    ? 'text-black bg-[#B1C7E4]'
                    : 'border border-black border-opacity-15 text-opacity-55'
            }`}
            aria-current={isActive ? 'page' : undefined}
        >
            {number}
        </button>
    );
};

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 3; // Adjust this number to control how many pages are shown

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxPagesToShow / 2)
        );
        let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage + 1; i <= endPage; i++) {
            // if (i === endPage) {
            //     return;
            // }
            pages.push(
                <PaginationItem
                    key={i}
                    number={i}
                    isActive={currentPage === i}
                    onClick={() => onPageChange(i)}
                />
            );
        }

        if (startPage > 1) {
            pages.unshift(
                <div
                    key="start-ellipsis"
                    className="flex w-[52px] h-[52px] rounded-full border border-black opacity-15 justify-center items-center"
                >
                    ...
                </div>
            );
        }

        if (endPage < totalPages) {
            pages.push(
                <div
                    key="end-ellipsis"
                    className="flex w-[52px] h-[52px] rounded-full border border-black opacity-15 justify-center items-center"
                >
                    ...
                </div>
            );
        }

        return pages;
    };

    return (
        <nav aria-label="Pagination navigation" className="mb-[120px]">
            <div className="flex gap-4 justify-center items-center mt-20 text-base font-medium tracking-wide text-center text-blue-800 whitespace-nowrap max-md:mt-10">
                <button
                    className="flex w-[52px] h-[52px] rounded-full border border-black opacity-15 justify-center items-center"
                    onClick={handlePrevious}
                    aria-label="Previous page"
                    disabled={currentPage === 1}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/2de423749e642867f9234165a24938928b2cdf9588d343cd6065b87c0140930f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </button>
                <div className="flex gap-2 items-end self-stretch my-auto">
                    <PaginationItem
                        key={1}
                        number={1}
                        isActive={currentPage === 1}
                        onClick={() => onPageChange(1)}
                    />
                    {renderPageNumbers()}
                    <PaginationItem
                        key={totalPages}
                        number={totalPages}
                        isActive={currentPage === totalPages}
                        onClick={() => onPageChange(totalPages)}
                    />
                </div>
                <button
                    className="flex w-[52px] h-[52px] rounded-full border border-black opacity-15 justify-center items-center"
                    onClick={handleNext}
                    aria-label="Next page"
                    disabled={currentPage === totalPages}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/32e251b14d565c4eb407dc8336096dd9c021e5846afae8e292102cae656ec431?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                </button>
            </div>
        </nav>
    );
};
