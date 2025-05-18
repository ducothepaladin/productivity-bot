import { useState, useCallback, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import NextSurveyButton from "./NextSurveyButton";
import type { SurveyComponentProps } from "@/type/Survey";

export default function SurveyText({
  onNext,
  update,
  updateNote,
  dataKey,
  note,
  current,
}: SurveyComponentProps) {
  const [text, setText] = useState("");
  const maxLength = 2000;

  const progressPercentage = (text.length / maxLength) * 100;


  useEffect(() => {
      if(current && Object.keys(current).length > 0 && typeof current.value === 'string') {
        setText(current.value)
      }
    },[current])

  const nextSurvey = useCallback(() => {
    update({ [dataKey]: { value: text } });
    setText("");
    updateNote("");
    onNext();
  }, [update, dataKey, note, updateNote, onNext, text]);

  return (
    <>
      <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
        <label
          htmlFor="survey-text"
          className="text-base font-semibold text-gray-800"
        >
          Your Answer
        </label>
        <Textarea
          id="survey-text"
          className="w-[30rem] border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-md shadow-sm"
          placeholder="Write your answer here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxLength}
        />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {text.length}/{maxLength} characters
          </span>
          <div className="relative w-1/2 h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="my-6 flex justify-end">
        <NextSurveyButton next={nextSurvey} isDisable={text.length === 0} />
      </div>
    </>
  );
}
