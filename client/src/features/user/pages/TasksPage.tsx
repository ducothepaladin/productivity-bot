import UserBreadCrumb from "@/components/UserBreadCrumb";
import TaskSection from "../components/tasks/TaskSection";
import TaskNav from "../components/tasks/TaskNav";


export default function TasksPage() {
  return (
    <div className="p-5">
      <UserBreadCrumb currentPageTitle="Tasks" />
      <TaskNav />
      <TaskSection />
    </div>
  )
}
