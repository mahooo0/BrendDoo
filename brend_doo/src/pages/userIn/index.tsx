import Header from '../../components/Header';
import UserAside from '../../components/userAside';

export default function UserSettings() {
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex flex-row w-full gap-5 p-5">
                <UserAside active={0} />
                <div className="flex overflow-hidden flex-col px-10 pt-10 pb-96 min-w-[230px] rounded-3xl bg-stone-50 max-md:px-5 max-md:pb-24 w-full">
                    <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-[84%]">
                        <div className="text-3xl font-semibold text-black">
                            Tənzimləmələr
                        </div>
                        <button className="gap-2 self-stretch py-0.5 my-auto text-base font-medium text-blue-600 border-b border-solid border-b-blue-600">
                            Email adresini dəyiş
                        </button>
                    </div>

                    <div className="flex flex-col mt-10 w-full text-base text-black text-opacity-90 max-md:max-w-[84%]">
                        <div className="flex flex-wrap gap-3 items-center w-full max-md:max-w-[84%]">
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <input
                                    type="text"
                                    placeholder="İlahə Nəzərova"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]"
                                />
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <input
                                    type="email"
                                    placeholder="Email@gmail.com"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center mt-3 w-full max-md:max-w-[84%]">
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <input
                                    type="tel"
                                    placeholder="+994 00 000 00 00"
                                    className="overflow-hidden px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]"
                                />
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <input
                                    type="password"
                                    placeholder="Mövcud şifrə"
                                    className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center mt-3 w-full text-black text-opacity-60 max-md:max-w-[84%]">
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]">
                                    <input
                                        type="password"
                                        placeholder="Yeni şifrə"
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a2d6313282ad0dad6f5ee25ed9ddce348533e0fa5af25929ee26e805284b62?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-6 aspect-square"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[370px] max-md:max-w-[84%]">
                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px] max-md:max-w-[84%]">
                                    <input
                                        type="password"
                                        placeholder="Şifrənin təkrarı"
                                        className="flex-1 bg-transparent outline-none"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1683383ca38d6284c9e88e35974380fe852fb1ae8f759fbdc9eefa437a9cabff?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 w-6 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="gap-2.5 self-start px-10 py-4 mt-7 text-base font-medium text-black border border-solid bg-slate-300 border-slate-300 rounded-[100px] max-md:px-5">
                        Yadda saxla
                    </button>
                </div>
            </main>
        </div>
    );
}
