import { Button } from "@/components/ui/button";
import { getIsSurvey } from "@/store/appSettingStore";
import { getAccessToken } from "@/store/authStore";
import { Link } from "react-router-dom";

export default function LandingInterface() {
  const isSurvey = getIsSurvey();
  const token = getAccessToken();

  return (
    <section className="w-full pt-20 h-svh p-4">
      <div className="w-full h-full flex justify-center rounded-4xl shadow-2xl border border-gray-400 items-center bg-neutral-200 backdrop-blur-md bg-opacity-80">
        <div className="flex flex-col gap-8 text-center text-gray-800 px-8">
          <h1 className="text-7xl font-extrabold drop-shadow-2xl tracking-wider">
            Be Productive with Pobo
          </h1>
          <p className="text-xl font-medium drop-shadow-md text-gray-700 leading-relaxed">
            Your personal productivity assistant
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to={token ? (isSurvey ? "/user" : "/user/survey") : "/auth"}
              className="cursor-pointer"
            >
              <Button className="px-10 py-5 bg-blue-500 cursor-pointer text-white font-semibold rounded-full shadow-xl hover:bg-blue-400 hover:scale-105 transition-transform duration-300 active:scale-95">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
