import ProtectedRoute from "@/components/common/ProtectedRoute";
import DashBoardPage from "@/features/user/pages/DashBoardPage";
import SurveyPage from "@/features/user/pages/SurveyPage";
import TasksPage from "@/features/user/pages/TasksPage";
import UserLayout from "@/layouts/UserLayout";

const userRoute = [
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoardPage />
      },
      {
        path: "tasks",
        element: <TasksPage />
      }
    ],
  },
  {
    path: "/user/survey",
    element: <SurveyPage />,
  },
];

export default userRoute;
