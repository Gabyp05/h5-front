export const DashHeader = ({ title }) => {
    return (
        <div className="w-full bg-white py-2 px-4 md:px-6 border-b border-gray-200">
            <h1 className="font-bold text-xl pt-2 pb-1">{title}</h1>
        </div>
    );
};
