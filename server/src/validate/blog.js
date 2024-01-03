
import Joi from "joi";

const schemaBlog = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required()
    // created_at: Joi.date(),
    // updated_at: Joi.date(),
});
export default schemaBlog