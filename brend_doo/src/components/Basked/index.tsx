import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import { Store, TranslationsKeys } from '../../setting/Types';

export default function BaskedForum({
    Name,
    Email,
    Number,
    onSubmit,
}: {
    Name: string;
    Email: string;
    Number: string;
    onSubmit: (valiues: any) => void;
}) {
    const [checkbox1, setcheckbox1] = useState<boolean>(false);
    const [checkbox2, setcheckbox2] = useState<boolean>(false);
    const [checkbox3, setcheckbox3] = useState<boolean>(true);
    const { lang = 'ru' } = useParams<{ lang: string }>();

    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const { data: shops } = GETRequest<Store[]>(`/shops`, 'shops', [lang]);
    return (
        <div className="flex overflow-hidden flex-col justify-center p-10 rounded-3xl bg-stone-50 lg:w-[70%] w-full max-md:px-5 max-sm:px-2">
            <div className="flex flex-col max-md:max-w-full">
                {/* Personal Information Section */}
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="text-sm text-black text-opacity-60 max-md:max-w-full">
                        {tarnslation?.Şəxsi_məlumatlarım}
                    </div>
                    <div className="flex flex-col mt-5 w-full text-base text-black max-md:max-w-full">
                        {/* Name Input */}
                        {/* <input
                            type="text"
                            placeholder="İlahə Nəzərova"
                            className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]"
                        /> */}
                        <div className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[100px]">
                            {Name}
                        </div>
                        {/* Email and Phone Inputs */}
                        <div className="flex lg:flex-row flex-col gap-5 items-center mt-5 max-md:max-w-full">
                            <div className="overflow-hidden self-stretch px-5 py-5 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-1/2 w-full">
                                {Email}
                            </div>
                            {/* <input type="email" placeholder="Email@gmail.com" /> */}
                            <div className="overflow-hidden self-stretch px-5 py-5 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-1/2 w-full">
                                +7 {Number}
                            </div>
                            {/* <input
                                type="tel"
                                placeholder="+994 00 000 00 00"
                                className="overflow-hidden self-stretch px-5 py-5 my-auto bg-white border border-solid border-black border-opacity-10 min-w-[240px] rounded-[100px] lg:w-1/2 w-full"
                                value={phoneNumber}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setPhoneNumber(
                                        value.startsWith('+994')
                                            ? value
                                            : '+994' + value
                                    );
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
                <div className="mt-7 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />

                {/* Delivery Type Section */}
                <Formik
                    initialValues={{
                        deliveryType: checkbox1,
                        address: '',
                        additionalInfo: '',
                        paymentType: false,
                    }}
                    onSubmit={(values) => {
                        const NewWalue = values;
                        NewWalue.deliveryType = checkbox1;
                        NewWalue.paymentType = checkbox2;

                        console.log('Form values:', NewWalue);
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form
                            className="flex flex-col mt-7 w-full max-md:max-w-full"
                            onChange={() => {
                                const NewWalue = values;
                                NewWalue.deliveryType = checkbox1;
                                NewWalue.paymentType = checkbox2;

                                console.log('Form values:', NewWalue);
                                onSubmit(NewWalue);
                            }}
                        >
                            {/* Delivery Type Section */}
                            <div className="text-sm text-black text-opacity-60">
                                {tarnslation?.Çatdırılma_növü}
                            </div>
                            <div className="flex gap-7 items-start mt-5 w-full text-base text-blue-600">
                                <label className="flex items-center gap-3 cursor-pointer lg:w-1/2 w-full">
                                    <Field
                                        type="checkbox"
                                        name="deliveryType"
                                        value="homeDelivery"
                                        className="hidden"
                                    />
                                    <div
                                        className={`flex bg-white lg:w-1/2 overflow-hidden flex-1 shrink gap-10 justify-between items-center px-5 py-4 w-full border border-solid basis-0 border-slate-300 min-w-[240px] rounded-[100px] `}
                                        onClick={() => {
                                            setcheckbox1((prew) => !prew);
                                            setFieldValue('address', '');
                                        }}
                                    >
                                        <div className="flex gap-3 items-center">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a7f7f4df3a62fc2ea5546ac2a2346f184c16e3fb8fd191155a7d41987a2fae"
                                                className="object-contain shrink-0 self-stretch my-auto w-7 rounded aspect-square"
                                            />
                                            <div className="self-stretch my-auto">
                                                {tarnslation?.Ünvana_çatdırılma}
                                            </div>
                                        </div>
                                        {!checkbox1 ? (
                                            <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 "></div>
                                        ) : (
                                            <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 bg-blue-600"></div>
                                        )}
                                    </div>
                                </label>
                            </div>

                            {/* Address Input */}
                            {checkbox1 ? (
                                <div className="flex flex-col mt-5 w-full text-base max-md:max-w-full">
                                    <Field
                                        name="address"
                                        placeholder={tarnslation?.Ünvan}
                                        className="overflow-hidden px-5 py-5 w-full bg-white border border-solid border-black border-opacity-10 rounded-[200px]"
                                    />
                                    <Field
                                        name="additionalInfo"
                                        as="textarea"
                                        placeholder={tarnslation?.Əlavə_məlumat}
                                        className="overflow-hidden px-5 pt-5 pb-24 w-full bg-white rounded-3xl border border-solid border-black border-opacity-10 max-md:pb-28 mt-3 text-black text-opacity-60"
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-col mt-5 w-full text-base max-md:max-w-full">
                                    <div className="overflow-hidden px-5  w-full bg-white border border-solid border-black border-opacity-10 rounded-[200px]">
                                        <Field
                                            as="select"
                                            name="address"
                                            className="overflow-hidden py-5 w-full bg-white  focus:border-none focus:outline-none h-full "
                                        >
                                            {/* <option value="" disabled hidden>
                                                Ünvan
                                            </option> */}

                                            {shops?.map((shop) => (
                                                <option
                                                    key={shop.id}
                                                    value={shop.title}
                                                >
                                                    {shop.title}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                </div>
                            )}
                            <div className="mt-7 w-full min-h-0 border border-solid border-black border-opacity-10 max-md:max-w-full" />

                            {/* Payment Type Section */}
                            <div className="flex flex-col mt-7 w-full max-md:max-w-full">
                                <div className="text-sm text-black text-opacity-60">
                                    {tarnslation?.Ödəniş_növü}
                                </div>
                                <div className="flex lg:flex-row flex-col gap-5 items-center mt-5 text-base max-md:max-w-full">
                                    {' '}
                                    <label className="flex lg:w-[50%] w-full items-center gap-3 cursor-pointer">
                                        <Field
                                            type="checkbox"
                                            name="paymentType"
                                            value="delivery"
                                            className="hidden"
                                        />
                                        <div
                                            className={`flex bg-white overflow-hidden flex-1 shrink gap-10 justify-between items-center px-5 py-4 w-full border border-solid basis-0 border-slate-300 min-w-[240px] rounded-[100px] `}
                                            onClick={() => {
                                                setFieldValue(
                                                    'paymentType',

                                                    'Card'
                                                );
                                                setcheckbox2((prew) => !prew);
                                                setcheckbox3(false);
                                            }}
                                        >
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f60eea4ee162ee2b5c7808ce1ebc60e48a0e5052b9462924149ca80f8329d06?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    {tarnslation?.Card}{' '}
                                                </div>
                                            </div>
                                            {!checkbox2 ? (
                                                <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 "></div>
                                            ) : (
                                                <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 bg-blue-600"></div>
                                            )}
                                        </div>
                                    </label>
                                    <label className="flex lg:w-[50%] w-full items-center gap-3 cursor-pointer">
                                        <Field
                                            type="checkbox"
                                            name="paymentType"
                                            value="cash"
                                            className="hidden"
                                        />
                                        <div
                                            className={`flex overflow-hidden flex-1 shrink gap-10 justify-between items-center px-5 py-4 w-full border border-solid basis-0 bg-white border-slate-300 min-w-[240px] rounded-[100px] `}
                                            onClick={() => {
                                                setFieldValue(
                                                    'paymentType',
                                                    'cash'
                                                );
                                                setcheckbox3((prew) => !prew);
                                                setcheckbox2(false);
                                            }}
                                        >
                                            <div className="flex gap-3 items-center">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4470c8baa73cdef119fec837b353924288690d140a841f7625691bb69f871938"
                                                    className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    {tarnslation?.Nağd_ödəniş}
                                                </div>
                                            </div>
                                            {!checkbox3 ? (
                                                <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 "></div>
                                            ) : (
                                                <div className="w-[20px] h-[20px] rounded-full border border-black border-opacity-15 bg-blue-600"></div>
                                            )}
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Submit Button */}
                            {/* <button
                                type="submit"
                                className="mt-7 px-5 py-2 bg-blue-600 text-white rounded-[100px]"
                            >
                                Göndər
                            </button> */}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
