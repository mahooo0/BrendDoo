import Header from '../components/Header';
import { Footer } from '../components/Footer';
import { BreadCump } from '../components/BroadCump';
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
            <main className=" lg:mt-[40px] mt-0 max-sm:mb-10 mb-[100px]">
                <div className="px-[40px] max-sm:px-4">
                    <BreadCump />
                </div>

                <section className="px-[40px] max-sm:px-4">
                    <h3 className="text-[40px] max-sm:text-[32px] font-semibold mt-[28px] mb-[40px]">
                        Brendlər{' '}
                    </h3>{' '}
                    <AlphabeticalList letters={russianAlphabet} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
