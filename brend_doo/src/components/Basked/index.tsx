import { useState } from 'react';

export default function BaskedForum() {
    const [checkbox1, setcheckbox1] = useState<boolean>(false);
    const [checkbox2, setcheckbox2] = useState<boolean>(false);
    const [checkbox3, setcheckbox3] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    return (
        <div>
            {' '}
            <div className="flex overflow-hidden flex-col justify-center p-10 rounded-3xl bg-stone-50 lg:w-[100%] w-full max-md:px-5">
                <div className="flex flex-col max-md:max-w-full">
                    {/* Personal Information Section */}
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="text-sm text-black text-opacity-60 max-md:max-w-full">
                            Şəxsi məlumatlarım
                        </div>
                        <div className="flex flex-col mt-5 w-full text-base text-black max-md:max-w-full">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="İlahə Nəzərova"
                                className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]"
                            />
                            {/* Email and Phone Inputs */}
                            <div className="flex lg:flex-row flex-col gap-5 items-center mt-5 max-md:max-w-full">
                                <input
                                    type="email"
                                    placeholder="Email@gmail.com"
                                    className="overflow-hidden self-stretch px-5 py-5 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[388px] w-full"
                                />
                                <input
                                    type="tel"
                                    placeholder="+994 00 000 00 00"
                                    className="overflow-hidden self-stretch px-5 py-5 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-[388px] w-full"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setPhoneNumber(
                                            value.startsWith('+994')
                                                ? value
                                                : '+994' + value
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />

                    {/* Delivery Type Section */}
                    <div className="flex flex-col mt-7 w-full max-md:max-w-full">
                        <div className="text-sm text-black text-opacity-60">
                            Çatdırılma növü
                        </div>
                        <div className="flex gap-7 items-start mt-5 w-full text-base text-blue-600">
                            {/* Checkbox 1 */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    style={{ display: 'none' }}
                                    className="appearance-none w-5 h-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600"
                                />
                                <div
                                    className="flex bg-white overflow-hidden flex-1 shrink gap-10 justify-center items-center px-5 py-4 w-full border border-solid basis-0 border-slate-300 min-w-[240px] rounded-[100px]"
                                    onClick={() =>
                                        setcheckbox1((prew) => !prew)
                                    }
                                >
                                    <div className="flex gap-3 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a7f7f4df3a62fc2ea5546ac2a2346f184c16e3fb8fd191155a7d41987a2fae?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-7 rounded aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            Ünvana çatdırılma
                                        </div>
                                    </div>
                                    {/* checked */}
                                    {checkbox1 ? (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_251_3302)">
                                                <path
                                                    d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM15.707 9.29289C15.5348 9.12072 15.3057 9.01729 15.0627 9.002C14.8197 8.98672 14.5794 9.06064 14.387 9.20989L14.293 9.29289L11 12.5849L9.707 11.2929L9.613 11.2099C9.42058 11.0607 9.18037 10.9869 8.9374 11.0022C8.69444 11.0176 8.46541 11.121 8.29326 11.2932C8.12112 11.4653 8.01768 11.6943 8.00235 11.9373C7.98702 12.1803 8.06086 12.4205 8.21 12.6129L8.293 12.7069L10.293 14.7069L10.387 14.7899C10.5624 14.926 10.778 14.9998 11 14.9998C11.222 14.9998 11.4376 14.926 11.613 14.7899L11.707 14.7069L15.707 10.7069L15.79 10.6129C15.9393 10.4205 16.0132 10.1802 15.9979 9.93721C15.9826 9.69419 15.8792 9.46509 15.707 9.29289Z"
                                                    fill="#3873C3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_251_3302">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15"></div>
                                    )}

                                    {/* unchecked */}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 w-full text-base max-md:max-w-full">
                        <input
                            placeholder="Ünvan"
                            className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[200px]"
                        />
                        <textarea
                            placeholder="Əlavə məlumat"
                            className="overflow-hidden px-5 pt-5 pb-24 w-full bg-white rounded-3xl border border-solid border-black border-opacity-10 max-md:pb-28 mt-3 text-black text-opacity-60"
                        />
                    </div>
                    <div className="mt-7 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />

                    {/* Payment Type Section */}
                    <div className="flex flex-col mt-7 w-full max-md:max-w-full">
                        <div className="text-sm text-black text-opacity-60">
                            Ödəniş növü
                        </div>
                        <div className="flex flex-wrap gap-5 items-center mt-5 text-base max-md:max-w-full">
                            {/* Checkbox 2 */}

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    style={{ display: 'none' }}
                                    className="appearance-none w-5 h-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600"
                                />
                                <div
                                    className="flex overflow-hidden flex-1 shrink gap-10 justify-center items-center px-5 py-4 w-full border border-solid basis-0 bg-white border-slate-300 min-w-[240px] rounded-[100px]"
                                    onClick={() =>
                                        setcheckbox2((prew) => !prew)
                                    }
                                >
                                    <div className="flex gap-3 items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4470c8baa73cdef119fec837b353924288690d140a841f7625691bb69f871938?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            Ünvana çatdırılma
                                        </div>
                                    </div>
                                    {/* checked */}
                                    {checkbox2 ? (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_251_3302)">
                                                <path
                                                    d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM15.707 9.29289C15.5348 9.12072 15.3057 9.01729 15.0627 9.002C14.8197 8.98672 14.5794 9.06064 14.387 9.20989L14.293 9.29289L11 12.5849L9.707 11.2929L9.613 11.2099C9.42058 11.0607 9.18037 10.9869 8.9374 11.0022C8.69444 11.0176 8.46541 11.121 8.29326 11.2932C8.12112 11.4653 8.01768 11.6943 8.00235 11.9373C7.98702 12.1803 8.06086 12.4205 8.21 12.6129L8.293 12.7069L10.293 14.7069L10.387 14.7899C10.5624 14.926 10.778 14.9998 11 14.9998C11.222 14.9998 11.4376 14.926 11.613 14.7899L11.707 14.7069L15.707 10.7069L15.79 10.6129C15.9393 10.4205 16.0132 10.1802 15.9979 9.93721C15.9826 9.69419 15.8792 9.46509 15.707 9.29289Z"
                                                    fill="#3873C3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_251_3302">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15"></div>
                                    )}

                                    {/* unchecked */}
                                </div>
                            </label>
                            {/* Checkbox 3 */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    style={{ display: 'none' }}
                                    className="appearance-none w-5 h-5 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600"
                                />
                                <div
                                    className="flex bg-white overflow-hidden flex-1 shrink gap-10 justify-center items-center px-5 py-4 w-full border border-solid basis-0 border-slate-300 min-w-[240px] rounded-[100px]"
                                    onClick={() =>
                                        setcheckbox3((prew) => !prew)
                                    }
                                >
                                    <div className="flex gap-3  items-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f60eea4ee162ee2b5c7808ce1ebc60e48a0e5052b9462924149ca80f8329d06?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            Ünvana çatdırılma
                                        </div>
                                    </div>
                                    {/* checked */}
                                    {checkbox3 ? (
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_251_3302)">
                                                <path
                                                    d="M17 3.33989C18.5083 4.21075 19.7629 5.46042 20.6398 6.96519C21.5167 8.46997 21.9854 10.1777 21.9994 11.9192C22.0135 13.6608 21.5725 15.3758 20.72 16.8946C19.8676 18.4133 18.6332 19.6831 17.1392 20.5782C15.6452 21.4733 13.9434 21.9627 12.2021 21.998C10.4608 22.0332 8.74055 21.6131 7.21155 20.7791C5.68256 19.9452 4.39787 18.7264 3.48467 17.2434C2.57146 15.7604 2.06141 14.0646 2.005 12.3239L2 11.9999L2.005 11.6759C2.061 9.94888 2.56355 8.26585 3.46364 6.79089C4.36373 5.31592 5.63065 4.09934 7.14089 3.25977C8.65113 2.42021 10.3531 1.98629 12.081 2.00033C13.8089 2.01437 15.5036 2.47589 17 3.33989ZM15.707 9.29289C15.5348 9.12072 15.3057 9.01729 15.0627 9.002C14.8197 8.98672 14.5794 9.06064 14.387 9.20989L14.293 9.29289L11 12.5849L9.707 11.2929L9.613 11.2099C9.42058 11.0607 9.18037 10.9869 8.9374 11.0022C8.69444 11.0176 8.46541 11.121 8.29326 11.2932C8.12112 11.4653 8.01768 11.6943 8.00235 11.9373C7.98702 12.1803 8.06086 12.4205 8.21 12.6129L8.293 12.7069L10.293 14.7069L10.387 14.7899C10.5624 14.926 10.778 14.9998 11 14.9998C11.222 14.9998 11.4376 14.926 11.613 14.7899L11.707 14.7069L15.707 10.7069L15.79 10.6129C15.9393 10.4205 16.0132 10.1802 15.9979 9.93721C15.9826 9.69419 15.8792 9.46509 15.707 9.29289Z"
                                                    fill="#3873C3"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_251_3302">
                                                    <rect
                                                        width="24"
                                                        height="24"
                                                        fill="white"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15"></div>
                                    )}

                                    {/* unchecked */}
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
