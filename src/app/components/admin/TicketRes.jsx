import { MessageBox } from "../MessageBox";
import { Textarea } from "../Textarea";
import { textarea } from "@/app/utils/textarea";
import { Form } from "../Form";
import { useUpdate } from "@/app/hooks/useUpdate";
import { initializeForm } from "@/app/utils/initializeForm";
import { ticketService } from "@/app/services/ticket"; 

export const TicketRes = ({ id, title, fullname, email, date, status, description, setOpenTicket }) => {
    const { register, handleSubmit, isSubmitting, response, error } = useUpdate({
        id: id,
        defaultValues: initializeForm.ticketRes(status),
        onSubmit: ticketService.update
    });

    return (
        <>
            <div className="md:flex items-center justify-between">
                <h2 className="font-bold text-xl leading-tight">{title}</h2>
                <p className="md:hidden text-gray-600 text-xs my-1 pb-5 md:pb-0">{fullname} - {email}</p>
                <h3 className="text-md font-semibold leading-tight pb-6 md:pb-0">{status}</h3>
            </div>
            <p className="hidden md:block text-gray-600 text-xs my-1 pb-6">{fullname} - {email}</p>
            <MessageBox description={description} date={date} />
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Enviar respuesta" 
                isLoading={isSubmitting}
                cancelBtn={setOpenTicket}>
                {
                    textarea.ticketRes.map(item => (
                        <Textarea
                            key={item.id}
                            {...item}
                            register={register}
                            error={null}
                        />
                    ))
                }
            </Form>
        </>
    );
};
