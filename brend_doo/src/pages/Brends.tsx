import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
import CommentsSection from '../components/Comments';
import ProductCard from '../components/ProductCArd';
import AlphabeticalList from '../components/AlphabeticalList';

export default function Brends() {
    const russianAlphabet = [
        'А',
        'Б',
        'В',
        'Г',
        'Д',
        'Е',
        'Ё',
        'Ж',
        'З',
        'И',
        'Й',
        'К',
        'Л',
        'М',
        'Н',
        'О',
        'П',
        'Р',
        'С',
        'Т',
        'У',
        'Ф',
        'Х',
        'Ц',
        'Ч',
        'Ш',
        'Щ',
        'Ъ',
        'Ы',
        'Ь',
        'Э',
        'Ю',
        'Я',
    ];
    return (
        <div className="">
            <Header />
            <main className=" lg:mt-[220px] mt-0">
                <div className="px-[40px]">
                    <BreadCump />
                </div>

                <section className="px-[28px]">
                    <h3 className="text-[40px] font-semibold mt-[28px] mb-[40px]">
                        Brendlər{' '}
                    </h3>{' '}
                    <AlphabeticalList letters={russianAlphabet} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
