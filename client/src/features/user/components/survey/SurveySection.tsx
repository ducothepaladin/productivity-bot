import { useCallback, useEffect, useState } from "react";
import SurveyField from "./SurveyField";
import SurveyNav from "./SurveyNav";
import { survey } from "@/assets/data/survey";
import type { SurveyResult, Survey } from "@/type/Survey";
import usePersonalityInit from "../../hooks/usePersonalityInit";

export default function SurveySection() {
  const [surveyIndex, setSurveyIndex] = useState<number>(0);
  const [currentSurvey, setCurrentSurvery] = useState<Survey>(
    survey[surveyIndex]
  );
  const [surveyResult, setSurveyResult] = useState<SurveyResult>();
  const { mutate } = usePersonalityInit();

  useEffect(() => {
    setCurrentSurvery(survey[surveyIndex]);
  }, [surveyIndex]);


  useEffect(() => {
    console.log(surveyResult)
  },[surveyResult]);

  const nextSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev < survey.length - 1 ? prev + 1 : prev));
    console.log(survey.length - 1, surveyIndex);
    if (survey.length - 1 === surveyIndex) {
      mutate({ survey: surveyResult! });
    }
  }, [survey.length, surveyIndex, surveyResult]);

  const backSurveyHandle = useCallback(() => {
    setSurveyIndex((prev) => (prev > 0 ? prev - 1 : 0));
  }, [survey.length, surveyIndex, surveyResult]);

  const updateSurveyResult = useCallback(
    (update: Partial<SurveyResult>) => {
      setSurveyResult((prev) => {
        return prev ? { ...prev, ...update } : ({ ...update } as SurveyResult);
      });
    },
    [survey.length, surveyResult, surveyIndex]
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
        result={surveyResult}
      />
    </section>
  );
}
