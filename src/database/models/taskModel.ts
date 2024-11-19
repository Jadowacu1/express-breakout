import mongoose from 'mongoose'
const { Schema } = mongoose

const taskToDo = new Schema({
  email: {type:[String], required: true},
  taskName: {type: [String]}
})

export const Tasks = mongoose.model('Tasks', taskToDo);
