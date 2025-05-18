import { useNavigate } from "react-router-dom";
import SurveySection from "../components/survey/SurveySection";
import { getIsSurvey } from "@/store/appSettingStore";
import { useEffect } from "react";

export default function SurveyPage() {
  const navigate = useNavigate();
  const isSurvey = getIsSurvey();

  useEffect(() => {
    if (isSurvey) {
      navigate("/user");
    }
  }, []);

  return (
    <div>
      <SurveySection />
    </div>
  );
}
