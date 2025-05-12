import { useState } from "react";
import NextSurveyButton from "./NextSurveyButton";

export default function SurveyMultiSelect() {
  const dummy = ["Morning", "Afternoon", "Evening", "Night Owl"];
  const [selectValue, setSelectValue] = useState<string[]>([]);




  const handleMultiSelect = (value: string) => {

    setSelectValue((prev) =>  {
        const exist = prev.find((pr) => pr === value);
        if (exist) {
            return prev.filter((item) => item !== exist);
        }
        return [...prev, value];
    });


  }

  return (
    <>
      <div className="flex justify-center flex-wrap w-[28rem] items-center gap-6">
        {dummy.map((item, i) => {
          const isSelect = selectValue.find((sl) => sl === item);

          return (
            <div
              key={i}
              onClick={() => handleMultiSelect(item)}
              className={`w-36 px-4 py-3 rounded-full border shadow-lg text-center cursor-pointer transition-all transform duration-300
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
        <p className="text-sm text-gray-400 text-center">You can select mutiple value</p>
      </div>
      <div className="mt-6">
        <NextSurveyButton next={() => {}} isDisable={!(selectValue.length > 0)} />
      </div>
    </>
  );
}
