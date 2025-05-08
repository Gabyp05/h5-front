"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input = ({ id, label, type, placeholder, register, error }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="mb-4 relative">
            <label htmlFor={id} className="text-sm font-semibold">{label}</label>
            <input
                {...register(id)}
                type={(id === "password" || id === "newPassword" || id === "rePassword") && show ? "text" : type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="w-full px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
            />
            {
                (id === "password" || id === "newPassword" || id === "rePassword") && (
                    <button
                        type="button"
                        onClick={() => setShow(prev => !prev)}
                        className="absolute right-3 top-10 text-gray-400"
                        tabIndex={-1}>
                        { !show ? <EyeOff size={18} /> : <Eye size={18} /> }
                    </button>
                )
            }
            { error && <div className="text-red-500 text-xs mt-2">{error}</div> }
        </div>
    );
};
