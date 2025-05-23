import type { TaskType } from "@/type/Task";
import useGetTaskByDate from "../../hooks/useGetTaskByDate";
import TaskListCard from "./TaskListCard";
import { FileWarning } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function TaskSection() {

  const today = new Date().toISOString().split('T')[0];
  const {data, isLoading} = useGetTaskByDate(today);

  if(isLoading) {
    return <div>loading...</div>
  }

  return (
    <ScrollArea className="h-[42rem]">
      <section className="mt-3 px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.tasks && data.tasks.length > 0? data.tasks.sort((a:TaskType, b:TaskType) => new Date(a.end_time).getTime() - new Date(b.end_time).getTime()).map((task: TaskType, i:number) => {
            return (
                <TaskListCard key={i} task={task} />
            )
        }): <div className="grid col-span-full justify-center items-center">
              <div className="flex flex-col h-80 text-neutral-400 justify-center items-center">
                <FileWarning size={44} />
                <h1>No Tasks Today</h1>
              </div>
          </div>}
    </section>
    </ScrollArea>
  )
}
