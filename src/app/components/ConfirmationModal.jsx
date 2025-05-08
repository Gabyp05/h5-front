import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger, 
    DialogOverlay, 
    DialogDescription,
    DialogClose
} from "./ui/dialog";
import { loader } from "./Loader";

export const ConfirmActionModal = ({ children, onConfirm, description, isLoading, closeRef }) => {
    return (
        <Dialog>
            <DialogOverlay className="bg-black/50" />
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogClose asChild>
                <button ref={closeRef} className="hidden"></button>
            </DialogClose>
            <DialogContent className="max-h-[80vh] px-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                <DialogHeader className="border-b mb-4">
                    <DialogTitle className="pb-5 text-start px-3 md:px-6">Confirmar acción</DialogTitle>
                </DialogHeader>
                <DialogDescription className="sr-only">content</DialogDescription>
                <p className="text-sm px-3 md:px-6">{description}</p>
                <div className="flex justify-end gap-2 mt-6 px-3 md:px-6">
                    <DialogTrigger asChild>
                        <button
                            className="w-full md:w-auto text-xs font-bold px-3 py-2 rounded hover:bg-gray-200 
                            border border-gray-300 focus:outline-none cursor-pointer">
                            Cancelar
                        </button>
                    </DialogTrigger>
                    <button
                        onClick={onConfirm}
                        className="w-full md:w-auto min-w-[150px] bg-black text-white text-xs 
                        font-bold px-4 py-2 md:mb-0 rounded hover:bg-gray-900 focus:outline-none 
                        cursor-pointer">
                        { isLoading ? <loader.Circular /> : "Confirmar" }
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};
