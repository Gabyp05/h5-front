import axios from "axios";

const BASE_URL = "https://run.mocky.io/v3/ed87a47f-28bd-49f9-9609-76bc977619da";

const Edit = async (data) => {
    try {
        const response = await axios.patch(`${BASE_URL}`, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al editar los datos");
    }
};

export const profileService = {
    Edit
}; 
