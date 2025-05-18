import { useMutation } from "@tanstack/react-query";
import { generateDemoTasks } from "../services/taskService";
import useTaskStore from "@/store/taskStore";


export default function useGenerateDemoTasks() {

  const {setDemoTasks} = useTaskStore();


  return useMutation({
    mutationFn: (data:{scheduleText: string}) => generateDemoTasks(data),
    onSuccess: (data) => {
      setDemoTasks(data.demoTasks);
    }
  })
}
