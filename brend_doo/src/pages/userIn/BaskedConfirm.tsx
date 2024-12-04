import { BreadCump } from '../../components/BroadCump';
import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import BaskedForum from '../../components/Basked';

export default function BaskedConfirm() {
    return (
        <div>
            <Header />
            <main className="mt-0">
                <div className="px-[40px] pt-[40px] mb-[28px]">
                    <BreadCump />
                </div>
                <section className="px-[28px]">
                    <h3 className="text-[40px] font-semibold mt-[28px] mb-[40px]">
                        Brendlər{' '}
                    </h3>{' '}
                </section>
                <section className="flex lg:flex-row flex-col  h-fit px-[40px] justify-between mb-[100px] gap-[65px]">
                    <BaskedForum />
                    <div className="w-[2px] h-[500px] bg-black lg:block hidden  opacity-10" />
                    <div className="flex flex-col rounded-3xl min-w-[306px]">
                        <div className="flex overflow-hidden flex-col justify-center p-7 w-full rounded-3xl bg-stone-50">
                            <div className="flex flex-col">
                                <div className="text-base font-semibold text-black">
                                    Ümumi sifariş
                                </div>
                                <div className="flex flex-col mt-6 w-full">
                                    <div className="flex flex-col w-full">
                                        <div className="flex flex-col w-full text-sm">
                                            <div className="flex gap-10 justify-between items-center w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    Məbləğ:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    250 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full">
                                                <div className="self-stretch my-auto text-black text-opacity-60">
                                                    Çatdırılma:
                                                </div>
                                                <div className="self-stretch my-auto text-right text-black">
                                                    5 AZN
                                                </div>
                                            </div>
                                            <div className="flex gap-10 justify-between items-center mt-4 w-full text-rose-500">
                                                <div className="self-stretch my-auto">
                                                    Endirim
                                                </div>
                                                <div className="self-stretch my-auto text-right">
                                                    5 AZN
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3 w-full border border-solid border-zinc-300 min-h-[1px]" />
                                        <div className="flex gap-10 justify-between items-center mt-3">
                                            <div className="self-stretch my-auto text-sm text-black text-opacity-80">
                                                Cəmi məbləğ:
                                            </div>
                                            <div className="self-stretch my-auto text-base font-semibold text-blue-600">
                                                260 AZN
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex overflow-hidden flex-col justify-center items-center px-16 py-3.5 mt-6 w-full text-base font-medium text-white bg-[#3873C3] rounded-[100px]">
                                        <div className="gap-2 self-stretch">
                                            Ödəniş et
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex overflow-hidden flex-col justify-center p-7 mt-5 w-full rounded-3xl bg-stone-50">
                            <div className="flex flex-col">
                                <div className="text-base font-medium text-black">
                                    Kuponu daxil et
                                </div>
                                <div className="flex flex-col mt-5 w-full text-sm">
                                    <input
                                        type="text"
                                        placeholder="Kupon"
                                        className="overflow-hidden px-4 py-3.5 w-full whitespace-nowrap bg-white rounded-[100px] text-black text-opacity-60"
                                    />
                                    <button className="gap-2.5 self-stretch px-10 py-4 mt-3 w-full font-medium text-black border border-solid bg-[#B1C7E4] border-[#B1C7E4] rounded-[100px]">
                                        Təsdiq et
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
