import ProtectedRoute from "@/components/common/ProtectedRoute";
import SurveyCheckRoute from "@/components/common/SurveyCheckRoute";
import DashBoardPage from "@/features/user/pages/DashBoardPage";
import SurveyPage from "@/features/user/pages/SurveyPage";
import TaskGeneratePage from "@/features/user/pages/TaskGeneratePage";
import TasksPage from "@/features/user/pages/TasksPage";
import UserLayout from "@/layouts/UserLayout";

const userRoute = [
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <SurveyCheckRoute>
          <UserLayout />
        </SurveyCheckRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "tasks",
        element: <TasksPage />,
      },
      {
        path: "tasks/generate",
        element: <TaskGeneratePage />,
      },
    ],
  },
  {
    path: "/user/survey",
    element: (
      <ProtectedRoute>
        <SurveyPage />,
      </ProtectedRoute>
    ),
  },
];

export default userRoute;
