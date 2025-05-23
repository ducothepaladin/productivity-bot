import Personality from "../model/Personality.js";
import Task from "../model/Tasks.js";
import { generateId } from "../util/common.js";
import { generate } from "./aiServices.js";

export const generateTaskService = async (briefSchedule, userId) => {
  const personality = await Personality.findOne({ userId });

  const message = [
    {
      role: "system",
      content: `
You are a scheduling assistant. Your job is to generate a daily schedule of tasks in **pure JSON format**.

Use both:
- The user's **personality profile**
- The user's **brief daily input**

Each task must reflect:
- Chronotype
- Energy cycle
- Productivity style
- Focus span
- Preferred work times ('preferedWorkSlots')
- Avoid times ('avoidTimeSlots')
- Brief daily input (e.g., energy, appointments, focus, constraints)

⛔ DO NOT explain or include any extra text.
✅ ONLY respond with a raw JSON array like this:

[
  {
    "title": "Morning Planning",
    "description": "Plan priorities for the day.",
    "start_time": "2025-05-15T08:00:00",
    "end_time": "2025-05-15T08:30:00",
    "task_steps": [{"step": "Review calendar", "done": "false"}, {"step": "Write down goals", "done": "false"},{"step": "Set intention", "done": "false"}],
    "difficultyScore": 2, //1 to 10
    "task_type": "routine"
  },
  ...
]

Never respond with Markdown or wrap the JSON in triple backticks. Return **only valid JSON.**
    `,
    },
    {
      role: "user",
      content: `
User's personality profile: ${JSON.stringify(personality)}

Brief input from the user: "${briefSchedule}"

Generate a full day's schedule considering both inputs. Avoid 'avoidTimeSlots'. Prioritize 'preferedWorkSlots'.`,
    },
  ];

  const data = await generate(message);
  const generatedTasks = JSON.parse(data.replace(/```json|```/g, "").trim());

  const demoTasks = generatedTasks.map((task, index) => {
    const demoTask = { ...task, demo_id: `T-${generateId(index)}` };
    return demoTask;
  });

  return demoTasks;
};

export const confirmDemoTaskService = async (demo, userId) => {
  const { demo_id, ...rest } = demo;
  const task = {
    ...rest,
    user_id: userId,
    emotion: { count: rest.task_steps.length, value: [] },
  };

  const newTask = await Task.create(task);
  return newTask;
};

export const getTasksByDateService = async (dateString, userId) => {
  const date = new Date(dateString);
  const start = new Date(date.setHours(0, 0, 0, 0));
  const end = new Date(date.setHours(23, 59, 59, 999));

  const task = await Task.find({
    user_id: userId,
    createdAt: { $gte: start, $lte: end },
  });

  return task;
};


export const getTaskByIdService = async (id) => {
  const task = await Task.findById(id);
  return task;
}

export const updateStepService = async (id, index, value) => {
  await Task.updateOne({_id: id}, {$set: {
    [`task_steps.${index}.done`] : value
  }})
}


export const deleteTaskByIdService = async (id) => {
  await Task.findByIdAndDelete(id);
}
