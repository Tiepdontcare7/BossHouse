import Joi from "joi";
import { customMessages } from "../utils/validate.js";

const userSignup = Joi.object({
    username: Joi.string().min(3).max(25),
    email: Joi.string().email(),
    password: Joi.string().min(4).max(20),
    confirmPassword: Joi.string().valid(Joi.ref("password")),
    role: Joi.number()
})

const userSignin = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(4).max(20),
})

const userSchema = Joi.object({
    username: Joi.string().min(3).max(25).required().messages(customMessages),
    email: Joi.string().email().messages(customMessages),
    password: Joi.string().min(4).max(20).messages(customMessages),
    address: Joi.string().messages(customMessages),
    phoneNumber: Joi.string().messages(customMessages),
    role: Joi.number().messages(customMessages)
})

export { userSignin, userSignup, userSchema }