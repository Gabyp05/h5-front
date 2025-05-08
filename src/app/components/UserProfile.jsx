import Link from "next/link";
import Image from "next/image";
import { Settings } from "lucide-react";

export const UserProfile = ({ fullname, role }) => {
    return (
        <div className="flex items-center px-4 pb-4 lg:py-3 lg:border-y border-gray-700">
            <div className="w-12 h-12 mr-4">
                <Image
                    src={"https://ui-avatars.com/api/?name=User&size=128&background=cccccc&color=ffffff"} 
                    alt="Usuario"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </div>
            <div>
                <div className="flex items-center">
                    <p className="font-semibold text-sm mr-2">{fullname}</p>
                    <Link href="/panel_usuario/mi_perfil" className="cursor-pointer">
                        <Settings size={18} />
                    </Link>
                </div>
                <p className="text-xs">{role}</p>
            </div>
        </div>
    );
};
