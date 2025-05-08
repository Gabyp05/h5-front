import { useState } from "react";
import Cookies from "js-cookie";

export const useDelete = ({ id, onDelete }) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);   

    const handleDelete = async () => {
        const token = Cookies.get("token");
        setError(null);
        setIsLoading(true);

        try {
            const res = onDelete.length > 1 ? await onDelete(token, id) : await onDelete(id);
            setResponse(res);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        handleDelete,
        isLoading,
        response,
        error
    };
};
