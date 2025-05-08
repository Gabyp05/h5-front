import { Select } from "../Select";
import { select } from "@/app/utils/select";
import { Textarea } from "../Textarea";
import { textarea } from "@/app/utils/textarea";
import { loader } from "../Loader";
import { useUpdate } from "@/app/hooks/useUpdate";
import { initializeForm } from "@/app/utils/initializeForm";
import { ticketService } from "@/app/services/ticket";

export const TicketDetail = ({ query }) => {
    const { register, handleSubmit, isSubmitting, response, error } = useUpdate({
        id: query.id,
        defaultValues: initializeForm.queryRes(query.status),
        onSubmit: ticketService.update
    });

    return (
        <>
            Detalle de la Consulta
           {/* <p>Nombre: {query.user}</p>
            <p>Fecha de creación: {query.createdAt}</p>
            <p>Asunto: {query.subject}</p>
            <p>Descripción: {query.description}</p>
            <form onSubmit={handleSubmit}>
                {
                    select.queryStatus.map(item => (
                        <Select
                            key={item.id}
                            {...item}
                            register={register}
                            error={null}
                        />
                    ))
                }
                {
                    textarea.queryRes.map(item => (
                        <Textarea
                            key={item.id}
                            {...item}
                            register={register}
                            error={null}
                        />
                    ))
                }
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    { isSubmitting ? <loader.Circular /> : "Enviar respuesta" }
                </button>
            </form>
            */}
        </>
    );
};
