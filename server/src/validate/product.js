import Joi from "joi";
import { customMessages } from "../utils/validate.js";

const schema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required().min(5).max(255).messages(customMessages),
  price: Joi.number().required().min(0).messages(customMessages),
  description: Joi.string().min(3).messages(customMessages),
  image: Joi.string().messages(customMessages),
  quantity: Joi.number().messages(customMessages),
  isActive: Joi.boolean().messages(customMessages),
  categoryId: Joi.string().messages(customMessages),
});

export default schema;
