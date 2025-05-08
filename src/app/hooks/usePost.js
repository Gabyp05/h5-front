import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";

export const usePost = ({ schema, defaultValues, onSubmit }) => {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(null);
    const token = Cookies.get("token");

    const {
        register,
        handleSubmit,
        formState: { errors: validateErrors, isSubmitting },
        reset,
        watch
    } = useForm({
        resolver: schema ? zodResolver(schema) : undefined,
        defaultValues
    });

    const formSubmit = async (data) => {
        setError(null);
        setResponse(null);
    
        try {
            const res = onSubmit.length > 1 ? await onSubmit(token, data) : await onSubmit(data);
            setResponse(res);
            reset();
        } catch (error) {
            setError(error);
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(formSubmit),
        validateErrors,
        isSubmitting,
        watch,
        response, 
        error
    };
};
