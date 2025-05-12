import SurveyMultiSelect from "./SurveyMultiSelect"
import SurveySelect from "./SurveySelect"
import SurveyTag from "./SurveyTag"
import SurveyText from "./SurveyText"
import SurveyTimeRange from "./SurveyTimeRange"


const SurveyComponents = {
  "select": SurveySelect,
  "multi-select": SurveyMultiSelect,
  "tag-input": SurveyTag,
  "time-multi-range": SurveyTimeRange,
  "textarea": SurveyText
}



export const RenderSurveyForm = ({type, ...props}: {type: keyof typeof SurveyComponents} & Record<string, any>) => {
      const SurveyComponent = SurveyComponents[type];
  return SurveyComponent ? <SurveyComponent {...(props as any)} /> : null;
}

