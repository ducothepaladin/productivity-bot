import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TagIcon,
  Edit3,
  CheckCircle2,
  Trash2,
  Plus,
  X,
  Info,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { TaskDemo } from "@/type/Task";
import useConfirmGenerateTask from "../../hooks/useConfirmGenerateTask";
import useTaskStore from "@/store/taskStore";

const schema = z.object({
  title: z.string().min(1),
  description: z.string(),
  start_time: z.string(),
  end_time: z.string(),
  task_steps: z.array(z.object({ step: z.string().min(1) })),
});

export default function DemoTaskDetail({ task }: { task: TaskDemo }) {
  if (!task) {
    return (
      <div className="p-6 w-full border rounded-3xl flex justify-center items-center shadow-xl bg-white space-y-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">
          <Info className="w-8 h-8 mb-2" />
          <p className="text-center text-sm">There is no task..</p>
        </div>
      </div>
    );
  }

  const [isEdit, setIsEdit] = useState(false);
  const start = format(new Date(task.start_time), "hh:mm a");
  const end = format(new Date(task.end_time), "hh:mm a");

  const { mutate } = useConfirmGenerateTask();
  const { deleteDemoTask, updateDemoTask } = useTaskStore();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: task.title,
      description: task.description,
      start_time: task.start_time,
      end_time: task.end_time,
      task_steps: task.task_steps.map((step) => ({
        step: step.step,
        done: step.done,
      })),
    },
  });

  const { register, control, handleSubmit, reset } = form;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "task_steps",
  });

useEffect(() => {
  reset({
    title: task.title,
    description: task.description,
    start_time: task.start_time,
    end_time: task.end_time,
    task_steps: task.task_steps.map((step) => ({
      step: step.step,
      done: step.done,
    })),
  });
}, [task, reset]);

  const onSubmit = () => {
    mutate(task);
    setIsEdit(false);
  };

  const handleDelete = () => {
    deleteDemoTask(task);
  };

  const handleSaveChanges = (data: any) => {
    updateDemoTask({ ...task, ...data });
    setIsEdit(false);
  };

  return (
    <div>
      <div className="p-6 border rounded-3xl shadow-xl bg-white space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center justify-between">
          <Badge className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {task.demo_id}
            <TagIcon size={16} className="ml-1" />
          </Badge>
          <Button
            onClick={() => setIsEdit((prev) => !prev)}
            variant="outline"
            className="gap-2"
          >
            <Edit3 size={16} /> {isEdit ? "Cancel" : "Edit"}
          </Button>
        </div>

        <form onSubmit={handleSubmit(handleSaveChanges)} className="space-y-5">
          {isEdit ? (
            <>
              <Input
                {...register("title")}
                className="text-2xl font-semibold"
              />
              <Textarea
                {...register("description")}
                className="text-sm text-gray-600"
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block mb-2 text-gray-700">Start Time</Label>
                  <Input type="time" {...register("start_time")} />
                </div>
                <div>
                  <Label className="block mb-2 text-gray-700">End Time</Label>
                  <Input type="time" {...register("end_time")} />
                </div>
              </div>

              <Separator />
              <div className="space-y-3">
                <Label className="text-sm text-gray-700">Task Steps</Label>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex gap-2">
                    <Input
                      {...register(`task_steps.${index}.step`)}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => remove(index)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => append({ step: "" })}
                  className="gap-1 w-full"
                >
                  <Plus size={16} /> Add Step
                </Button>
              </div>
              <Separator />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
              <p className="text-gray-600 text-sm">{task.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                <div>
                  <p className="font-semibold text-gray-700">Start Time:</p>
                  <Badge variant="outline" className="px-3 py-1 mt-1">
                    {start}
                  </Badge>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">End Time:</p>
                  <Badge variant="outline" className="px-3 py-1 mt-1">
                    {end}
                  </Badge>
                </div>
              </div>

              <Separator className="my-4" />
              <div className="space-y-2">
                <p className="font-semibold text-gray-700">Steps</p>
                {task.task_steps.map((step, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    {step.step}
                  </p>
                ))}
              </div>
            </>
          )}

          {isEdit ? (
            <Button type="submit" className="w-full gap-1">
              <CheckCircle2 size={16} /> Save Changes
            </Button>
          ) : (
            <div className="grid grid-cols-2 gap-3 pt-3">
              <Button
                type="button"
                onClick={handleDelete}
                variant="outline"
                className="gap-1"
              >
                <Trash2 size={16} /> Delete
              </Button>
              <Button type="button" onClick={onSubmit} className="gap-1">
                <CheckCircle2 size={16} /> Confirm
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
