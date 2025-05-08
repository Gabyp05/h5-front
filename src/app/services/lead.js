import axios from "axios";

const create = async (token, data) => {
    try {
        const response = await axios.post(`/api/leads`, data, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response)
        return response.data;
        
    } catch (error)  {
        if (error.response) {
            const { status } = error.response;
            if (status === 400) { // debe ser 409
                throw new Error("El cliente ya tiene un lead creado.");
            } 
        } 
        throw new Error("Error al enviarse la información. Intente nuevamente!");
    };
};

const newLeads = async (data) => {
    try {
        const response = await axios.post(`https://playattention.onrender.com/api/public-leads`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al enviar la información. Intente nuevamente!");
    }
};

const getAll = async (token) => {
    try {
        const response = await axios.get(`/api/leads`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

const reports = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

export const leadService = {
    create,
    getAll,
    reports,
    newLeads,
}; 
