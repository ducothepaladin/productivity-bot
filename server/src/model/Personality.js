import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteFieldSchema = new Schema(
  {
    value: { type: Schema.Types.Mixed, required: true },
    note: { type: String },
  },
  { _id: false }
);

const PersonalitySchema = new Schema(
  {
    userId: { type: String, required: true },
    version: { type: Number, default: 1 },

    // Core temporal profile
    chronotype: NoteFieldSchema,
    preferredWorkSlots: NoteFieldSchema,
    avoidTimeSlots: NoteFieldSchema,

    // Energy and focus
    energyCycle: NoteFieldSchema,
    focusSpanMin: NoteFieldSchema,
    contextSwitchCostMin: NoteFieldSchema,
    taskSwitchingTendency: NoteFieldSchema,

    // Work and productivity style
    productivityStyle: NoteFieldSchema,
    goalApproach: NoteFieldSchema,
    deepWorkPreference: NoteFieldSchema,
    motivationType: NoteFieldSchema,

    // Task preferences
    preferredTaskType: NoteFieldSchema,
    dislikedTaskType: NoteFieldSchema,
    toolsUsed: NoteFieldSchema,
    shortTermGoals: {value: {type: String}},
    longTermGoals: {value: {type: String}},

    // Behavioral signals
    stressTolerance: NoteFieldSchema,
    taskOverloadReaction: NoteFieldSchema,
    procrastinationTriggers: NoteFieldSchema,
    distractionRecoveryTimeMin: NoteFieldSchema,

    // Daily behavior
    dailyHabits: NoteFieldSchema,

    // Summary
    tags: {value: {type: String}},
    insight: {value: {type: String}},
  },
  { timestamps: true }
);

const Personality = mongoose.model("Personality", PersonalitySchema);
export default Personality;
