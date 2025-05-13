import type { Credential, LoginResponse } from "@/type/Auth";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authServices";
import useAuthStore from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import useAppSettingStore from "@/store/appSettingStore";

export default function useLogin() {
  const { setAccessToken } = useAuthStore();
  const { setSurvey} = useAppSettingStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: Credential) => login(data),
    onSuccess: (userData: LoginResponse) => {
      setAccessToken(userData.accessToken);
      console.log(userData);
      setSurvey(userData.isSurvey);

      if(!userData.isSurvey) {
        navigate("/user");
      }
      navigate("/user/survey");
    },
  });
}
