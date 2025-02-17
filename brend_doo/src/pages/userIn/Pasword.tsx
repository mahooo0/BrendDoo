import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import GETRequest from '../../setting/Request';
import { TranslationsKeys } from '../../setting/Types';
import axios from 'axios';
import toast from 'react-hot-toast';
import ROUTES from '../../setting/routes';

export default function Password() {
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState<{
        message: string;
        success: boolean;
    } | null>(null);

    const initialValues = {
        email: '',
        // password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        // password: Yup.string()
        //     .min(6, 'Password must be at least 6 characters')
        //     .required('Password is required'),
    });
    const navigate = useNavigate();
    const { lang } = useParams<{ lang: string }>() || { lang: 'ru' };
    const { data: registerImage } = GETRequest<{ image: string }>(
        `/registerImage`,
        'registerImage',
        [lang]
    );
    const handleSubmit = async (values: { email: string }) => {
        setLoading(true);
        setFormStatus(null); // Reset status message
        await axios
            .post('https://brendo.avtoicare.az/api/password-reset/request', {
                email: values.email,
            })
            .then(() => {
                toast.success('code sucsesfully send to your email');
                setFormStatus(null);
                setLoading(false);
                localStorage.setItem('EmailForReset', values.email);
                navigate(
                    `/${lang}/${
                        ROUTES.resetPaswordSucses[
                            lang as keyof typeof ROUTES.resetPaswordSucses
                        ]
                    }`
                );
            })
            .catch(() => {
                toast.error('some thing get wrong ');
            });
    };

    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <div className="flex relative flex-col w-full h-[100vh] max-md:max-w-full justify-center items-center px-[40px]">
                <img
                    loading="lazy"
                    src={registerImage?.image}
                    className="object-cover absolute inset-0 size-full"
                />
                <div
                    onClick={() => navigate(-1)}
                    className="rounded-full bg-white w-[56px] h-[56px] bg-opacity-60 z-50 absolute top-10 left-10"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d01662ce302f4f64e209cc8ecd0540b6f0e5fb3d4ccd79eead1b316a272d11?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain w-14 aspect-square rounded-full"
                    />
                </div>

                <div className="flex overflow-hidden relative flex-col justify-center self-center p-16 mb-0 max-w-full rounded-3xl bg-white bg-opacity-20 w-[560px] max-md:px-5 max-md:mb-2.5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col items-center self-center text-center">
                            <div className="text-3xl font-bold text-white">
                                {tarnslation?.Şifrənin_bərpası!}
                            </div>
                            <div className="mt-3 text-base text-white text-opacity-80">
                                {tarnslation?.Şifrəni_bərpa_etmək!}
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10 w-full max-md:max-w-full">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="flex flex-col self-stretch mt-7 w-full max-md:max-w-full">
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <div className="overflow-hidden px-5 py-5 w-full text-base bg-white border border-solid border-black border-opacity-10 rounded-full text-black text-opacity-60 max-md:max-w-full">
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="w-full bg-transparent outline-none"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 text-sm mt-1"
                                            />
                                            {/* <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                                <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full text-base bg-white border border-solid border-black border-opacity-10 rounded-full text-black text-opacity-60 max-md:max-w-full">
                                                    <Field
                                                        type="password"
                                                        name="password"
                                                        placeholder="Şifrə"
                                                        className="w-full bg-transparent outline-none"
                                                    />
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain shrink-0 w-6 aspect-square"
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                                <div className="mt-3 text-sm text-right text-white max-md:max-w-full">
                                                    Şifrəmi unutdum
                                                </div>
                                            </div> */}
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className={`gap-2.5 self-stretch px-10 py-4 mt-7 w-full text-base font-medium text-black border border-solid ${
                                                loading
                                                    ? 'bg-gray-400'
                                                    : 'bg-slate-300'
                                            } border-slate-300 rounded-full max-md:px-5 max-md:max-w-full`}
                                        >
                                            {loading
                                                ? 'Yüklenir...'
                                                : tarnslation?.send}
                                        </button>
                                    </Form>
                                )}
                            </Formik>

                            {formStatus && (
                                <div
                                    className={`mt-4 text-sm text-center ${
                                        formStatus.success
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {formStatus.message}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
