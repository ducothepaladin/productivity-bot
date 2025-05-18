import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Calendar, Flame, Clock, ListTodo } from "lucide-react";

type Task = {
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  task_steps: string[];
  difficultyScore: number;
  task_type: string;
};

export default function TaskListCard({task}: {task: Task}) {
  const start = format(new Date(task.start_time), "hh:mm a");
  const end = format(new Date(task.end_time), "hh:mm a");
  const date = format(new Date(task.start_time), "PP");

  const progress = Math.floor((task.task_steps.length / 10) * 100);

  return (
    <Card className="rounded-xl border shadow-sm">
      <CardHeader className="h-32 flex flex-col justify-start">
        <div className="flex w-full justify-between items-center mb-2">
          <span className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground font-mono">
            T-123
          </span>
          <Badge variant="outline" className="bg-yellow-200 text-yellow-900">
            Pending
          </Badge>
        </div>
        <CardTitle className="text-base font-semibold flex items-center space-x-2 leading-snug">
          <span>{task.title}</span>
          <Badge variant="secondary" className="capitalize">
            {task.task_type}
          </Badge>
        </CardTitle>

        <CardDescription>{task.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 grid grid-cols-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span>
            {start} – {end}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-red-500" />
          <span>Difficulty: {task.difficultyScore}/10</span>
        </div>
        <div className="flex items-center gap-2">
          <ListTodo className="h-4 w-4 text-muted-foreground" />
          <span>{task.task_steps.length} Steps</span>
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="flex flex-col gap-2 items-start">
        <div className="w-full flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="text-xs text-muted-foreground">
            {progress / task.task_steps.length}
          </span>
        </div>
        <Progress className="w-full [&>*]:bg-blue-500" value={progress} />
      </CardFooter>
    </Card>
  );
}
