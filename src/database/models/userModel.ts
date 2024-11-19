import mongoose from 'mongoose';
const { Schema } = mongoose;

const userCredentials = new Schema({
  email: { type: String, required: true, unique: true },
  password: String
});

export const Users = mongoose.model('Users', userCredentials);