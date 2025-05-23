import { useQuery } from "@tanstack/react-query";
import { getTaskByDate } from "../services/taskService";


export default function useGetTaskByDate(dateKey: string) {
  return useQuery({
    queryKey: ['tasks', dateKey],
    queryFn: () => getTaskByDate(dateKey),
  })
}
