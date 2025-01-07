import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  phone: string;
}

const ContactSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IContact>("Contact", ContactSchema);
