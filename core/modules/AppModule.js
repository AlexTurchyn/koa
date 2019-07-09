const Response = require("core/Response");
const ideas = require("ideas");


class AppModule {
    async ping(ctx) {
        return Response.text(ctx, "pong");
    }
    async getAllIdeas(ctx) {
        console.log(ctx);
        return Response.json(ctx, ideas);
    }
    async getIdea(ctx) {
        const ideaID = ctx.request.params.id;
        return Response.json(ctx, ideas[ideaID]);
    }
    async postIdea(ctx) {
        const lastIdeasID = Object.keys(ideas).length;
        const ideaID = lastIdeasID + 1;

        ideas[ideaID] = ctx.request.body;
        return Response.json(ctx, ideas[ideaID]);
    }
    async deleteIdea(ctx) {
        const ideaID = ctx.request.params.id;
        delete ideas[ideaID];
        return Response.json(ctx, ideas[ideaID]);
    }
    async editIdea(ctx) {
        const ideaID = ctx.request.params.id;
        ideas[ideaID] = ctx.request.body;
        return Response.json(ctx, ideas[ideaID]);
    }
}

module.exports = new AppModule();