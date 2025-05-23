import type { TaskDemo } from "@/type/Task";
import { useMutation } from "@tanstack/react-query";
import { confirmGenerateTask } from "../services/taskService";
import useTaskStore from "@/store/taskStore";


export default function useConfirmGenerateTask() {

  const deleteDemoTask = useTaskStore((state) => state.deleteDemoTask);

  return useMutation({
    mutationFn: (data: TaskDemo) => confirmGenerateTask(data),
    onSuccess: (_, data) => {
      console.log(data);
      deleteDemoTask(data)
    }
  })
}
