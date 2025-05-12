import SurveyMultiSelect from "./SurveyMultiSelect";
import SurveySelect from "./SurveySelect";
import SurveyTimeRange from "./SurveyTimeRange";
import type { Survey } from "@/type/Survey";



type SurveyFieldProps = {
  onNext: () => void;
  data: Survey;
  total: number;
  current: number;
  updateResult: (update: any) => void;
}




export default function SurveyField({onNext, data, total, current, updateResult}: SurveyFieldProps) {




  return (
    <div className="w-3/4 mx-auto h-svh flex flex-col justify-center items-center p-8 transition-transform">
      <div className="flex flex-col h-1/2 justify-between items-center">
        <div>
          <p className="text-sm text-gray-800 mb-4 text-center">{current}/{total}</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            {data.question}
          </h2>
          <p className="text-center text-gray-600 mb-6 leading-relaxed">
            {data.description}
          </p>
        </div>
        {/* <SurveyTimeRange onNext={onNext} update={updateResult} dataKey={data.key} /> */}
        {/* <SurveySelect /> */}
        <SurveyMultiSelect />
      </div>
    </div>
  );
}
