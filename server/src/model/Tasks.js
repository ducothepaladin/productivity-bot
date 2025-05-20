import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emotionTrackSchema = new Schema({
  count: { type: Number, required: true },
  value: { type: [Number] },
}, { _id: false })//emotional rating during task

const reviewSchema = new Schema({
  rating: { type: Number, min: 1, max: 5 },
  reflection: { type: String },
}, { _id: false });

const stepSchema = new Schema({
  step: { type: String },
  done: { type: Boolean}
}, {_id: false})

const taskSchema = new Schema({
  user_id: { type: String, required: true },

  title: { type: String, required: true },
  description: { type: String, required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },

  emotion: emotionTrackSchema,
  emotionSummary: { type: String, enum: ['positive', 'neutral', 'negative'], default: 'neutral' },

  end_note: { type: String },
  task_steps: [stepSchema],
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'skipped', 'failed'],
    default: 'pending'
  },

  review: reviewSchema,
  difficultyScore: { type: Number, min: 1, max: 10, required: true },
  task_type: { type: String },
  relatedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],

}, { timestamps: true })

const Task = mongoose.model("Task", taskSchema);
export default Task;
