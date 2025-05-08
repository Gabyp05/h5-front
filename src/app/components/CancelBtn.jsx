import { DialogClose } from "./ui/dialog";

export const CancelBtn = ({ isLoading, cancelBtn, children = "Cancelar" }) => {
    const button = (
        <button
            onClick={cancelBtn ? () => cancelBtn(false) : undefined}
            type="button"
            disabled={isLoading}
            className={`w-full md:w-auto text-xs font-bold px-3 py-2 rounded border border-gray-300 
            focus:outline-none ${isLoading ? 'opacity-80 cursor-not-allowed pointer-events-none' 
            : 'hover:bg-gray-200 cursor-pointer'}`}>
            {children}
        </button>
    );

    return cancelBtn ? button : <DialogClose asChild>{button}</DialogClose>;
};
