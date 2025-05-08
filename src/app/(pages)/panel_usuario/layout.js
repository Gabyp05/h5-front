import { AuthProvider } from "@/app/contexts/Auth";
import { MobileSidebar } from "@/app/components/MobileSidebar";
import { Sidebar } from "@/app/components/Sidebar";

const PanelLayout = ({ children }) => {
    return (
        <AuthProvider>
            <div className="lg:flex lg:h-screen">
                <MobileSidebar role={"user"}/>
                <Sidebar role={"user"}/>
                <div className="flex-1 bg-gray-100 overflow-auto">
                    {children}
                </div>
            </div>
        </AuthProvider>
    );
};

export default PanelLayout;
