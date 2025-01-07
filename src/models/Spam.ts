import mongoose, { Schema, Document } from "mongoose";

export interface ISpam extends Document {
  phone: string;
  reportedBy: mongoose.Schema.Types.ObjectId;
}

const SpamSchema: Schema = new Schema(
  {
    phone: { type: String, required: true, unique: true },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISpam>("Spam", SpamSchema);
