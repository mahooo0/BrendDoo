import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import ProductCard from '../components/ProductCArd';

export default function UserRules() {
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[220px] mt-0">
                <div className="px-[40px]">
                    <BreadCump />
                    <h3 className="text-[40px] font-semibold mt-[28px] mb-[40px]">
                        Qaydalar və şərtlər{' '}
                    </h3>{' '}
                </div>

                <section className="px-[28px] w-full bg-[#F8F8F8] py-[40px] rounded-[20px] mx-[40px]">
                    description
                </section>
            </main>
            <Footer />
        </div>
    );
}
