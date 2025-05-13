import {createBrowserRouter} from "react-router-dom"
import publicRoute from "./public/publicRoute";
import authRoute from "./auth/authRoute";
import userRoute from "./user/userRoute";

const router = createBrowserRouter([
    {
        errorElement: <div>404</div>,
    },
    ...publicRoute,
    ...authRoute,
    ...userRoute
]);


export default router;