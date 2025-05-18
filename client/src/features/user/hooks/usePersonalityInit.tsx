import type { SurveyResult } from "@/type/Survey";
import { useMutation } from "@tanstack/react-query";
import { initialSetup } from "../services/surveyService";
import { useNavigate } from "react-router-dom";
import useAppSettingStore from "@/store/appSettingStore";


export default function usePersonalityInit() {

  const navigate = useNavigate();
  const {setSurvey} = useAppSettingStore();

    


  return useMutation({
    mutationFn: (survey: {survey: SurveyResult}) => initialSetup(survey),
    onSuccess: (data) => {
      setSurvey(data.isSurvey);
      navigate("/user");
    }
  })
}
