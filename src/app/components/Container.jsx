export const Container = ({ children, personalizedClassName = "" }) => {
    return (
        <div className={`container mx-auto px-4 md:px-6 py-8 ${personalizedClassName}`}>
            <div className="md:bg-white md:rounded-md md:shadow-md md:p-6">
                {children}
            </div>
        </div>
    );
};
