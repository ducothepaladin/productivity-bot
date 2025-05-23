import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { formatAMPM } from "@/lib/util/format";
import type { TaskType } from "@/type/Task";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  Trash2,
  SkipForward,
  CheckCircle2,
  Tag,
  Flame,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";
import { getDifficultyColor, getDifficultyLabel } from "@/lib/util/helper";
import useDeleteTask from "../../hooks/useDeleteTask";

export default function TaskDetail({ task }: { task: TaskType }) {
  const today = new Date().toISOString().split("T")[0];

  const progress = Math.floor(
    (task.task_steps.filter((step) => step.done).length / 10) * 100
  );

  const { mutate } = useDeleteTask();

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div className="space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-extrabold text-neutral-800">
              {task.title}
            </h1>
            <Badge className="rounded-full bg-blue-100 text-blue-800 flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {task.status}
            </Badge>
            <Badge
              className="rounded-full px-3 py-1 flex items-center gap-1"
              variant="outline"
            >
              <ClipboardList className="w-4 h-4" />
              {task.task_type} type
            </Badge>
          </div>

          <p className="text-lg mt-2 text-neutral-700">{task.description}</p>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <Badge className="flex items-center gap-2 bg-neutral-100 text-neutral-700 rounded-full px-3 py-1">
              <CalendarDays className="w-4 h-4" />
              {format(new Date(task.createdAt!), "PPP")}
            </Badge>

            <Badge
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${getDifficultyColor(
                task.difficultyScore
              )}`}
            >
              <Flame className="w-4 h-4" />
              {getDifficultyLabel(task.difficultyScore)} ({task.difficultyScore}
              /10)
            </Badge>
          </div>
        </div>
        <div>
          <Badge className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full flex items-center gap-2">
            <CalendarClock className="w-4 h-4" />
            {formatAMPM(
              task.start_time
            )} <ArrowRight className="w-4 h-4" /> {formatAMPM(task.end_time)}
          </Badge>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <h2 className="text-2xl col-span-1 font-semibold text-neutral-800 flex items-center gap-2">
              <ClipboardList className="w-6 h-6" />
              Task Steps
            </h2>
            <div className="flex flex-col col-span-1 gap-2 items-start">
              <div className="w-full flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Progress</span>
                <span className="text-xs text-muted-foreground">
                  {progress}
                </span>
              </div>
              <Progress className="w-full [&>*]:bg-blue-500" value={progress} />
            </div>
          </div>
          <ul className="p-4 mt-3 rounded-xl shadow-xl bg-white space-y-3">
            {task.task_steps.map((taskStep, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-4 border border-neutral-200 rounded-lg px-4 py-2"
              >
                <Label className="text-base text-neutral-700">
                  {taskStep.step}
                </Label>
                <Checkbox />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-2">
          <Button
            type="button"
            onClick={() => mutate({ id: task._id, dateKey: today })}
            variant="destructive"
            className="flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <SkipForward className="w-4 h-4" />
            Skip
          </Button>
          <Button className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
}
