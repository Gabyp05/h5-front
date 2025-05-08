const lead = () => {
    return {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        institution: "",
        intended_user: "",
        lead_role: "",
        lead_type: "",
        use_context: "",
    };
};

const login = () => {
    return {
        email: "",
        password: "",
    };
};

const ticketRes = (status) => {
    return {
        status: status,
        response: "",
    };
};

const user = () => {
    return {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        role: "",
        privilege: "",
    };
};

const createTicket = () => {
    return {
        subject: "",
        description: "",
    };
};

const security = () => {
    return {
        password: "",
        newPassword: "",
        rePassword: "",
    };
};

const resource = (contentType = "") => {
    return {
        title: "",
        notes: "",
        media_url: "",
        media_content_type: contentType,
    };
};

const contactForm = () => {
    return {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        institution: "",
        lead_role: "",
        lead_type: "",
        use_context: "",
        news_letter_suscription: false,
    };
};

const recoverpassword = () => {
    return {
        email: "",
    };
};

const resetpassword = () => {
    return {
        password: "",
        rePassword: "",
    };
};


export const initializeForm = {
    lead,
    login,
    ticketRes,
    user,
    createTicket,
    security,
    resource,
    contactForm,
    recoverpassword,
    resetpassword,
};
