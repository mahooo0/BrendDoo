import Header from '../../components/Header';
import UserAside from '../../components/userAside';
import ProductCard from '../../components/ProductCArd';

export default function UserLiked() {
    return (
        <div>
            <Header />
            {/* <div className="mt-[180px]" /> */}
            <main className="flex max-sm:flex-col flex-row w-full gap-5 p-5">
                <UserAside active={2} />
                <div className="w-full rounded-[20px] bg-[#F8F8F8] lg:p-[40px] px-4 py-10">
                    <h1 className="text-[28px] font-semibold mb-[40px]">
                        Bəyəndiklərim
                    </h1>
                    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center w-full gap-5 ">
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                        <ProductCard bg="white" />
                    </div>
                </div>
            </main>
        </div>
    );
}
