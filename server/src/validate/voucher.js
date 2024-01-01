import Joi from "joi";

const schema = Joi.object({
  code: Joi.string().required().min(4).max(120),
  discountPercent: Joi.number().min(1).max(100).required(),
  maxDiscount: Joi.number().min(1).max(10000000).required(),
  expirationDate: Joi.string().required(),
});

export default schema;
