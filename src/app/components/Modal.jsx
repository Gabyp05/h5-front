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

export const Modal = ({ children, title, content, closeRef }) => {
    return (
        <Dialog>
            <DialogOverlay className="bg-black/50" />
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogClose asChild>
                <button ref={closeRef} className="hidden"></button>
            </DialogClose>
            <DialogContent className="max-h-[80vh] px-0 md:w-11/12">
                <DialogHeader className="border-b mb-4">
                    <DialogTitle className="pb-5 text-start px-3 md:px-6">{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="sr-only">content</DialogDescription>
                <div className="overflow-y-auto max-h-[60vh] px-3 md:px-6">
                    {content}
                </div>
            </DialogContent>
        </Dialog>
    );
};
