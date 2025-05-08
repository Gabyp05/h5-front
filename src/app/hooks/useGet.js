import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

export const useGet = (fetch, deps = []) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = Cookies.get("token");

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = fetch.length > 0 ? await fetch(token) : await fetch();
            setData(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, [fetch, token]);  

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData, ...deps]);  

    return { data, isLoading, error, fetchData };
};
