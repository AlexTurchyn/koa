const Ideas = require('../../models/ideas');

const Joi = require('@hapi/joi');
const Response = require("core/Response");
const  postValidation  = require("utils/IdeaValidation");


class AppModule {
    async ping(ctx) {
        return Response.text(ctx, "pong");
    }
    async getAllIdeas(ctx) { 
        const ideas = await Ideas.findAll();
        return Response.json(ctx, ideas);
    }
    async getIdea(ctx) {
        const idea = await Ideas.findOne({       
            where: {
                ideaid: ctx.request.params.id
            }
        }); 
        return Response.json(ctx, idea);
    }
    async postIdea(ctx) {
        const {title, description, authorid} = ctx.request.body;
        const result = await Ideas.create({ title, description, authorid });
        return Response.json(ctx, result);

        // const { error, value } = Joi.validate(
        //     { title: title, description: description, author: user_id },
        //     schema
        //   );
        //   ctx.assert(error === null, 400, error);
        //   const model = Idea.getModel(ctx.sequelize);
        //   const newIdea = await model.create(
        //     { title, description, user_id },
        //     { fields: ['title', 'description', 'user_id'] }
        //   );
    }
    async deleteIdea(ctx) {
        const idea = Ideas.destroy({
            where: {
              ideaid: ctx.request.params.id,
            }
          });
        return Response.json(ctx, idea);
    }
    async editIdea(ctx) {
        const {title, description, authorid} = ctx.request.body;
        const result = Ideas.update({ title, description, authorid },{
            where: {
              ideaid: ctx.request.params.id,
            }
          });
        return Response.json(ctx, result);
    }
}

module.exports = new AppModule();