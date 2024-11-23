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
                        className="w-full h-[500px] bg-cover bg-center flex items-center justify-end"
                        style={{
                            backgroundImage: `url("https://s3-alpha-sig.figma.com/img/03d2/47b7/389aec573f263f50b99f617dc9179cdc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VeC5-e87DqbWyRKTCqX1WXN-MBupxYSE38nzh-x9Y89GnUVyT82IZECTSYwZGen1UdY5DhXLQDoE3jJoUGQG3l~SPuPe9HcuHfUV5x0jqpyjyI8tmsf50Ip-GhbAh1Xfq8l5MS3P-PqR1pZN3GzprZsdwi9vzI0Zfl0nAY40n62kXJnQwJVJyeRFuqYQJ4eWikquBUwfzoH-iCodPzDeGCZU1CtGripWvy2cbWFLIbfBsE9GEpmS-uC7crBy1fKPin7xfZhPZWnWXQQ5dHIZjUk9rod26OGCA1sW~Zc93-VPIZkM7KRQJOYmzU33HiHRulvfZyIMDiumLtYrbKBkiQ__")`,
                        }}
                    >
                        <h1 className="text-4xl font-bold text-[#081D39] max-w-[680px] text-wrap: pr-[100px]">
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
                <FAQSection Title="ssss" />
            </main>
            <Footer />
        </div>
    );
}
