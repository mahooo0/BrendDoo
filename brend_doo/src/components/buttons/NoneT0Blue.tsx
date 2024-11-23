import React, { ReactNode } from 'react';

interface NoneToBlueProps {
    children: ReactNode;
    isactive?: boolean;
}

const NoneToBlue: React.FC<NoneToBlueProps> = ({
    children,
    isactive = false,
}) => {
    return (
        <button
            className={`rounded-[100px] duration-300 ${
                isactive ? 'bg-[#3873C3] text-white ' : 'bg-none'
            }  px-[28px] py-[14px] border border-black border-opacity-10`}
        >
            {children}
        </button>
    );
};
export const NoneTolightBlue = ({
    children,
    isactive = false,
}: {
    isactive?: boolean;
    children: ReactNode;
}) => {
    return (
        <button
            className={`rounded-[100px] duration-300 ${
                isactive ? 'bg-[#B1C7E4]' : ''
            } hover:text-black bg-none px-[28px] py-[14px] border text-[16px] border-black border-opacity-10`}
        >
            {children}
        </button>
    );
};
export default NoneToBlue;
