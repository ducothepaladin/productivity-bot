import LandingPage from "@/features/public/pages/LandingPage";
import MainLayout from "@/layouts/MainLayout";

const publicRoute = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
];

export default publicRoute;