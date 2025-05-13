import { useState } from "react";
import { RenderSurveyForm } from "./SurveyComponent";
import type { Survey } from "@/type/Survey";
import SurveyNote from "./SurveyNote";

type SurveyFieldProps = {
  onNext: () => void;
  data: Survey;
  total: number;
  current: number;
  updateResult: (update: any) => void;
};

export default function SurveyField({
  onNext,
  data,
  total,
  current,
  updateResult,
}: SurveyFieldProps) {

  const [note, setNote] = useState<string>();


  return (
    <div className="w-3/4 mx-auto h-svh flex flex-col justify-center items-center p-8 transition-transform">
      <div className="flex flex-col h-1/2 justify-between items-center">
        <div>
          <p className="text-sm text-gray-800 mb-4 text-center">
            {current}/{total}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {data.question}
          </h2>
          <p className="text-center text-gray-600 mb-6 leading-relaxed">
            {data.description}
          </p>
        </div>
        <RenderSurveyForm
          type={data.type}
          onNext={onNext}
          value={data.values}
          update={updateResult}
          dataKey={data.key}
          note={note}
          updateNote={setNote}
        />
        <SurveyNote update={setNote} note={note || ""} />
      </div>
    </div>
  );
}
