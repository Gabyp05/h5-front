import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/ed87a47f-28bd-49f9-9609-76bc977619da";

const create = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al enviarse el formulario. Intente nuevamente!");
    }
};

const getAll = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data;
        
    } catch  {
        throw new Error("Error al traer la información. Intente nuevamente!");
    }
};

const update = async (id, data) => {
    try {
        const response = await axios.post(`https://run.mocky.io/v3/ed87a47f-28bd-49f9-9609-76bc977619da`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error actualizando la información. Intente nuevamente!");
    }
};

export const ticketService = {
    create,
    getAll,
    update,
}; 
