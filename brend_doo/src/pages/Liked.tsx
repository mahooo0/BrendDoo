import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import ProductCard from '../components/ProductCArd';

export default function Liked() {
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[40px] mt-0">
                <div className="px-[40px] max-sm:px-4">
                    <BreadCump />
                </div>

                <section className="lg:px-[40px] px-4">
                    <h3 className="text-[40px] font-semibold mt-[28px]">
                        Bəyəndiklərim{' '}
                    </h3>{' '}
                    <div className="grid justify-self-center max-sm:w-full gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-[100px] mt-[40px]">
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                        <ProductCard bg="grey" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
