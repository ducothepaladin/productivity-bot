import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppSettingStore = {
  isSurvey: boolean;
  setSurvey: (check: boolean) => void;
};

const useAppSettingStore = create<AppSettingStore>()(
  persist(
    (set) => ({
      isSurvey: false,
      setSurvey: (check: boolean) => {
        set({ isSurvey: check });
      },
    }),
    {
      name: "app-setting",
    }
  )
);


export const getIsSurvey = () => useAppSettingStore.getState().isSurvey;

export default useAppSettingStore;
