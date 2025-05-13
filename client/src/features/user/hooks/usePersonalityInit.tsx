import type { SurveyResult } from "@/type/Survey";
import { useMutation } from "@tanstack/react-query";
import { initialSetup } from "../services/surveyService";
import { useNavigate } from "react-router-dom";


export default function usePersonalityInit() {

  const navigate = useNavigate();

    


  return useMutation({
    mutationFn: (survey: {survey: SurveyResult}) => initialSetup(survey),
    onSuccess: () => {
      navigate("/user");
    }
  })
}
