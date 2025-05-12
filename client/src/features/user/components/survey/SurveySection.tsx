import { useCallback, useEffect, useState } from "react";
import SurveyField from "./SurveyField";
import SurveyNav from "./SurveyNav";
import { survey } from "@/assets/data/survey";
import type { SurveyResult, Survey } from "@/type/Survey";

export default function SurveySection() {
  const [surveyIndex, setSurveyIndex] = useState<number>(0);
  const [currentSurvey, setCurrentSurvery] = useState<Survey>(
    survey[surveyIndex]
  );
  const [surveyResult, setSurveyResult] = useState<SurveyResult>();

  useEffect(() => {
    setCurrentSurvery(survey[surveyIndex]);
  }, [surveyIndex]);

  useEffect(() => {
    console.log(surveyResult);
  }, [surveyResult]);

  const nextSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev + 1) % survey.length);
  }, [survey.length]);

  const backSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, [survey.length]);

  const updateSurveyResult = useCallback(
    (update: Partial<SurveyResult>) => {
      setSurveyResult((prev) => {
        return prev ? { ...prev, ...update } : { ...update } as SurveyResult;
      });
    },
    [survey.length]
  );

  return (
    <section>
      <SurveyNav onBack={backSurveyHandle} />
      <SurveyField
        updateResult={updateSurveyResult}
        total={survey.length}
        current={surveyIndex + 1}
        onNext={nextSurveyHandle}
        data={currentSurvey}
      />
    </section>
  );
}
