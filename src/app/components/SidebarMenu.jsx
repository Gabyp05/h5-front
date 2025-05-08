"use client"
import { useState } from "react";
import Link from "next/link";

export const SidebarMenu = ({ role, menu, onLinkClick }) => {
    const [openSubmenu, setOpenSubmenu] = useState("Gestión de Contenido");
    const toggleSubmenu = (menuLabel) => setOpenSubmenu(openSubmenu === menuLabel ? null : menuLabel);

    return (
        <div className="mt-6">
            {
                menu[role].map((item, index) => (
                    <div key={index}>
                        {
                            item.submenu ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => toggleSubmenu(item.label)}
                                        className="flex items-center w-full font-bold text-sm cursor-pointer 
                                        px-4 pb-4">
                                        {item.icon} {item.label}
                                    </button>
                                    {
                                        openSubmenu === item.label && (
                                            <div className="text-sm px-4">
                                                {
                                                    item.submenu.map((subItem, subIndex) => (
                                                        <Link
                                                            key={subIndex}
                                                            href={subItem.href}
                                                            className="flex items-center ml-2 pb-4"
                                                            onClick={onLinkClick}>
                                                            {subItem.icon} {subItem.label}
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="flex items-center w-full font-bold text-sm cursor-pointer 
                                    px-4 pb-4"
                                    onClick={onLinkClick}>
                                    {item.icon} {item.label}
                                </Link>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
};
