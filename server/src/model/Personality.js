import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteFieldShema = new Schema({
    value: {type: Schema.Types.Mixed, required: true},
    note: {type: String}
}, {_id: false});


const DailyHabitsSchema = new Schema({
    name: {type: String, required: true},
    value: {type: Boolean, required: true},
    note: {type: String}
  }, { _id: false });


const PersonalitySchema = new Schema({
    user_id: {type: String, required: true},
    version: {type: Number, default: 1},
    chcronotype: NoteFieldShema,
    energyCycle: NoteFieldShema,
    focusSpanMinute: NoteFieldShema,
    productivityStyle: NoteFieldShema,
    goalApproch: NoteFieldShema,
    stressTolerance: NoteFieldShema,
    motivationType: NoteFieldShema,
    preferedTaskType: NoteFieldShema,
    dislikedTaskType: NoteFieldShema,
    toolsUsed: NoteFieldShema,
    preferedWorkSlots: NoteFieldShema,
    avoidTimeSlots: NoteFieldShema,
    taskOverloadReaction: NoteFieldShema,
    taskSwitchingTendency: NoteFieldShema,
    dailyHabits: [DailyHabitsSchema],
    tags: [{type: String}],
    insight: {type: String}
}, {timestamps: true});


const Personality = mongoose.model('Personality', PersonalitySchema);
export default Personality;