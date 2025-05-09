import {createBrowserRouter} from "react-router-dom"
import publicRoute from "./public/publicRoute";
import authRoute from "./auth/authRoute";
import userRoute from "./user/userRoute";
import SurveyPage from "@/features/survey/pages/SurveyPage";
import ProtectedRoute from "@/components/common/ProtectedRoute";

const router = createBrowserRouter([
    {
        errorElement: <div>404</div>,
    },
    {
        path: "/survey",
        element: <ProtectedRoute children={<SurveyPage />} />
    },
    ...publicRoute,
    ...authRoute,
    ...userRoute
]);


export default router;