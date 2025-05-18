import { useCallback, useState, useEffect } from "react";
import NextSurveyButton from "./NextSurveyButton";
import type { SurveyComponentProps } from "@/type/Survey";
import useSurveyStore from "@/store/surveyStore";

export default function SurveySelect({onNext, value, update, note, updateNote, dataKey, current}:SurveyComponentProps) {


  const { currentSurvey, setSurveyResult} = useSurveyStore();


  const [selectValue, setSelectValue] = useState("");


  useEffect(() => {
      if(current && Object.keys(current).length > 0) {
        setSelectValue(current.value)
      }
    },[current])



  const nextSurvey = useCallback(() => {
          update({[dataKey]: {value: selectValue, note}});
          setSurveyResult({[currentSurvey.key]: {value: selectValue, note} })
          setSelectValue("");
          updateNote("");
          onNext();
  }, [update, dataKey, note, updateNote, onNext, selectValue])

  return (
    <>
      <div className="flex justify-center flex-wrap w-[28rem] items-center gap-6">
        {value.map((item, i) => {
          const isSelect = selectValue === item;

          return (
            <div
              key={i}
              onClick={() => setSelectValue(item)}
              className={`w-36 px-4 py-3 text-sm rounded-full border shadow-lg text-center cursor-pointer 
                ${
                  isSelect
                    ? "bg-blue-600 text-white border-blue-400 hover:bg-blue-500 scale-105"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 hover:scale-105"
                }`}
            >
              {item}
            </div>
          );
        })}
        
      </div>
      <p className="text-sm my-6 text-gray-400 text-center">
          You can select one value
        </p>
      <div className="mb-6">
        <NextSurveyButton next={nextSurvey} isDisable={!selectValue} />
      </div>
    </>
  );
}
