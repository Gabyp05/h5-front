import { Form } from "../Form";
import { Input } from "../Input";
import { input } from "@/app/utils/input";
import { Select } from "../Select";
import { select } from "@/app/utils/select";
import { initializeForm } from "@/app/utils/initializeForm";
import { schema } from "@/app/utils/schema";
import { usePost } from "@/app/hooks/usePost";
import { authService } from "@/app/services/auth";

export const AddNewUser = () => {
    const { register, handleSubmit, validateErrors, isSubmitting, response, error, watch } = usePost({
        schema: schema.user(),
        defaultValues: initializeForm.user(),
        onSubmit: authService.register
    });

    const selectedRole = watch("role");

    return (
        <>
            <Form 
                handleSubmit={handleSubmit} 
                btnTitle="Agregar nuevo usuario" 
                isLoading={isSubmitting}
                justify="justify-end">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    {
                        input.user.map(item => (
                            <Input
                                key={item.id}
                                {...item}
                                register={register}
                                error={validateErrors[item.id]?.message}
                            />
                        ))
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
                    {
                        selectedRole && select.userPrivilege[selectedRole] && (
                            <Select
                                key={select.userPrivilege[selectedRole].id}
                                {...select.userPrivilege[selectedRole]}
                                register={register}
                                error={validateErrors["privilege"]?.message}
                            />
                        )
                    }
                </div>
            </Form>
        </>
    );
};
