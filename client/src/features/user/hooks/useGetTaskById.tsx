import { useQuery } from "@tanstack/react-query";
import { getTaskById } from "../services/taskService";


export default function useGetTaskById(id: string) {
  return useQuery({
    queryKey: ['tasks', id],
    queryFn: () => getTaskById(id)
  })
}
