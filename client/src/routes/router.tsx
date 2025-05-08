import {createBrowserRouter} from "react-router-dom"
import publicRoute from "./public/publicRoute";
import authRoute from "./auth/authRoute";

const router = createBrowserRouter([
    {
        errorElement: <div>404</div>,
    },
    ...publicRoute,
    ...authRoute

]);


export default router;