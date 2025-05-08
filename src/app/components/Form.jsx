import { loader } from "./Loader";
import { CancelBtn } from "./CancelBtn"; 

export const Form = ({ children, handleSubmit, btnTitle, isLoading, 
    cancelBtn = false, justify = "", showCancelBtn = true }) => {

    return (
        <form onSubmit={handleSubmit}>
            {children}
                { 
                    showCancelBtn && justify === "justify-end" && (
                        <div className={`pb-5 flex flex-col-reverse md:flex-row gap-x-3 ${justify}`}>
                            <CancelBtn isLoading={isLoading} cancelBtn={cancelBtn} />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full md:w-auto min-w-[150px] bg-blue-600 text-white text-xs 
                                font-bold px-4 py-2 mb-3 md:mb-0 rounded focus:outline-none 
                                ${isLoading ? 'opacity-50 cursor-not-allowed pointer-events-none' 
                                : 'hover:bg-blue-700 cursor-pointer'}`}>
                                { isLoading ? <loader.Circular /> : btnTitle }
                            </button>
                        </div>
                    )
                }
                { 
                    showCancelBtn && justify === ""  && (
                        <div className={`pb-5 md:flex gap-x-3 ${justify}`}>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full md:w-auto min-w-[150px] bg-blue-600 text-white text-xs 
                                font-bold px-4 py-2 mb-3 md:mb-0 rounded focus:outline-none 
                                ${isLoading ? 'opacity-50 cursor-not-allowed pointer-events-none' 
                                : 'hover:bg-blue-700 cursor-pointer'}`}>
                                { isLoading ? <loader.Circular /> : btnTitle }
                            </button>
                            <CancelBtn isLoading={isLoading} cancelBtn={cancelBtn} />
                        </div>
                    )
                }
                { 
                    !showCancelBtn && (
                        <div className={`pb-5 md:flex gap-x-3 ${justify}`}>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full bg-blue-600 text-white text-sm font-bold px-4 py-2 mb-3 
                                md:mb-0 rounded focus:outline-none ${isLoading 
                                ? 'opacity-50 cursor-not-allowed pointer-events-none' 
                                : 'hover:bg-blue-700 cursor-pointer'}`}>
                                { isLoading ? <loader.Circular specialClass={true} /> : btnTitle }
                            </button>
                        </div>
                    )
                }
        </form>
    );
};
