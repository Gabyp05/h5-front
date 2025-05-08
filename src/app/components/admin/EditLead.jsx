import { Form } from "../Form";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Textarea } from "../Textarea";
import { textarea } from "@/app/utils/textarea";
import { Select } from "../Select";
import { select } from "@/app/utils/select";
import { schema } from "@/app/utils/schema";
import { useUpdate } from "@/app/hooks/useUpdate";
import { userService } from "@/app/services/user";
import AddTask from "./AddTask";

export const EditLead = ({ lead }) => {
    const { register, handleSubmit, isSubmitting, validateErrors, response, error } = useUpdate({
        id: lead.id,
        schema: schema.user(true),
        defaultValues: {...lead},
        onSubmit: userService.update
    });

    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Actualizar" 
                isLoading={isSubmitting}
                justify="justify-end"
                showCancelBtn={false}>
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
                <AddTask />
            </Form>
        </>
    );
};
