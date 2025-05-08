import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/4c6abc81-590f-4b13-920a-39af91f94bb2";

const create = async (data) => {
    try {
        const response = await axios.post(`https://run.mocky.io/v3/ed87a47f-28bd-49f9-9609-76bc977619da`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al enviarse la información. Intente nuevamente!");
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

const remove = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}`, id);
        return response.data;
        
    } catch  {
        throw new Error("Error eliminando al usuario. Intente nuevamente!");
    }
};

export const userService = {
    create,
    getAll,
    update, 
    remove,
}; 
