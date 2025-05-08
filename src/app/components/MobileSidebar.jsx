"use client"
import { useState } from "react";
import Image from "next/image";
import { LogOut, Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { UserProfile } from "./UserProfile";
import { SidebarMenu } from "./SidebarMenu";
import { menu } from "../utils/menu";
import { useAuth } from "../contexts/Auth";

export const MobileSidebar = ({ role }) => {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 md:px-6">
                <div className="relative w-40 h-10">
                    <Image
                        src="/images/play-attention_logo.webp"
                        alt="Play Attention Logo"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 180px, 350px"
                    />
                </div>
                <button type="button" onClick={() => setIsOpen(true)}><MenuIcon size={24} /></button>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-40 z-50 transition-opacity duration-300 
                ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={() => setIsOpen(false)}>
            </div>
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white overflow-y-auto 
                py-4 z-50 transform transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-start mb-4 border-b border-gray-700
                    lg:border-none">
                    <UserProfile 
                        fullname={user?.full_name} 
                        role={user?.role} 
                    />
                    <button 
                        type="button" 
                        onClick={() => setIsOpen(false)}
                        className="pe-4">
                        <CloseIcon size={24} />
                    </button>
                </div>
                <SidebarMenu
                    role={role}
                    menu={menu}
                    onLinkClick={() => setIsOpen(false)} 
                />
                <div className="px-4 pb-4">
                    <button
                        type="button"
                        onClick={() => { logout(); setIsOpen(false) }}
                        className="flex items-center w-auto bg-blue-400 text-xs cursor-pointer 
                        px-3 py-1 rounded font-bold">
                        <LogOut size={16} className="me-2" /> Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};
