import type { RegisterUser, ResponseAuth } from "@/type/Auth";
import { register } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";

export default function useRegister() {

    const {setAccessToken} = useAuthStore();

    return useMutation({
        mutationFn: (userData: RegisterUser) => register(userData),
        onSuccess: (userData: ResponseAuth) => {
            setAccessToken(userData.accessToken);
        }
    });
}
