import { useCallback, useEffect, useState } from "react";
import SurveyField from "./SurveyField";
import SurveyNav from "./SurveyNav";
import { survey } from "@/assets/data/survey";
import usePersonalityInit from "../../hooks/usePersonalityInit";
import useSurveyStore from "@/store/surveyStore";

export default function SurveySection() {
  const [surveyIndex, setSurveyIndex] = useState<number>(0);
  const { mutate } = usePersonalityInit();

  const { currentSurvey, setCurrentSurvey, setCurrentResult, surveyResult } =
    useSurveyStore();

  const nextSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev < survey.length - 1 ? prev + 1 : prev));
    if (survey.length - 1 === surveyIndex) {
      mutate({ survey: surveyResult! });
    }
  }, [survey.length, surveyIndex, surveyResult]);

  const backSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, [survey.length, surveyIndex, surveyResult]);

  useEffect(() => {
    setCurrentSurvey(surveyIndex);
    setCurrentResult();
  }, [
    surveyIndex,
    currentSurvey,
    surveyResult,
    nextSurveyHandle,
    backSurveyHandle,
    setCurrentSurvey,
    setCurrentResult,
  ]);

  return (
    <section>
      <SurveyNav onBack={backSurveyHandle} />
      <SurveyField
        total={survey.length}
        current={surveyIndex + 1}
        onNext={nextSurveyHandle}
      />
    </section>
  );
}
