import { createClient } from "@supabase/supabase-js";

const BASE_URL = process.env.NEXT_PUBLIC_SUPA_BASE;  
const SUPA_BASE_KEY = process.env.NEXT_PUBLIC_SUPA_BASE_KEY; 
const supabase = createClient(BASE_URL, SUPA_BASE_KEY);

const upload = async (file) => {
    const { data, error } = await supabase.storage
        .from("playattention")
        .upload(`public/${file.name}`, file);

    if (error) {
        if (error.message.includes("already exists")) {
            return { url: null, error: "El recurso ya existe." }; 
        }
        return { url: null, error: "Falló la subida del recurso." }; 
    }

    const url = supabase.storage
        .from("playattention")
        .getPublicUrl(`public/${file.name}`).data.publicUrl;
        
    return { url };
};

const deleteFile = async (fileName) => {
    const { error } = await supabase.storage
        .from("playattention")
        .remove([`public/${fileName}`]);

    if (error) {
        console.error("Error al eliminar el archivo:", error.message);
    }
};

export const supabaseService = {
    upload,
    deleteFile
};
