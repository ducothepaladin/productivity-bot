import UserBreadCrumb from "@/components/UserBreadCrumb";
import TaskGenerateSection from "@/features/user/components/tasks/TaskGenerateSection";
import TaskGenerateHeader from "../components/tasks/TaskGenerateHeader";


export default function TaskGeneratePage() {
  return (
    <div className="p-5">
        <UserBreadCrumb currentPageTitle="Generate" links={[{name: "Tasks", path: "/user/tasks"}]} />
        <TaskGenerateHeader />
        <TaskGenerateSection />
    </div>
  )
}
