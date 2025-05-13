


export type Survey = {
    key: string,
    question: string,
    type: "select" | "multi-select" | "tag-input" | "time-multi-range" | "textarea",
    values: any,
    description: string
}


type NoteField<T = any> = {
  value: T;
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
  contextSwitchCostMin: NoteField<string>;
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
  distractionRecoveryTimeMin: NoteField<string>;

  // Daily behavior
  dailyHabits: NoteField<string[]>;

  // Summary
  tags?: string[];
  insight?: string;
};


export type SurveyComponentProps = {
  onNext: () => void;
  dataKey: string;
  update: (data: any) => void;
  value: string[];
  updateNote: any;
  note: string;
  current: any;
}
