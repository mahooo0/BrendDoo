import React, { ReactNode } from 'react';

interface NoneToBlueProps {
    children: ReactNode;
}

const NoneToBlue: React.FC<NoneToBlueProps> = ({ children }) => {
    return (
        <button className="rounded-[100px] duration-300 hover:bg-[#3873C3] hover:text-white bg-none px-[28px] py-[14px] border border-black border-opacity-10">
            {children}
        </button>
    );
};

export default NoneToBlue;
