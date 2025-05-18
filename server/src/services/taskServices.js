import Personality from "../model/Personality.js";
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
    "task_steps": ["Review calendar", "Write down goals", "Set intention"],
    "difficultyScore": 2,
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
