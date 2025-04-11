import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },
    dueDate: {
      type: Date,
    },
    labels: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ["todo", "in progress", "done"],
      default: "todo",
    },
    subtasks: {
      type: [subtaskSchema],
      default: [],
    },
    attachments: {
      type: [String], 
      default: [],
    },
    reminder: {
      type: Date,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    createdByDevice: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
