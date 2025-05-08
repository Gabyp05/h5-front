import { AuthProvider } from "@/app/contexts/Auth";
import { Login as Form } from "@/app/components/auth/Login";

const Login = () => {
    return (
        <AuthProvider>
            <div className="h-screen bg-gray-100">
                <Form />
            </div>
        </AuthProvider>
    );
};

export default Login;
