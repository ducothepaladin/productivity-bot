import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import z from "zod";
import {
  ListTodo,
  Timer,
  Clock,
  Award,
  Plus,
  Trash2,
  StickyNote,
  ClipboardList,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string(),
  start_time: z.string().min(1, "Start time is required"),
  end_time: z.string().min(1, "End time is required"),
  task_steps: z.array(
    z.object({ step: z.string().min(1, "Step cannot be empty") })
  ),
  difficultScore: z.number().min(1).max(10),
  task_type: z.string().min(1, "Task type is required"),
});

export default function CreateForm() {
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      task_steps: [{ step: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "task_steps",
  });

  const onSubmit = (values: z.infer<typeof taskSchema>) => {
    console.log("🧠 Submitted:", values);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-800 mb-8 flex items-center gap-2">
        <ClipboardList className="text-blue-600" />
        Create a New Task
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg"
        >
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  <ListTodo size={18} />
                  Title
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Morning Routine" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Task Type */}
          <FormField
            control={form.control}
            name="task_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  <StickyNote size={18} />
                  Task Type
                </FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Personal, Work" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 space-x-2">
            {/* Start Time */}
            <FormField
              control={form.control}
              name="start_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    <Timer size={18} />
                    Start Time
                  </FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End Time */}
            <FormField
              control={form.control}
              name="end_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    <Clock size={18} />
                    End Time
                  </FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Difficulty Score */}
          <FormField
            control={form.control}
            name="difficultScore"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-1">
                  <Award size={18} />
                  Difficulty (1–10)
                </FormLabel>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">1</span>
                  <span className="text-sm font-medium text-primary">
                    {field.value}
                  </span>
                  <span className="text-sm text-muted-foreground">10</span>
                </div>
                <FormControl>
                  <Slider
                    min={1}
                    max={10}
                    defaultValue={[1]}
                    step={1}
                    value={[field.value]}
                    onValueChange={(val) => field.onChange(val[0])}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Enter description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Task Steps */}
          <div className="md:col-span-2 border-t pt-4">
            <FormLabel className="flex items-center gap-2 mb-3 text-lg font-medium text-neutral-700">
              <ListTodo size={20} className="text-blue-600" />
              Task Steps
            </FormLabel>
            <div className="space-y-3 grid grid-cols-2 space-x-2">
              {fields.map((fieldItem, index) => (
                <FormField
                  key={fieldItem.id}
                  control={form.control}
                  name={`task_steps.${index}.step`}
                  render={({ field }) => (
                    <FormItem className="flex items-center border rounded-lg gap-2">
                      <FormControl>
                        <Input
                          placeholder={`Step ${index + 1}`}
                          {...field}
                          className="focus-visible:ring-0 focus-visible:outline-none focus-visible:border-none ring-0 outline-none border-none shadow-none"
                        />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="border-none text-red-400 hover:text-red-500 hover:bg-white outline-none ring-0 shadow-none"
                        onClick={() => remove(index)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="outline"
                className="bg-blue-50 hover:bg-blue-100"
                onClick={() => append({ step: "" })}
              >
                <Plus size={16} className="mr-2" />
                Add Step
              </Button>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-4">
            <Button
              type="submit"
              className="bg-blue-600 w-full hover:bg-blue-700 text-white"
            >
              Submit Task
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
