import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Validation Schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Ad daxil edin'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Telefon nömrəsi düzgün deyil')
            .required('Telefon nömrəsi daxil edin'),
        email: Yup.string()
            .email('Email düzgün deyil')
            .required('Email daxil edin'),
        password: Yup.string()
            .min(6, 'Şifrə ən az 6 simvoldan ibarət olmalıdır')
            .required('Şifrə daxil edin'),
    });

    return (
        <div className="flex overflow-hidden flex-col bg-white">
            <div className="flex relative flex-col w-full h-[100vh] max-md:max-w-full justify-center items-center px-[40px]">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f57b393c120b19ab9db1e7a4aa3dc11e48fdaa0526b775a0fd5a02c9292e45c?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="rounded-full bg-white w-[56px] h-[56px] bg-opacity-60 z-50 absolute top-10 left-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d01662ce302f4f64e209cc8ecd0540b6f0e5fb3d4ccd79eead1b316a272d11?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain w-14 aspect-square rounded-[100px]"
                    />
                </div>

                <div className="flex overflow-hidden relative flex-col justify-center self-center p-16 mb-0 max-w-full rounded-3xl bg-white bg-opacity-20 w-[560px] max-md:px-5 max-md:mb-2.5">
                    <div className="flex flex-col max-md:max-w-full">
                        <div className="flex flex-col items-center self-center text-center">
                            <div className="text-3xl font-bold text-white">
                                Qeydiyyatdan Keçin
                            </div>
                            <div className="mt-3 text-base text-white text-opacity-80">
                                Hesab yaratmaq üçün məlumatlarınızı daxil edin.
                            </div>
                        </div>

                        {/* Formik Form */}
                        <Formik
                            initialValues={{
                                name: '',
                                phone: '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({ setFieldValue }) => (
                                <Form className="flex flex-col items-center mt-10 w-full max-md:max-w-full">
                                    <div className="flex flex-col w-full max-md:max-w-full">
                                        <Field
                                            name="name"
                                            className="overflow-hidden px-5 py-5 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60"
                                            placeholder="Ad"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />

                                        <Field
                                            name="phone"
                                            className="overflow-hidden px-5 py-5 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3"
                                            placeholder="Telefon Nömrəsi"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />

                                        <Field
                                            name="email"
                                            className="overflow-hidden px-5 py-5 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3"
                                            placeholder="Email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />

                                        <div className="flex overflow-hidden gap-5 justify-between px-5 py-4 w-full text-base whitespace-nowrap bg-white border border-solid border-black border-opacity-10 rounded-[100px] text-black text-opacity-60 mt-3">
                                            <Field
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                name="password"
                                                placeholder="Şifrə"
                                                className="outline-none bg-transparent w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                src={
                                                    showPassword
                                                        ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/visible-icon.png'
                                                        : 'https://cdn.builder.io/api/v1/image/assets/TEMP/invisible-icon.png'
                                                }
                                                className="object-contain shrink-0 w-6 aspect-square cursor-pointer"
                                                alt="Toggle Password Visibility"
                                            />
                                        </div>
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 text-xs mt-1"
                                        />

                                        <div className="gap-2.5 self-stretch px-10 py-4 mt-7 w-full text-base font-medium text-black border border-solid bg-slate-300 border-slate-300 rounded-[100px] max-md:px-5 max-md:max-w-full">
                                            <button
                                                type="submit"
                                                className="w-full"
                                            >
                                                Qeydiyyatdan Keç
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className="mt-16 text-base font-semibold text-center text-white text-opacity-80 max-md:mt-10 max-md:max-w-full">
                        <span>Hesabınız var?</span> Daxil olun
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
