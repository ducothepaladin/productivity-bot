import type { TaskDemo } from "@/type/Task";
import { useMutation } from "@tanstack/react-query";
import { confirmGenerateTask } from "../services/taskService";


export default function useConfirmGenerateTask() {
  return useMutation({
    mutationFn: (data: TaskDemo) => confirmGenerateTask(data),
  })
}
