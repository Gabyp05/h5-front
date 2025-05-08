export const Summary = ({ title, value, Icon, colorIcon }) => {
    return (
        <div className="flex justify-between items-start px-5 py-6 rounded-md shadow-md bg-white w-full max-w-sm">
            <div>
                <p className="text-xs text-gray-400 font-semibold">{title}</p>
                <p className="text-2xl font-bold text-black pt-3">{value}</p>
            </div>
            <div className={`${colorIcon}`}>
                <Icon size={16} />
            </div>
        </div>
    );
};
