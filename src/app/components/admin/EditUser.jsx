import { Form } from "../Form";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Select } from "../Select";
import { select } from "@/app/utils/select";
import { schema } from "@/app/utils/schema";
import { useUpdate } from "@/app/hooks/useUpdate";
import { userService } from "@/app/services/user";

export const EditUser = ({ user }) => {
    const { register, handleSubmit, isSubmitting, validateErrors, response, error } = useUpdate({
        id: user.id,
        schema: schema.user(true),
        defaultValues: {...user},
        onSubmit: userService.update
    });
    
    return (
        <>
            Editar usuario
            <Form handleSubmit={handleSubmit} btnTitle="Editar usuario" isLoading={isSubmitting}>
                {
                    input.user.map(item => {
                        if (item.id === "password") return null;
                        return (
                            <Input
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        );
                    })
                }
                {
                    select.usersRole.map(item => (
                        <Select
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
