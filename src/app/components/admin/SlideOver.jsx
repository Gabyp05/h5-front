import { X as CloseIcon } from "lucide-react";

export const SlideOver = ({ open, onClose, children }) => {
    return (
        <>
            <div 
                className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 mb-0 
                me-0 ${open ? "opacity-70" : "opacity-0 pointer-events-none"}`}
                onClick={onClose} />
            <div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white shadow-lg z-50 
                transform me-0 transition-transform duration-500 ease-in-out 
                ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Actualizar Lead</h2>
                    <button 
                        type="button"
                        onClick={onClose} 
                        className="cursor-pointer">
                        <CloseIcon size={24} />
                    </button>
                </div>
                <div className="p-4 overflow-y-auto flex-1">
                    {children}
                </div>
            </div>
        </>
    );
};
