"use client"
import { Form } from "../Form";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Textarea } from "../Textarea";
import { textarea } from "@/app/utils/textarea";
import { usePost } from "@/app/hooks/usePost";
import { schema } from "@/app/utils/schema";
import { initializeForm } from "@/app/utils/initializeForm";
import { ticketService } from "@/app/services/ticket";

export const CreateTicket = ({ setCreateNewTicket }) => {
    const { register, handleSubmit, validateErrors, isSubmitting, response, error } = usePost({
        schema: schema.createTicket,
        defaultValues: initializeForm.createTicket(),
        onSubmit: ticketService.create
    });

    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Enviar ticket" 
                isLoading={isSubmitting}
                cancelBtn={setCreateNewTicket}>
                {
                    input.createTicket.map(item => (
                        <Input
                            key={item.id}
                            {...item}
                            register={register}
                            error={validateErrors[item.id]?.message}
                        />
                    ))
                }
                {
                    textarea.createTicket.map(item => (
                        <Textarea
                            key={item.id}
                            {...item}
                            register={register}
                            error={validateErrors[item.id]?.message}
                        />
                    ))
                }
            </Form> 
        </>
    );
};
