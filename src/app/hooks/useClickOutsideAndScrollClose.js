import { useEffect } from "react";

export const useClickOutsideAndScrollClose = (ref, onClose, isActive) => {
    // Cierra al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isActive) onClose();
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isActive, onClose]);

    // Cierra al hacer clic fuera del elemento referenciado
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isActive && ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isActive, onClose, ref]);
};
