import { useState } from "react";
import { RenderSurveyForm } from "./SurveyComponent";
import SurveyNote from "./SurveyNote";
import useSurveyStore from "@/store/surveyStore";

type SurveyFieldProps = {
  onNext: () => void;
  total: number;
  current: number;
};

export default function SurveyField({
  onNext,
  total,
  current,
}: SurveyFieldProps) {

  const {currentSurvey, currentResult, setSurveyResult} = useSurveyStore();
  const [note, setNote] = useState<string>(currentResult? currentResult.value: "");


  


  return (
    <div className="w-3/4 mx-auto h-svh flex flex-col justify-center items-center p-8 transition-transform">
      <div className="flex flex-col h-1/2 justify-between items-center">
        <div>
          <p className="text-sm text-gray-800 mb-4 text-center">
            {current}/{total}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {currentSurvey.question}
          </h2>
          <p className="text-center text-gray-600 mb-6 leading-relaxed">
            {currentSurvey.description}
          </p>
        </div>
        <RenderSurveyForm
          current={currentResult}
          type={currentSurvey.type}
          onNext={onNext}
          value={currentSurvey.values}
          update={setSurveyResult}
          dataKey={currentSurvey.key}
          note={note}
          updateNote={setNote}
        />
        <SurveyNote current={currentResult} update={setNote} note={note || ""} />
      </div>
    </div>
  );
}
