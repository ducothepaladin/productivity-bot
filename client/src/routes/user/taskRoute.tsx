import TasksPage from "@/features/user/pages/TasksPage";
import TaskGeneratePage from "@/features/user/pages/TaskGeneratePage";
import TaskDetailPage from "@/features/user/pages/TaskDetailPage";
import CreateTaskPage from "@/features/user/pages/CreateTaskPage";

const taskRoute = [
  {
    path: "tasks",
    element: <TasksPage />,
  },
  {
    path: "tasks/generate",
    element: <TaskGeneratePage />,
  },
  {
    path: "tasks/detail/:id",
    element: <TaskDetailPage />,
  },
  {
    path: "tasks/create",
    element: <CreateTaskPage />,
  },
];

export default taskRoute;
