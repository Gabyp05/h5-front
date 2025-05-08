export const UserTabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="flex rounded-lg overflow-hidden border border-gray-300">
            {
                tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-4 py-2 text-sm font-medium text-gray-600 transition uppercase 
                        ${activeTab === tab.id ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`}>
                        {tab.label}
                    </button>
                ))
            }
        </div>
    );
};
