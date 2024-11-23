import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';

export default function DeliveryRules() {
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px] mt-0 px-[40px] mb-[100px]">
                <div className="">
                    <BreadCump />
                    <h3 className="text-[40px] font-semibold mt-[28px] mb-[40px]">
                        Qaydalar və şərtlər{' '}
                    </h3>{' '}
                </div>

                <section className="px-[28px] w-full bg-[#F8F8F8] py-[40px] rounded-[20px]  ">
                    description
                </section>
            </main>
            <Footer />
        </div>
    );
}
