import { optional, z } from "zod";

const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".pdf", ".mp4", ".webm"];

const login = z.object({
    email: z.string().email("Correo electrónico inválido"),
    password: z.string().min(1, "Este campo es obligatorio"),
});

const createTicket = z.object({
    subject: z.string().min(1, "El asunto es obligatorio"),
    description: z.string().min(1, "La descripción es obligatoria"),
});

const contactFormSchema = z.object({
    first_name: z.string().min(2, "El nombre debe tener al menos 2 letras").regex(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/, "El nombre solo puede contener letras y espacios."),
    last_name: z.string().min(2, "El apellido debe tener al menos 2 letras").regex(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/, "El apellido solo puede contener letras y espacios."),
    email: z.string().min(1, "Debes ingresar un correo electrónico").email("Correo electrónico inválido"),
    phone: z
        .string()
        .refine(
            (phone) => !phone || /^\+\d{10,15}$/.test(phone),
            "Número de teléfono inválido"
        ),
    institution: z
        .string()
        .max(100, "El nombre de la institución no puede exceder los 100 caracteres")
        .optional(),
    lead_role: z.string().min(1, "Debe seleccionar un tipo de usuario"),
    lead_type: z
        .string()
        .min(1, "Este campo es obligatorio"),
    use_context: z
        .string()
        .min(1, "Este campo es obligatorio")
        .max(255, "El mensaje no puede exceder los 255 caracteres"),
    news_letter_suscription: z.boolean(),
});

const lead = z.object({
    first_name: z.string().min(2, "El nombre debe tener al menos 2 letras"),
    last_name: z.string().min(2, "El apellido debe tener al menos 2 letras"),
    email: z.string().email("Correo electrónico inválido"),
    phone: z
        .string()
        .min(1, "Este campo es obligatorio")
        .refine(
            (phone) => !phone || /^\+\d{10,15}$/.test(phone),
            "Número de teléfono inválido"
        ),
    institution: z
        .string()
        .max(50, "El nombre de la institución no puede exceder los 50 caracteres")
        .optional(),
    intended_user: z.string().min(1, "Este campo es obligatorio"),
    lead_role: z.string().min(1, "Este campo es obligatorio"),
    lead_type: z.string().min(1, "Debe seleccionar un tipo de usuario"),
    use_context: z
        .string()
        .min(1, "Este campo es obligatorio")
        .max(255, "Este campo no puede exceder los 255 caracteres"),
});

const user = (boo = false) =>
    z.object({
        first_name: z.string().min(2, "Este campo debe tener al menos 2 letras"),
        last_name: z.string().min(2, "Este campo debe tener al menos 2 letras"),
        email: z.string().email("Correo electrónico inválido"),
        /*phone: z
        .string().min(1, "Este campo es obligatorio")
        .refine(
            (phone) => !phone || /^\+\d{10,15}$/.test(phone),
            "Número de teléfono inválido"
        ),*/
        password: boo
            ? z.string().optional()
            : z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
        role: z.string().min(1, "Debe seleccionar un rol"),
        privilege: z.string().min(1, "Debe otorgarle un privilegio"),
    });

const security = z.object({
    password: z.string().optional(),
    newPassword: z.string().optional(),
    rePassword: z.string().optional(),
});

const resource = z
    .object({
        title: z.string().min(2, "El título debe tener al menos 2 letras"),
        notes: z.string().min(5, "La descripción debe tener al menos 5 letras"),
        attach: z
            .any()
            .optional()
            .transform((val) => (val && val.length > 0 ? val : undefined))
            .refine(
                (files) => {
                    if (!files) return true;
                    const fileList = Array.isArray(files) ? files : Array.from(files);
                    return fileList.every((file) => {
                        const fileName = file && file.name && file.name.toLowerCase();
                        if (!fileName) return false;
                        return validExtensions.some((ext) => fileName.endsWith(ext));
                    });
                },
                { message: "Solo se permiten archivos .jpg, .jpeg, .png, .gif, .pdf, .mp4, .webm" }
            ),
        media_url: z
            .string()
            .trim()
            .transform((val) => (val === "" ? undefined : val)) 
            .pipe(
                z
                    .string()
                    .url({ message: "Debe ser una URL válida" })
                    .optional()
            )
            .refine(
                (url) => {
                    if (!url) return true;
                    const lowerUrl = url.toLowerCase();
                    return (
                        validExtensions.some((ext) => lowerUrl.endsWith(ext)) ||
                        lowerUrl.includes("youtube.com/watch") ||
                        lowerUrl.includes("youtu.be/")
                    );
                },
                {
                    message: "La URL debe ser .jpg, .jpeg, .png, .gif, .pdf, .mp4, .webm o un enlace de YouTube",
                }
            ),
        media_content_type: z.string(optional),
    })
    .refine(
        (data) => {
            return (data.attach && data.attach.length > 0) || (data.media_url && data.media_url.length > 0)
        },
        {
            message: "Debes proporcionar al menos un archivo adjunto o una URL",
            path: ["attachments"],
        },
    )

const recoverpassword = z.object({
    email: z.string().email("Correo electrónico inválido"),
});

const resetPassword = z.object({
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
    rePassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"), 
}).refine((data) => data.password === data.rePassword, { 
    message: "Las contraseñas no coinciden",
    path: ["rePassword"], 
});

export const schema = {
    login,
    createTicket,
    contactFormSchema,
    lead,
    user,
    security,
    resource,
    recoverpassword,
    resetPassword,
};
