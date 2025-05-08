"use client"
import Image from "next/image";
import { LogOut } from "lucide-react";
import { UserProfile } from "./UserProfile";
import { SidebarMenu } from "./SidebarMenu";
import { menu } from "../utils/menu";
import { useAuth } from "../contexts/Auth";

export const Sidebar = ({ role }) => {
    const { user, logout } = useAuth();

    return (
        <div className="hidden lg:flex flex-col h-screen">
            <div className="w-full bg-gray-800 text-white py-2 px-4">
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
            </div>
            <div className="flex flex-grow overflow-hidden">
                <div className="w-64 bg-gray-800 text-white h-full overflow-y-auto">
                    <UserProfile fullname={user?.full_name} role={user?.role} />
                    <SidebarMenu role={role} menu={menu} />
                    <div className="px-4 pb-4">
                        <button
                            type="button"
                            onClick={logout}
                            className="flex items-center w-auto bg-blue-400 text-xs cursor-pointer 
                            px-3 py-1 rounded font-bold">
                            <LogOut size={16} className="me-2" /> Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
