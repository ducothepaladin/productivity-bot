


export type Survey = {
    key: string,
    question: string,
    type: string,
    values: any,
    description: string
}


type NoteField<T = any> = {
  value: T;
  note?: string;
};

type DailyHabit = {
  name: string;
  value: boolean;
  note?: string;
};

export type SurveyResult = {

  // Core temporal profile
  chronotype: NoteField<string>;
  preferredWorkSlots: NoteField<string[]>;
  avoidTimeSlots: NoteField<string[]>;

  // Energy and focus
  energyCycle: NoteField<string>;
  focusSpanMin: NoteField<number>;
  contextSwitchCostMin: NoteField<number>;
  taskSwitchingTendency: NoteField<string>;

  // Work and productivity style
  productivityStyle: NoteField<string>;
  goalApproach: NoteField<string>;
  deepWorkPreference: NoteField<string>;
  motivationType: NoteField<string>;

  // Task preferences
  preferredTaskType: NoteField<string[]>;
  dislikedTaskType: NoteField<string[]>;
  toolsUsed: NoteField<string[]>;
  shortTermGoals: NoteField<string[]>;
  longTermGoals: NoteField<string[]>;

  // Behavioral signals
  stressTolerance: NoteField<string>;
  taskOverloadReaction: NoteField<string>;
  procrastinationTriggers: NoteField<string[]>;
  distractionRecoveryTimeMin: NoteField<number>;

  // Daily behavior
  dailyHabits: DailyHabit[];

  // Summary
  tags?: string[];
  insight?: string;
};
