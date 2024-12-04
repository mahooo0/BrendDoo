import { useState } from 'react';
import Header from '../../components/Header';
import UserAside from '../../components/userAside';

export default function UserSettings() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex flex-row w-full gap-5 p-5">
                <UserAside active={0} />
                <div className="flex overflow-hidden flex-col   lg:px-10 px-4 pt-10 pb-96 min-w-[230px] rounded-3xl bg-[#F8F8F8]  max-md:pb-24 w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full ">
                        <div className="text-3xl font-semibold text-black">
                            Tənzimləmələr
                        </div>
                        <button className="gap-2 self-stretch py-0.5 my-auto text-base font-medium text-blue-600 border-b border-solid border-b-blue-600">
                            Email adresini dəyiş
                        </button>
                    </div>

                    <div className="flex flex-col mt-10 w-full text-base text-black text-opacity-90 ">
                        <div className="flex flex-wrap gap-3 items-center w-full ">
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <input
                                    type="text"
                                    placeholder="İlahə Nəzərova"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] "
                                />
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <input
                                    type="email"
                                    placeholder="Email@gmail.com"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] "
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center mt-3 w-full ">
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <input
                                    type="tel"
                                    placeholder="+994 00 000 00 00"
                                    className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] "
                                />
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <input
                                    type="password"
                                    placeholder="Mövcud şifrə"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] "
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center mt-3 w-full text-black text-opacity-60 ">
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                    <input
                                        type={
                                            !showPassword ? 'password' : 'text'
                                        }
                                        placeholder="Yeni şifrə"
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <img
                                        loading="lazy"
                                        src={
                                            !showPassword
                                                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                : '/svg/closedaye.svg'
                                        }
                                        className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto lg:min-w-[240px] lg:w-[370px] md:w-[370px] w-full ">
                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] ">
                                    <input
                                        type={
                                            showPassword2 ? 'password' : 'text'
                                        }
                                        placeholder="Şifrənin təkrarı"
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <img
                                        loading="lazy"
                                        src={
                                            showPassword2
                                                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                : '/svg/closedaye.svg'
                                        }
                                        className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
                                        onClick={() =>
                                            setShowPassword2(!showPassword2)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="gap-2.5 self-start px-10 py-4 mt-7 lg:w-fit w-full text-base font-medium text-black border border-solid bg-[#B1C7E4] border-[#B1C7E4] rounded-[100px] max-md:px-5">
                        Yadda saxla
                    </button>
                </div>
            </main>
        </div>
    );
}
