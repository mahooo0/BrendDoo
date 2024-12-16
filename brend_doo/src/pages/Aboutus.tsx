import Header from '../components/Header';
import { Footer } from '../components/Footer';
import FAQSection from '../components/Faq';
import { BreadCump } from '../components/BroadCump';

export default function Aboutus() {
    return (
        <div>
            <Header />
            <main className=" mt-0">
                <div className="px-[40px] pt-[40px] mb-[28px]">
                    <BreadCump />
                </div>
                <section className="mb-[100px]">
                    <div
                        className="w-full h-[500px] bg-cover bg-center flex items-center lg:justify-start justify-center "
                        style={{
                            backgroundImage: `url("https://s3-alpha-sig.figma.com/img/03d2/47b7/389aec573f263f50b99f617dc9179cdc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GmqOdCOiArs1ztUovwJcY24lXGzVhEh05tq2UpxqMQbZfOf9E7qqspdOY6bXxueefW2fE5BWBrjWVVJZkaneoLi3kT1L~q-63YccFJWilRywTITbdpElsDY2EVdM8l8I8NaYKnC4pEsIyF1AJ-hFToJguVq4QFnHypNzTqNoPxQhoqDc~~-zfbpSeNJHMMUf~hIhSYB~k6QTZcplkQspr9SUyNaHMHcUZBulAM5-VLOb-w3TRhnwJwvk~Ey5l1De-V48K0ooL5o8fgB1e8rJMwjyQq6Geeiwd1sZT4CpJMrc7B3BWEDBN-UGJ1kHhU98ez2zPiMm1RkhF3pG0tjp9g__")`,
                        }}
                    >
                        <h1 className="text-[40px] lg:ml-[50%] font-bold text-[#081D39] lg:w-[60%] w-[80%]  lg:pr-[100px]">
                            “Brendo MMC” şirkəti olaraq hər zaman güvənli
                            alış-ceriş təklif edirik!{' '}
                        </h1>
                    </div>

                    <div className="mx-[40px] mt-[40px]">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Iure, voluptatibus distinctio qui dicta
                            temporibus magni hic ipsum suscipit nemo ullam
                            delectus repellat eveniet, nam ratione quisquam.
                            Dolores, nulla rerum! Maxime!
                        </p>
                    </div>
                </section>
                <FAQSection Title="Tez-tez verilən suallar" />
            </main>
            <Footer />
        </div>
    );
}
