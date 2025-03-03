import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
const Admin = model.admins || model("admins", adminSchema);

export default Admin;