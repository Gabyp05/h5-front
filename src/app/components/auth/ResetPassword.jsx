"use client";
import Image from "next/image";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Form } from "../Form";
import { initializeForm } from "@/app/utils/initializeForm";
import { schema } from "@/app/utils/schema";
import { usePost } from "@/app/hooks/usePost";
import { authService } from "@/app/services/auth";

export const ResetPassword = () => {
    const { register, handleSubmit, validateErrors, isSubmitting } = usePost({
        schema: schema.resetPassword,
        defaultValues: initializeForm.resetpassword(),
        onSubmit: authService.resetPass
    });

    return (
        <>
            <header className="w-full bg-white border-b border-gray-200 py-2 px-4 md:px-6 lg:px-10">
                <div className="relative w-[180px] h-[60px]">
                    <Image
                        src="/images/play-attention-dark-logo.webp"
                        alt="Play Attention Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 180px, 350px"
                    />
                </div>
            </header>
            <div className="max-w-md mx-auto p-4 md:p-6 mt-6 md:mt-10 md:bg-white 
                md:rounded-lg md:shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Restablecer contraseña</h2>
                <Form
                    handleSubmit={handleSubmit}
                    btnTitle="Restablecer"
                    isLoading={isSubmitting}
                    showCancelBtn={false}>
                    {
                        input.resetpassword.map((item) => (
                            <Input
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        ))
                    }
                </Form>
            </div>
        </>
    );
};
