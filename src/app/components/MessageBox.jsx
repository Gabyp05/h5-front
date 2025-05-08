export const MessageBox = ({ description, date }) => {
    return (
        <div className="px-3 py-2 bg-gray-100 rounded-md shadow-sm mb-4">
            <p className="text-sm text-gray-700">{description}</p>
            <p className="text-gray-600 text-xs mt-2">{date}</p>
        </div>
    );
};
