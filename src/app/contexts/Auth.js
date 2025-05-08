"use client"
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const tokenExpiration = localStorage.getItem("tokenExpiration");

        if (storedUser && tokenExpiration) {
            const currentTime = Date.now();

            if (currentTime > tokenExpiration) {
                logout();
            } else {
                setUser(storedUser);
            }
        }
    }, []);

    const login = (user) => {
        const { access, refresh, user: userData } = user;
        const role = userData.role;
        setUser(userData);

        Cookies.set("token", access);
        Cookies.set("role", role);

        const expirationTime = Date.now() + 1800000;
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("tokenExpiration", expirationTime);
        window.location.href = "/panel_admin/crm/leads"; // se debe cambiar la ruta según rol
    };

    const logout = () => {
        setUser(null);
        Cookies.remove("token");
        Cookies.remove("role");
        localStorage.removeItem("user");
        localStorage.removeItem("tokenExpiration"); 
        window.location.href = "/inicio_sesion";
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
