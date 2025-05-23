import ProtectedRoute from "@/components/common/ProtectedRoute";
import SurveyCheckRoute from "@/components/common/SurveyCheckRoute";
import DashBoardPage from "@/features/user/pages/DashBoardPage";
import SurveyPage from "@/features/user/pages/SurveyPage";
import UserLayout from "@/layouts/UserLayout";

import taskRoute from "./taskRoute";

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
      ...taskRoute,
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
