import axios from "axios";

const create = async (token, data) => {
    try {
        const response = await axios.post(`/api/media-hub/content-asset`, data, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        return response.data;  
    } catch  {
        throw new Error("Error al enviarse el formulario. Intente nuevamente!");
    }
};

// se debe modificar. Debe ser por tipo de recurso
const getAll = async (token) => {
    try {
        const response = await axios.get(`/api/media-hub/content-asset`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch  {
        throw new Error("Error al traer los recursos. Intente nuevamente!");
    }
};

const update = async (token, id, data) => {
    try {
        const response = await axios.patch(`/api/media-hub/content-asset/${id}`, data, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    } catch  {
        throw new Error("Error actualizando el recurso. Intente nuevamente!");
    }
};

const remove = async (token, id) => {
    try {
        const response = await axios.delete(`/api/media-hub/content-asset/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        
        return response.status;
    } catch  {
        throw new Error("Error al eliminar el recurso Intente nuevamente!");
    }
};

export const resourceService = {
    create,
    getAll,
    update,
    remove
}; 
