import type { RegisterResponse, RegisterUser } from "@/type/Auth";
import { register } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";

export default function useRegister() {

    const {setAccessToken} = useAuthStore();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (userData: RegisterUser) => register(userData),
        onSuccess: (userData: RegisterResponse) => {
            setAccessToken(userData.accessToken);
            navigate("/survey");
        }
    });
}
