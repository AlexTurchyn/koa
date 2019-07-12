const Joi = require('@hapi/joi');

const postValidation = Joi.object({
  title: Joi.string().alphanum()
  .min(4)
  .max(20)
  .required(),
  description: Joi.string()
  .min(20)
  .required(),
  author_id: Joi.number().required()
});

module.exports = postValidation;