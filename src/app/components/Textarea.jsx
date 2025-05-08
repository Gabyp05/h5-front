export const Textarea = ({ id, label, placeholder, register, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="text-sm font-semibold">{label}</label>
            <textarea
                {...register(id)}
                id={id}
                name={id}
                placeholder={placeholder}
                className="w-full px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
            />
            { error && <div className="text-red-500 text-xs">{error}</div> }
        </div>
    );
};
