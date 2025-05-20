export type TaskDemo = {
  demo_id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  task_steps: {step: string, done: boolean}[];
  difficultyScore: number;
  task_type: string;
};