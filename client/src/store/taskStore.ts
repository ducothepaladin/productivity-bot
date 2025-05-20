import type { TaskDemo } from "@/type/Task";
import { create } from "zustand";

type TaskStore = {
  demoTasks: TaskDemo[];
  setDemoTasks: (tasks: TaskDemo[]) => void;
  deleteDemoTask: (task: TaskDemo) => void;
  updateDemoTask: (task: TaskDemo) => void;
};

const useTaskStore = create<TaskStore>((set, get) => ({
  demoTasks: [],
  setDemoTasks: (tasks: TaskDemo[]) => {
    set({ demoTasks: [...tasks] });
  },
  deleteDemoTask: (task: TaskDemo) => {
    set({
      demoTasks: get().demoTasks.filter((item: TaskDemo) => item !== task),
    });
  },
  updateDemoTask: (task: TaskDemo) => {
    set({
      demoTasks: get().demoTasks.map((item) => {
        if (item.demo_id === task.demo_id) {
          return task;
        }
        return item;
      }),
    });
  },
}));

export const getDemoTasks = () => useTaskStore.getState().demoTasks;

export default useTaskStore;
