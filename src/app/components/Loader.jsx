const Circular = ({ specialClass = false, changeColor = "border-white" }) => {
    return (
        <div className={`${specialClass ? "w-5 h-5" : "w-4 h-4"} border-2 border-t-transparent 
            border-solid rounded-full animate-spin mx-auto ${changeColor}`}></div>
    );
};

const Resource = () => {
    return (
        <div className="bg-white border rounded-md shadow-md px-4 py-6 h-full flex flex-col animate-pulse">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div> 
                <div className="w-32 h-4 bg-gray-300 rounded"></div> 
            </div>
            <div className="pt-3 pb-5">
                <div className="w-full h-4 bg-gray-300 rounded"></div> 
            </div>
            <div className="flex flex-wrap justify-end gap-2">
                <div className="w-24 h-8 bg-gray-300 rounded"></div> 
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
                <div className="w-24 h-8 bg-gray-300 rounded"></div>
            </div>
        </div>
    );
};

export const loader = {
    Circular,
    Resource,
};

