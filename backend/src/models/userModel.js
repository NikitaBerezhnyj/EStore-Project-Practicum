const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, enum: ["customer", "seller"], default: "customer" },
  email: { type: String, required: true, unique: true, trim: true },
  phone: { type: String, required: false, unique: true, trim: true },
  avatar_url: { type: String, required: true },
  password: { type: String, required: true, default: "/img/standard_user.jpg" },
  createdAt: { type: Date, default: Date.now }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, role: this.role }, process.env.JWT_PRIVATE_TOKEN, {
    expiresIn: "7d"
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validateRegistration = data => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    phone: Joi.string().optional().label("Phone"),
    role: Joi.string().required().label("Role"),
    password: passwordComplexity().required().label("Password")
  });
  return schema.validate(data);
};

const validateLogin = data => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password")
  });
  return schema.validate(data);
};

const validatePassword = password => {
  const schema = passwordComplexity();
  return schema.validate(password);
};

module.exports = {
  User,
  validateRegistration,
  validateLogin,
  validatePassword
};
