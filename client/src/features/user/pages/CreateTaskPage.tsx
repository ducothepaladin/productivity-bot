import UserBreadCrumb from "@/components/UserBreadCrumb";
import CreateForm from "../components/tasks/CreateForm";


export default function CreateTaskPage() {


  return (
    <div className="p-5">
        <UserBreadCrumb currentPageTitle="Create" links={[{name: "Tasks", path: "/user/tasks"}]} />
        <CreateForm />
    </div>
  )
}
