import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';

export default function UserRules() {
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px]  px-[40px] max-sm:px-4 mb-[100px]  mt-6">
                <div className="">
                    <BreadCump />
                    <h3 className="text-[40px] font-semibold   max-sm:text-[32px] mt-[28px] mb-[40px]">
                        Qaydalar və şərtlər{' '}
                    </h3>{' '}
                </div>

                <section className="px-[28px] w-full bg-[#F8F8F8] py-[40px] rounded-[20px]  max-sm:px-4 max-sm:py-5">
                    description
                </section>
            </main>
            <Footer />
        </div>
    );
}
