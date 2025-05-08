import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import { Form } from "../Form";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Textarea } from "../Textarea";
import { textarea } from "@/app/utils/textarea";
import { Select } from "../Select";
import { select } from "@/app/utils/select";
import { schema } from "@/app/utils/schema";
import { initializeForm } from "@/app/utils/initializeForm";
import { usePost } from "@/app/hooks/usePost";
import { leadService } from "@/app/services/lead";

export const AddNewLead = () => {
    const { register, handleSubmit, validateErrors, isSubmitting, response, error } = usePost({
        schema: schema.lead,
        defaultValues: initializeForm.lead(),
        onSubmit: leadService.create
    });

    useEffect(() => {
        if (response) {
            toast.success("La información se ha enviado exitosamente!");
        } else if (error !== null) {
            toast.error(error.message);
        };

    }, [response, error]);

    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Enviar nuevo lead" 
                isLoading={isSubmitting}
                justify="justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    {
                        input.lead.map(item => (
                            <Input
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        ))
                    }
                    {
                        select.lead.map(item => (
                            <Select
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        ))
                    }
                </div>
                {
                    textarea.lead.map(item => (
                        <Textarea
                            key={item.id}
                            {...item}
                            register={register}
                            error={validateErrors[item.id]?.message}
                        />
                    ))
                }
            </Form>
            <Toaster
                richColors
                position="top-center"
            />
        </>
    );
};
