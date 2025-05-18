import { survey } from "@/assets/data/survey";
import type { Survey, SurveyResult } from "@/type/Survey";
import { create } from "zustand";

type SurveyStore = {
  currentSurvey: Survey;
  surveyResult: SurveyResult;
  currentResult: any;
  setCurrentResult: () => void;
  setCurrentSurvey: (index: number) => void;
  setSurveyResult: (result: any) => void;
};

const useSurveyStore = create<SurveyStore>((set, get) => ({
  currentSurvey: survey[0],
  surveyResult: {} as SurveyResult,
  currentResult: {},
  setCurrentSurvey: (index: number) => {
    set({ currentSurvey: survey[index] });
  },
  setSurveyResult: (result: any) => {
    set({ surveyResult: { ...get().surveyResult, ...result } });
  },
  setCurrentResult: () => {
    const objKey = get().currentSurvey.key as keyof SurveyResult;
    if (objKey in get().surveyResult) {
      set({ currentResult: get().surveyResult?.[objKey] ?? {} });
    }
  },
}));

export const getCurrentSurvey = useSurveyStore.getState().currentSurvey;
export const getSurveyResult = useSurveyStore.getState().surveyResult;
export const getCurrentResult = useSurveyStore.getState().currentResult;

export default useSurveyStore;
