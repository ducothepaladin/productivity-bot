import { generate } from "./aiServices.js";
import Personality from "../model/Personality.js";

export const initialSetupService = async ({ survey, userId }) => {
  const messages1 = [
    {
      role: "system",
      content:
        "You are an assistant that generates structured personality insights based on survey input. Respond ONLY in JSON format matching the structure below. For each field, use the structure: { value: ..., note: ... }. For dailyHabits, use an array of { name, value, note }.",
    },
    {
      role: "user",
      content: `User's survey response: ${JSON.stringify(survey)}.
      
      Generate a structured personality profile using this sample format:
      
      {
        "chronotype": { "value": "Night Owl", "note": "User prefers working late at night and sleeps late." },
        "energyCycle": { "value": "Peaks in afternoon", "note": "Energy is highest between 2PM and 5PM." },
        "focusSpanMinute": { "value": 90, "note": "User can stay focused for about 90 minutes before needing a break." },
        "productivityStyle": { "value": "Solo", "note": "Prefers working independently on deep tasks." },
        "goalApproch": { "value": "Step-by-step", "note": "Breaks goals into small, manageable steps." },
        "stressTolerance": { "value": "Moderate", "note": "Handles stress well with some structure." },
        "motivationType": { "value": "Intrinsic", "note": "Motivated by internal goals and purpose." },
        "preferedTaskType": { "value": "Creative tasks", "note": "Enjoys generating ideas and designing workflows." },
        "dislikedTaskType": { "value": "Repetitive data entry", "note": "Gets bored with monotonous tasks." },
        "toolsUsed": { "value": ["Notion", "Trello"], "note": "Uses tools that support visual planning." },
        "preferedWorkSlots": { "value": ["10AM-1PM", "3PM-6PM"], "note": "These slots match user's energy flow." },
        "avoidTimeSlots": { "value": ["8AM-9AM"], "note": "Avoids early hours due to slow start." },
        "taskOverloadReaction": { "value": "Anxiety", "note": "Gets overwhelmed and procrastinates." },
        "taskSwitchingTendency": { "value": "Low", "note": "Prefers to finish one task before moving on." },
        "dailyHabits": [
          { "name": "morningRoutine", "value": true, "note": "User follows a consistent morning prep ritual." },
          { "name": "journaling", "value": false, "note": "Does not journal regularly." },
          { "name": "workout", "value": true, "note": "Exercises 3–4 times a week." },
          { "name": "socialMediaLimit", "value": true, "note": "Uses app blockers to limit scrolling." }
        ],
        "tags": ["creative", "solo", "structured"],
        "insight": "This user thrives in quiet environments with visual tools and structure. Best performance comes from autonomy, afternoon work hours, and a mix of creativity and clarity."
      }
      `,
    },
  ];

  const personalityResponse = await generate(messages1); //generate the core personality of user base on survey

  const cleanData = personalityResponse.replace(/```json|```/g, "").trim();
  const personalityJson = JSON.parse(cleanData); //clean up the response

  const personality = await Personality.create({
    ...personalityJson,
    user_id: userId,
  });

  const messages2 = [
    {
      role: "system",
      content:
        "You are an assistant that generates a daily schedule of tasks based on a user's personality insights in JSON format. The schedule should reflect the user's chronotype, energy cycle, productivity style, focus span, and preferred work times. Avoid scheduling tasks during 'avoidTimeSlots' and prioritize time within 'preferedWorkSlots'. Each task should include ONLY the following fields: 'title', 'description', 'start_time', 'end_time', 'task_steps', 'difficultyScore' (1-10), and 'task_type' (e.g., 'creative', 'deep work', 'admin', 'routine', etc). Respond ONLY in the JSON array format shown below.",
    },
    {
      role: "user",
      content: `User's personality profile: ${JSON.stringify(personality)}
  
  Generate a full day's worth of tasks, based on the user's personality insights and preferred productivity periods. Avoid scheduling anything during 'avoidTimeSlots'.`,
    },
  ];

  const tasks = await generate(messages2);
  const data = JSON.parse(tasks.replace(/```json|```/g, "").trim());

  return data;
};


export const createInitialPersonalityService = async ({survey, userId}) => {

  const personality = await Personality.create({
    ...survey,
    userId
  });
  return personality;
}
