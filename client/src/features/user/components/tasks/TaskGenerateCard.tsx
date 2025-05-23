import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { TaskDemo } from "@/type/Task";

export default function TaskGenerateCard({
  task,
  click,
  isSelected,
}: {
  task: TaskDemo;
  click: any;
  isSelected: boolean;
}) {
  return (
    <Card
      onClick={click}
      className={`hover:bg-gray-50 cursor-default transition-all ${
        isSelected && "bg-neutral-700 text-white hover:bg-neutral-700"
      }`}
    >
      <CardHeader>
        <div className="flex justify-between items-center text-sm">
          <span className="text-xs">{task.demo_id}</span>
          <Badge className="bg-blue-500 text-white">{task.task_type}</Badge>
        </div>
        <p className="text-xs text-muted-foreground mb-1">
          {format(new Date(task.start_time), "hh:mm a")} -{" "}
          {format(new Date(task.end_time), "hh:mm a")}
        </p>
        <p className="text-xs text-muted-foreground mb-1">
          Difficulty:{" "}
          <Badge variant="secondary">{task.difficultyScore}/10</Badge>
        </p>
        <p className="text-xs text-muted-foreground">
          Steps: {task.task_steps.length}
        </p>
      </CardHeader>
    </Card>
  );
}
