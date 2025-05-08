"use client"
import { Form } from "../Form";
import { Input } from "../Input"
import { input } from "@/app/utils/input";
import { schema } from "@/app/utils/schema";
import { initializeForm } from "@/app/utils/initializeForm";
import { usePost } from "@/app/hooks/usePost";
import { authService } from "@/app/services/auth";

export const Security = () => {
    const { register, handleSubmit, validateErrors, isSubmitting, response, error } = usePost({
        schema: schema.security,
        defaultValues: initializeForm.security(),
        onSubmit: authService.passChange
    });

    return (
        <Form 
            handleSubmit={handleSubmit} 
            btnTitle="Actualizar contraseña" 
            isLoading={isSubmitting}
            showCancelBtn={false}>
            {
                input.security.map(item => (
                    <Input
                        key={item.id}
                        {...item}
                        register={register}
                        error={validateErrors[item.id]?.message}
                    />
                ))
            }
        </Form>               
    );
};
