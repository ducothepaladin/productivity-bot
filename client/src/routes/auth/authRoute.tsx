import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import AuthLayout from "@/layouts/AuthLayout";


const authRoute = [
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "/auth/register",
                element: <RegisterPage />
            }
        ]
    }
]


export default authRoute;