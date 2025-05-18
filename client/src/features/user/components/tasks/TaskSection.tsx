import TaskListCard from "./TaskListCard";
import { dummyTasks } from "@/assets/dummy/dummyTasks";


export default function TaskSection() {
  return (
    <section className="mt-3 px-5 grid grid-cols-3 gap-3">
        {dummyTasks.map((task, i) => {
            return (
                <TaskListCard key={i} task={task} />
            )
        })}
    </section>
  )
}
