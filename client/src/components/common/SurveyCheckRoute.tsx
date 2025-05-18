import { getIsSurvey } from "@/store/appSettingStore";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SurveyCheckRoute({
  children,
}: {
  children: ReactNode;
}) {
  const isSurvey = getIsSurvey();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSurvey) {
      navigate("/user/survey");
    }
  }, [isSurvey]);

  return <div>{children}</div>;
}
