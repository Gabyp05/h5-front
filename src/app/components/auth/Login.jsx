"use client"
import { useEffect } from "react"; 
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Toaster, toast } from "sonner";
import { Input } from "../Input";
import { Form } from "../Form";
import { input } from "@/app/utils/input";
import { initializeForm } from "@/app/utils/initializeForm";
import { schema } from "@/app/utils/schema";
import { usePost } from "@/app/hooks/usePost";
import { authService } from "@/app/services/auth";
import { useAuth } from "@/app/contexts/Auth";

export const Login = () => {
    const { login : signin, user } = useAuth();
    const router = useRouter();

    const { register, handleSubmit, validateErrors, isSubmitting, response, error } = usePost({
        schema: schema.login,
        defaultValues: initializeForm.login(),
        onSubmit: authService.login
    });

    useEffect(() => {
        if (response) {
            signin(response);
        } else if (error !== null) {
            toast.error(error.message);
        };

    }, [response, error]); 

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
                <h2 className="text-xl font-bold text-center mb-6">Inicio de Sesión</h2>
                <Form 
                    handleSubmit={handleSubmit} 
                    btnTitle="Iniciar Sesión" 
                    isLoading={isSubmitting}
                    showCancelBtn={false}>
                    {
                        input.login.map(item => (
                            <Input
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        ))
                    }
             
                    <Link href="/recuperar_contrasena" className="text-sm text-gray-500 flex justify-end pb-8">
                        ¿Olvidaste tu contraseña?
                    </Link>
                </Form>
            </div>
            <Toaster
                richColors
                position="top-center"
            />
        </>
    );
};
