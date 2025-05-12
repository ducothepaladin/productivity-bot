import type { Survey } from "@/type/Survey";

export const survey: Survey[] = [
  {
    "key": "chronotype",
    "question": "What time of day do you usually feel most alert and productive?",
    "type": "select",
    "values": ["Morning", "Afternoon", "Evening", "Night Owl"],
    "description": "Let us know the time of day when you feel most alert and productive."
  },
  {
    "key": "preferredWorkSlots",
    "question": "Which hours in a day do you prefer to work?",
    "type": "time-multi-range",
    "values": [],
    "description": "Select the time blocks when you feel most comfortable working."
  },
  {
    "key": "avoidTimeSlots",
    "question": "Which time ranges do you prefer to avoid working?",
    "type": "time-multi-range",
    "values": [],
    "description": "Choose any hours you'd rather not work due to low energy or distractions."
  },
  {
    "key": "energyCycle",
    "question": "When do you usually feel your energy is highest during the day?",
    "type": "select",
    "values": ["Morning", "Midday", "Afternoon", "Evening", "Varies"],
    "description": "Tell us when your energy typically peaks throughout the day."
  },
  {
    "key": "focusSpanMin",
    "question": "How long can you usually stay focused on a single task?",
    "type": "slider",
    "values": ["<30 minutes", "30–60 minutes", "1–2 hours", ">2 hours"],
    "description": "Estimate how long you can stay focused without distraction."
  },
  {
    "key": "contextSwitchCostMin",
    "question": "How long does it take you to get back into focus after switching tasks?",
    "type": "slider",
    "values": ["Almost instantly", "5–10 minutes", "10–20 minutes", "Over 20 minutes"],
    "description": "Tell us how long it takes you to regain concentration after a task switch."
  },
  {
    "key": "taskSwitchingTendency",
    "question": "How often do you switch between tasks during work?",
    "type": "select",
    "values": ["Rarely", "Occasionally", "Frequently", "Constantly"],
    "description": "Let us know how often you jump between different tasks while working."
  },
  {
    "key": "productivityStyle",
    "question": "How do you best stay productive?",
    "type": "select",
    "values": ["Solo work", "Pomodoro", "External pressure", "Deadlines", "Collaboration"],
    "description": "Select the method or environment that helps you stay most productive."
  },
  {
    "key": "goalApproach",
    "question": "How do you usually approach your goals?",
    "type": "select",
    "values": ["Big-picture to tasks", "Daily consistency", "Reactive", "Vision-led"],
    "description": "Describe your typical mindset or strategy when working toward goals."
  },
  {
    "key": "deepWorkPreference",
    "question": "Do you prefer long, uninterrupted sessions or small bursts of work?",
    "type": "select",
    "values": ["Deep sessions", "Short bursts", "Mixed"],
    "description": "Share your preference for deep focus versus short task sprints."
  },
  {
    "key": "motivationType",
    "question": "What motivates you the most to get things done?",
    "type": "select",
    "values": ["Intrinsic goals", "Praise/Recognition", "External pressure", "Rewards"],
    "description": "What typically drives you to complete tasks and achieve results?"
  },
  {
    "key": "preferredTaskType",
    "question": "What kind of tasks do you enjoy most?",
    "type": "multi-select",
    "values": ["Creative", "Analytical", "Physical", "Repetitive", "Technical"],
    "description": "Pick the types of tasks that you naturally enjoy and excel at."
  },
  {
    "key": "dislikedTaskType",
    "question": "Which types of tasks do you tend to avoid or dislike?",
    "type": "multi-select",
    "values": ["Creative", "Analytical", "Physical", "Repetitive", "Technical"],
    "description": "Choose the types of tasks that drain your energy or motivation."
  },
  {
    "key": "toolsUsed",
    "question": "What tools/apps do you regularly use to stay productive?",
    "type": "tag-input",
    "values": [],
    "description": "List any tools, platforms, or apps you frequently use to stay on track."
  },
  {
    "key": "shortTermGoals",
    "question": "What are your personal goals for the next 1, 3, or 6 months?",
    "type": "textarea",
    "values": [],
    "description": "Share your near-future personal or professional goals."
  },
  {
    "key": "longTermGoals",
    "question": "What are your long-term goals (1–5 years)?",
    "type": "textarea",
    "values": [],
    "description": "Tell us about your big-picture goals and future aspirations."
  },
  {
    "key": "stressTolerance",
    "question": "How do you usually handle stress from work or overload?",
    "type": "select",
    "values": ["Very resilient", "Generally okay", "Sensitive", "Easily overwhelmed"],
    "description": "Describe how you typically respond to stress or pressure."
  },
  {
    "key": "taskOverloadReaction",
    "question": "What do you usually do when overwhelmed by tasks?",
    "type": "select",
    "values": ["Panic", "Procrastinate", "Focus harder", "Delegate", "Shut down"],
    "description": "Let us know your usual response when things pile up."
  },
  {
    "key": "procrastinationTriggers",
    "question": "What usually makes you procrastinate?",
    "type": "multi-select",
    "values": ["Boredom", "Fear of failure", "Tasks too hard", "No urgency", "Too many choices"],
    "description": "Select the common reasons you put off tasks."
  },
  {
    "key": "distractionRecoveryTimeMin",
    "question": "After a distraction, how long does it usually take to regain focus?",
    "type": "slider",
    "values": ["Almost instantly", "5–10 minutes", "10–20 minutes", "Over 20 minutes"],
    "description": "Estimate the number of minutes it takes to return to deep work after being distracted."
  },
  {
    "key": "dailyHabits",
    "question": "Which of these habits do you currently follow daily?",
    "type": "checkbox",
    "values": ["Exercise", "Journaling", "Reading", "Meditation", "Planning", "Healthy eating", "Digital detox"],
    "description": "Check the habits you consistently maintain every day."
  },
  {
    "key": "tags",
    "question": "Add any keywords that describe your personality or work style.",
    "type": "tag-input",
    "values": [],
    "description": "Type in any traits, styles, or keywords that describe how you operate."
  },
  {
    "key": "insight",
    "question": "Any extra insights or thoughts about your work personality?",
    "type": "textarea",
    "values": [],
    "description": "Feel free to add anything else you feel is important to know about your productivity style."
  }
]

