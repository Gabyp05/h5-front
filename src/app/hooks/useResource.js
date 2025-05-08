import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabaseService } from "../services/supabase";
import Cookies from "js-cookie";

const usePost = ({ schema, defaultValues, onSubmit }) => {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(null);

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
        const token = Cookies.get("token");
        setError(null);
        setResponse(null);
    
        try {
            if (!data.media_url && data.attach && data.attach.length > 0) {
                const file = data.attach[0]; 
                const { url, error } = await supabaseService.upload(file);

                if (error) { throw new Error(error) }
                data.media_url = url; 
            }

            const { attach, ...cleanData } = data;
            const res =  await onSubmit(token, cleanData);
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

const useUpdate = ({ id, schema, defaultValues, onSubmit }) => {
    const [response, setResponse] = useState(null); 
    const [error, setError] = useState(null);

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
        const token = Cookies.get("token");
        setError(null);

        try {
            const updatedData = {};
            let fileUploaded = false; 

            if (data.attach && data.attach.length > 0) {
                const file = data.attach[0]; 
                const { url, error } = await supabaseService.upload(file); 

                if (error) { throw new Error(error) }
                updatedData.media_url = url; 
                fileUploaded = true;
            }

            Object.entries(data).forEach(([key, value]) => {
                if (value !== defaultValues[key]) {
                    if (key === "media_url" && fileUploaded) return;
                    updatedData[key] = value;
                }
            });
            
            if (Object.keys(updatedData).length === 0) {
                return; 
            }

            const res = await onSubmit(token, id, updatedData)         
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

export const useResource = () => ({ usePost, useUpdate });
