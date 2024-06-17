import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    course: { type: String, required: true },
    availableFrom: { type: String },
    availableUntil: { type: String },
    dueDate: { type: String},
    points: { type: String}
},
    { collection: "assignments" }
);
export default assignmentSchema;

