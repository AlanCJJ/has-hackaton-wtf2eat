// Importing Node packages required for schema
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

//= ===============================
// User Schema
//= ===============================
const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    contactNo: {
      type: String,
      required: true
    }
  },
  role: {
    type: String
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdBy: {
    type: Schema.Types.ObjectId
  },
  updatedBy: {
    type: Schema.Types.ObjectId
  },
  updatedAt: {
    type: Date
  },
  deletedBy: {
    type: Schema.Types.ObjectId
  },
  deletedAt: {
    type: Date
  }
}
);

module.exports = mongoose.model('User', UserSchema);
