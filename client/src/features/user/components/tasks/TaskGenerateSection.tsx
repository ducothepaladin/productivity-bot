import { CalendarDays } from "lucide-react";
import TaskGenerateCard from "./TaskGenerateCard";
import TaskGenerateInput from "./TaskGenerateInput";
import DemoTaskDetail from "./DemoTaskDetail";
import useGenerateDemoTasks from "../../hooks/useGenerateDemoTasks";
import useTaskStore from "@/store/taskStore";
import { useEffect, useState } from "react";
import type { TaskDemo } from "@/type/Task";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TaskGenerateSection() {

  const {demoTasks} = useTaskStore();
  const {mutate} = useGenerateDemoTasks();

  const [index, setIndex] = useState<number>(0);
  const [task, setTask] = useState<TaskDemo>(demoTasks[0]);


  useEffect(() => {
    setTask(demoTasks[index]);
  },[index, demoTasks])



  return (
    <section className="mt-6 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col gap-6">
        <TaskGenerateInput generate={mutate} />
        <div className="border rounded-3xl shadow-md p-5 bg-white space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Generated Tasks
          </h2>
          {demoTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400">
              <CalendarDays className="w-8 h-8 mb-2" />
              <p className="text-center text-sm">No tasks generated yet...</p>
            </div>
          ) : (
            <ScrollArea className="h-[22rem]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {demoTasks.map((task, index) => (
                <TaskGenerateCard click={() => setIndex(index)} key={index} task={task} />
              ))}
            </div>
            </ScrollArea>
          )}
        </div>
      </div>
      <DemoTaskDetail task={task} />
    </section>
  );
}
