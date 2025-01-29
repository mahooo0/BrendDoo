import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import GETRequest, { axiosInstance } from '../../setting/Request';
import { TranslationsKeys } from '../../setting/Types';
import ROUTES from '../../setting/routes';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formStatus, setFormStatus] = useState<{
        message: string;
        success: boolean;
    } | null>(null);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleSubmit = async (values: {
        email: string;
        password: string;
    }) => {
        setLoading(true);
        setFormStatus(null); // Reset status message
        await axios
            .post('https://brendo.avtoicare.az/api/login', { ...values })
            .then((response) => {
                localStorage.setItem('user-info', JSON.stringify(response));
                toast.success('log in sucsesfully');
                //add token to local
                navigate('/user');
            })
            .catch((error) => {
                console.log(error);
                // toast.error('Error while logging in');
                setLoading(false);
                toast.error(error.response.data.message);
            });
    };
    const { lang = 'ru' } = useParams<{ lang: string }>();

    const { data: tarnslation } = GETRequest<TranslationsKeys>(
        `/translates`,
        'translates',
        [lang]
    );
    const handleSuccess = (response: any) => {
        console.log('Login Success:', response);
        const credential = response.credential; // The ID token
        console.log('credential', credential);
        axiosInstance
            .post('/login/google', { token: credential })
            .then((response) => {
                toast.success('login sucsesfylly ');
                console.log('RESPONse', response);
                localStorage.setItem('user-info', JSON.stringify(response));
                navigate('/user');
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
        // You can send this credential to your backend for verification
    };

    const handleError = () => {
        console.log('Login Failed');
    };
    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <div className="flex relative flex-col w-full h-[100vh] max-md:max-w-full justify-center items-center px-[40px] max-sm:px-4">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f57b393c120b19ab9db1e7a4aa3dc11e48fdaa0526b775a0fd5a02c9292e45c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-cover absolute inset-0 size-full"
                />
                <div
                    onClick={() => navigate(-1)}
                    className="rounded-full bg-white lg:w-[56px] lg:h-[56px] w-[35px] h-[35px] bg-opacity-60 z-50 absolute top-5 left-5 cursor-pointer"
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d01662ce302f4f64e209cc8ecd0540b6f0e5fb3d4ccd79eead1b316a272d11?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain w-14 aspect-square rounded-full"
                    />
                </div>

                <div className="flex overflow-hidden relative flex-col justify-center self-center p-[60px]  max-w-full rounded-3xl bg-white bg-opacity-20 w-[560px] max-md:px-5  max-sm:py-[28px]">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col items-center self-center text-center">
                            <div className="text-3xl font-bold text-white">
                                {tarnslation?.Xoş_gəldiniz}
                            </div>
                            <div className="mt-3 text-base text-white text-opacity-80">
                                {tarnslation?.logindesc}
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:mt-10 mt-4 w-full max-md:max-w-full">
                            <div className="flex gap-3 items-center text-base font-semibold text-center text-white">
                                <GoogleLogin
                                    onSuccess={handleSuccess}
                                    onError={handleError}
                                />

                                {/* <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3022fd65942a1f100f9b4b03e803efbd39acdf620aeebe49dd8d33234dd171c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square rounded-full"
                                />
                                <div className="self-stretch my-auto">
                                    {tarnslation?.Google}
                                </div> */}
                            </div>
                            <div className="flex lg:gap-10 gap-5 items-center mt-7 text-xs text-center text-white w-full">
                                <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                                <div className="self-stretch my-auto text-nowrap">
                                    {tarnslation?.or}
                                </div>
                                <div className="shrink-0 self-stretch my-auto h-px border border-solid border-white border-opacity-20 w-[35%]" />
                            </div>

                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {() => (
                                    <Form className="flex flex-col self-stretch mt-7 w-full max-md:max-w-full">
                                        <div className="flex flex-col w-full max-md:max-w-full">
                                            <div className="overflow-hidden px-5  flex justify-center items-center w-full h-[56px] text-base bg-white border border-solid border-black border-opacity-10 rounded-full text-black text-opacity-60 max-md:max-w-full">
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
                                            <div className="flex flex-col mt-3 w-full max-md:max-w-full">
                                                <div className="flex overflow-hidden gap-5 justify-between px-5  w-full h-[56px] text-base bg-white border border-solid border-black border-opacity-10 rounded-full text-black text-opacity-60 max-md:max-w-full">
                                                    <Field
                                                        type={
                                                            showPassword
                                                                ? 'text'
                                                                : 'password'
                                                        }
                                                        name="password"
                                                        placeholder={
                                                            tarnslation?.password
                                                        }
                                                        className="w-full bg-transparent outline-none"
                                                    />
                                                    <img
                                                        loading="lazy"
                                                        src={
                                                            !showPassword
                                                                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc75299a447e1f2b81cfaeb2821950c885d45d255e50ae73ad2684fcd9aa2110?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                                                : '/svg/closedaye.svg'
                                                        }
                                                        className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
                                                        onClick={() =>
                                                            setShowPassword(
                                                                !showPassword
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="text-red-500 text-sm mt-1"
                                                />
                                                <div
                                                    onClick={() =>
                                                        navigate(
                                                            `/${lang}/${
                                                                ROUTES
                                                                    .resetPasword[
                                                                    lang as keyof typeof ROUTES.resetPasword
                                                                ]
                                                            }`
                                                        )
                                                    }
                                                    className="mt-3 text-sm text-right text-white max-md:max-w-full cursor-pointer hover:underline"
                                                >
                                                    {
                                                        tarnslation?.forgotpassword
                                                    }{' '}
                                                </div>
                                            </div>
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
                                                ? tarnslation?.yuklenir
                                                : tarnslation?.login}
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
                        <div className=" lg:mt-[60px] mt-8 text-base font-semibold text-center text-white text-opacity-80  max-md:max-w-full">
                            <span>{tarnslation?.Hesabın_yoxdur}? </span>
                            <Link
                                to={`/${lang}/${
                                    ROUTES.register[
                                        lang as keyof typeof ROUTES.register
                                    ]
                                }`}
                                className="hover:underline"
                            >
                                {tarnslation?.register}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
