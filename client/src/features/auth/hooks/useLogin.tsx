import type { Credential, ResponseAuth } from "@/type/Auth";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authServices";
import useAuthStore from "@/store/authStore";

export default function useLogin() {
  const { setAccessToken } = useAuthStore();

  return useMutation({
    mutationFn: (data: Credential) => login(data),
    onSuccess: (userData: ResponseAuth) => {
      setAccessToken(userData.accessToken);
    },
  });
}
