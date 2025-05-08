import axios from "axios";

const login = async (data) => {
    try {
        const response = await axios.post(`/api/auth`, data);
        return response.data;
        
    } catch (error)  {
        if (error.response) {
            const { status } = error.response;
            if (status === 400) { // debe ser 401
                throw new Error("Credenciales incorrectas. Por favor, verifica tus datos.");
            } else if (status === 403) {
                throw new Error("Acceso no autorizado. Verifique su cuenta.");
            }
        }
        throw new Error("Error al enviar las credenciales. Intente nuevamente!");
    };
};

const register = async (data) => {
    console.log(data)
    try {
        const response = await axios.post(`/api/register`, data);
        return response.data;
        
    } catch (error) {
        console.log(error)
        throw new Error("Error al enviarse la información. Intente nuevamente!");
    }
};

const passChange = async (data) => {
    try {
        const response = await axios.post(``, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al cambiar la contraseña. Intente nuevamente!");
    }
};

const recoverPass = async (data) => {
    try {
        const response = await axios.post(``, data);
        return response.data;
        
    } catch {
        throw new Error("Error al enviar correo electrónico. Intente nuevamente!");
    }
};

const resetPass = async (data) => {
    try {
        const response = await axios.put(``, data);
        return response.data;
        
    } catch  {
        throw new Error("Error al actualizar contraseña. Intente nuevamente!");
    }
};

export const authService = {
    login,
    register,
    passChange,
    recoverPass,
    resetPass
}; 
