import type { RegisterUser } from "@/type/Auth";
import { register } from "../services/authServices";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {

    return useMutation({
        mutationFn: (userData: RegisterUser) => register(userData),
    });
}
