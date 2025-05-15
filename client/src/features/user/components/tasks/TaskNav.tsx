import { Button } from "@/components/ui/button";
import { Calendar1, Plus, Sparkles } from "lucide-react";

export default function TaskNav() {
  return (
    <div className="mt-3 flex justify-between px-5 py-3">
      <h1 className="text-lg font-semibold flex space-x-1 justify-center items-center">
        <span>Today Task</span>
        <Calendar1 />
      </h1>
      <div className="flex space-x-3 justify-between">
        <Button className="bg-white border text-black hover:bg-white">
          <Plus />
          <span>Add New Task</span>
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-400">
          <Sparkles />
          <span>AI Generate</span>
        </Button>
      </div>
    </div>
  );
}
