const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER',
    },
    description: {
      type: String,
      required: false,
      default: 'Description not found.'
    },
    avatar: {
      type: String,
      required: false,
      default: 'https://i.stack.imgur.com/l60Hf.png'
    },
    country: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User
