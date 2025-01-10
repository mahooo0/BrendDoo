import React, { useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

interface VerificationDialogProps {
    email: string;
    open: boolean;
    onClose: () => void;
    onSubmit: (code: string) => void;
}

export default function VerificationDialog({
    email,
    open,
    onClose,
    onSubmit,
}: VerificationDialogProps) {
    const [otp, setOtp] = useState<string>('');

    const handleOtpChange = (value: any) => {
        setOtp(value); // Update the state with the concatenated OTP value
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('otp:', otp); // Log the concatenated OTP value
        onSubmit(otp); // Call the onSubmit handler with the OTP value
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-[560px] h-[440px] bg-white rounded-[20px] py-[64px] px-10 flex flex-col justify-center items-center">
                <img
                    onClick={onClose}
                    src="/svg/close.svg"
                    className="absolute top-3 right-3 cursor-pointer"
                    alt=""
                />
                <div className="space-y-6">
                    <div className="space-y-2 text-center max-w-[340px]">
                        <h2 className="text-[28px] font-medium">
                            Email adresini dəyiş!
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-primary">{email}</span> email
                            adresinə göndərilən verfikasiya kodunu daxil et.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <InputOTP maxLength={6} onChange={handleOtpChange}>
                                <InputOTPGroup
                                    className="gap-4 flex justify-center"
                                    // Update state when OTP changes
                                >
                                    {[...Array(6)].map((_, index) => (
                                        <InputOTPSlot
                                            key={index}
                                            index={index}
                                            className="w-12 h-12 text-xl"
                                        />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>
                            <button
                                type="submit"
                                className="gap-2.5 self-start w-full px-10 leading-[19px] py-4 text-base font-medium text-white border border-solid bg-[#3873C3] border-[#3873C3] rounded-[100px] max-md:px-5"
                            >
                                Testiq et
                            </button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
