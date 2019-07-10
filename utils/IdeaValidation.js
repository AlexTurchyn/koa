const Joi = require('@hapi/joi');

const postValidation = Joi.object({
  title: Joi.string().alphanum()
  .min(4).error(() => 'Title must be at least 4 characters')
  .max(20).error(() => 'Title must be no more than 20 characters')
  .required().error(() => 'title is required'),
  description: Joi.string()
  .min(20).error(() => 'Description must be at least 20 characters')
  .required().error(() => 'Description is required'),
  author_id: Joi.number().required().error(() => 'Author is required'),
});

module.exports = postValidation;