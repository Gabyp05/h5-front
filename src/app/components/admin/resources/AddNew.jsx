"use client"
import { useEffect } from "react";
import { toast } from "sonner";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { input } from "@/app/utils/input";
import { Textarea } from "../../Textarea";
import { textarea } from "@/app/utils/textarea";
import { schema } from "@/app/utils/schema";
import { initializeForm } from "@/app/utils/initializeForm";
import { useResource } from "@/app/hooks/useResource";
import { resourceService } from "@/app/services/resource";

export const AddNew = () => {
    const { usePost } = useResource();
    const { register, handleSubmit, validateErrors, isSubmitting, response, error, watch } = usePost({
        schema: schema.resource,
        defaultValues: initializeForm.resource("articulo"),
        onSubmit: resourceService.create
    });

    useEffect(() => {
        if (response) {
            toast.success("Se agregó el recurso exitosamente!");
        } else if (error !== null) {
            toast.error(error.message);
        };
    
    }, [response, error]);

    const showAttach = watch("media_url") === "" || !watch("media_url");
    const showUrl = !(watch("attach") && watch("attach").length > 0);
    
    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Guardar" 
                isLoading={isSubmitting}
                justify="justify-end">
                {
                    input.resource.map(item => (
                        <Input
                            key={item.id}
                            {...item}
                            register={register}
                            error={validateErrors[item.id]?.message}
                        />
                    ))
                }
                {
                    textarea.resource.map(item => (
                        <Textarea
                            key={item.id}
                            {...item}
                            register={register}
                            error={validateErrors[item.id]?.message}
                        />
                    ))
                }
                {
                    showAttach && (
                        <Input
                            key={input.attach[0].id}
                            {...input.attach[0]}
                            register={register}
                            error={validateErrors[input.attach[0].id]?.message}
                        />
                    )
                }
                {
                    showUrl && (
                        <Input
                            key={input.attach[1].id}
                            {...input.attach[1]}
                            register={register}
                            error={validateErrors[input.attach[1].id]?.message}
                        />
                    )
                }
                {    
                    validateErrors.attachments && !(watch("attach")?.length > 0 || watch("media_url")) && (
                        <div className="text-red-500 text-xs mt-2">
                            {validateErrors.attachments.message}
                        </div>
                    )
                }
            </Form>
        </>
    );
};
