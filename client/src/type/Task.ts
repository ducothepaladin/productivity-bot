export type TaskDemo = {
  demo_id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  task_steps: { step: string; done: boolean }[];
  difficultyScore: number;
  task_type: string;
};

export type EmotionTrack = {
  count: number;
  value?: number[];
};

export type Review = {
  rating?: number;
  reflection?: string;
};

export type TaskStep = {
  step?: string;
  done?: boolean;
};

export type EmotionSummary = "positive" | "neutral" | "negative";
export type TaskStatus =
  | "pending"
  | "in_progress"
  | "completed"
  | "skipped"
  | "failed";

export type TaskType = {
  _id: string;
  user_id: string;

  title: string;
  description: string;
  start_time: string;
  end_time: string;

  emotion?: EmotionTrack;
  emotionSummary?: EmotionSummary;

  end_note?: string;
  task_steps: TaskStep[];
  status?: TaskStatus;

  review?: Review;
  difficultyScore: number;
  task_type?: string;
  relatedTo?: any;

  createdAt?: Date;
  updatedAt?: Date;
};
