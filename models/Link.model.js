import { Schema, model } from 'mongoose';

const linkSchema = new Schema({
  url: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
    type: String,
    required: true,
    unique: true,
  },
  counter: {
    type: Number,
    default: 0,
  },
});

export default model('link', linkSchema);
