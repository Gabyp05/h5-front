export const Select = ({ id, label, options, register, error, disabled = false }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="text-sm font-semibold">{label}</label>
            <select
                id={id}
                {...register(id)}
                disabled={disabled}
                className="w-full px-3 py-2 text-sm mt-2 border border-gray-300 rounded-md focus:outline-none 
                focus:ring-2 focus:ring-blue-500"
                defaultValue="">
                <option value="" disabled>Seleccionar</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))
                }
            </select>
            { error && <div className="text-red-500 text-xs mt-2">{error}</div> }
        </div>
    );
};
  