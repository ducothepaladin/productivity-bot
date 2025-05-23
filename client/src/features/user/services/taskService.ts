import API from "@/lib/api/apiConfig";
import type { TaskDemo } from "@/type/Task";

export const generateDemoTasks = async (scheduleBrief: {
  scheduleText: string;
}) => {
  try {
    const response = await API.post("/task/generate", scheduleBrief);
    return response.data;
  } catch (err) {
    console.log("Error generate", err);
    throw err;
  }
};

export const confirmGenerateTask = async (task: TaskDemo) => {
  try {
    const response = await API.post("/task/confirm", { demo: task });
    return response.data;
  } catch (err) {
    console.log("Error confirm", err);
    throw err;
  }
};

export const getTaskByDate = async (dateString: string) => {
  try {
    const response = await API.get("/task/by-date", { params: { dateString } });
    return response.data;
  } catch (err) {
    console.log("Error confirm", err);
    throw err;
  }
};


export const getTaskById = async (id: string) => {
  try {
    const response = await API.get(`/task/detail/${id}`);
    return response.data;
  } catch (err) {
    console.log("Error getting task", err);
    throw err;
  }
}
