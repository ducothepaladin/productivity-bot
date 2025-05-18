import type { TaskDemo } from "@/type/Task";
import { create } from "zustand";

type TaskStore = {
  demoTasks: TaskDemo[];
  setDemoTasks: (tasks: TaskDemo[]) => void;
};

const useTaskStore = create<TaskStore>((set) => ({
  demoTasks: [],
  setDemoTasks: (tasks: TaskDemo[]) => {
    set({ demoTasks: [...tasks] });
  },
}));


export const getDemoTasks = () => useTaskStore.getState().demoTasks;

export default useTaskStore;
