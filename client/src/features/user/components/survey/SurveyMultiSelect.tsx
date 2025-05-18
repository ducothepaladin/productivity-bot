import { useState, useCallback, useEffect } from "react";
import NextSurveyButton from "./NextSurveyButton";
import type { SurveyComponentProps } from "@/type/Survey";

export default function SurveyMultiSelect({
  onNext,
  value,
  dataKey,
  update,
  updateNote,
  note,
  current,
}: SurveyComponentProps) {
  const [selectValue, setSelectValue] = useState<string[]>([]);


  useEffect(() => {
    if(current && Object.keys(current).length > 0 && Array.isArray(current.value)) {
      setSelectValue([...current.value])
    }
  },[current])

  const handleMultiSelect = (value: string) => {
    setSelectValue((prev) => {
      const exist = prev.find((pr) => pr === value);
      if (exist) {
        return prev.filter((item) => item !== exist);
      }
      return [...prev, value];
    });
  };

  const nextSurvey = useCallback(() => {
    update({ [dataKey]: { value: [...selectValue], note } });
    setSelectValue([]);
    updateNote("");
    onNext();
  }, [update, dataKey, note, updateNote, onNext, selectValue]);

  return (
    <>
      <div className="flex justify-center flex-wrap w-[28rem] items-center gap-6">
        {value.map((item, i) => {
          const isSelect = selectValue.find((sl) => sl === item);

          return (
            <div
              key={i}
              onClick={() => handleMultiSelect(item)}
              className={`w-36 px-4 py-3 rounded-full text-sm border shadow-lg text-center cursor-pointer transition-all transform duration-300
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
      <p className="text-sm mt-6 text-gray-400 text-center">
        You can select mutiple value
      </p>
      <div className="my-6">
        <NextSurveyButton
          next={nextSurvey}
          isDisable={!(selectValue.length > 0)}
        />
      </div>
    </>
  );
}
