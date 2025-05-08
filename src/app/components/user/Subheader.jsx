export const Subheader = ({ searchTerm, setSearchTerm, title, text }) => {
    return (
        <div className="md:flex justify-between items-center w-full pb-8">
            <div className="pb-5 md:pb-0">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="text-sm text-gray-600">{text}</p>
            </div>
            <input
                type="text"
                placeholder="Buscar recurso..."
                className="w-full md:w-70 px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md 
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};
