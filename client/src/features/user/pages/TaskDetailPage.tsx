
import { useParams } from 'react-router-dom'
import TaskDetail from '../components/tasks/TaskDetail'
import useGetTaskById from '../hooks/useGetTaskById';
import UserBreadCrumb from '@/components/UserBreadCrumb';

export default function TaskDetailPage() {

    const {id} = useParams();
    if(!id) return;
    const {data: task, isLoading} = useGetTaskById(id);

    if(isLoading) {
        return <div>Loading...</div>
    }


  return (
    <div className='p-5'>
        <UserBreadCrumb currentPageTitle={task.title} links={[{name: "Tasks", path: "/user/tasks"}]} />
        <TaskDetail task={task} />
    </div>
  )
}
