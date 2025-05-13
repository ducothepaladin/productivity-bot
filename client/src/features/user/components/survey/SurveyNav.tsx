import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";


type SurveyNavProps = {
    onBack: () => void;
}

export default function SurveyNav({onBack}: SurveyNavProps) {
    return (
        <div className="flex justify-between items-center fixed w-full top-0 px-6 py-4">
            <Button onClick={onBack} className="bg-transparent ring-1 ring-gray-300 cursor-pointer hover:ring-blue-500 hover:bg-transparent text-blue-600 px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95">
                Back
            </Button>
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
                Logo
            </h1>
            <Link
                to="/"
                className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 bg-white"
            >
                <Home className="w-6 h-6" />
            </Link>
        </div>
    );
}
