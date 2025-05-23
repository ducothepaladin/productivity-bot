import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTaskById } from '../services/taskService'
import { useNavigate } from 'react-router-dom';

export default function useDeleteTask() {

    const queryClient = useQueryClient();

    const navigate = useNavigate();

  return useMutation({
    mutationFn: ({id}: {id: string, dateKey: string}) =>  deleteTaskById(id),
    onSuccess: (_,{id, dateKey}) => {
        queryClient.invalidateQueries({queryKey: ['tasks', dateKey]});
        queryClient.invalidateQueries({queryKey: ['tasks', id]});
        navigate("/user/tasks")
    }
  })
}
