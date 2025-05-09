import ProtectedRoute from "@/components/common/ProtectedRoute";
import SurveyPage from "@/features/survey/pages/SurveyPage";
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
        path: "/user/survey",
        element: <SurveyPage />,
      },
    ],
  },
];

export default userRoute;
