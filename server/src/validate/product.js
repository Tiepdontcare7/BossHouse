import Joi from "joi";

const schema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required().min(5).max(255),
  price: Joi.number().required().min(0),
  desc: Joi.string().min(3),
  img: Joi.string(),
  size:Joi.number().required(),
  ecative:Joi.boolean(),
  quantity: Joi.number(),
  categoryId: Joi.string(),
});

export default schema;
