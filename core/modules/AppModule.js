const Response = require("core/Response");


class AppModule {
    async ping(ctx) {
        return Response.text(ctx, "pong");
    }
    async getAllIdeas(ctx) {
        const result = await ctx.db.query('SELECT * FROM ideas');
        return Response.json(ctx, result.rows);
    }
    async getIdea(ctx) {
        const ideaID = ctx.request.params.id;
        const result = await ctx.db.query(`SELECT * FROM ideas i WHERE i.idea_id = ${ideaID};`);
        return Response.json(ctx, result.rows);
    }
    async postIdea(ctx) {
        const {title, description, author_id} = ctx.request.body;
        const result = await ctx.db.query(`
            INSERT INTO ideas (title, description, author_id) 
            VALUES ($1, $2, $3) RETURNING *`, [title, description, author_id]
        );
        return Response.json(ctx, result.rows[0]);
    }
    async deleteIdea(ctx) {
        const ideaID = ctx.request.params.id;
        const result = await ctx.db.query(`DELETE FROM ideas i WHERE i.idea_id = $1 RETURNING *`, [ideaID]);
        return Response.json(ctx, result.rows[0]);
    }
    async editIdea(ctx) {
        const {title, description, author_id} = ctx.request.body;
        const result = await ctx.db.query(`
            INSERT INTO ideas (title, description, author_id) 
            VALUES ($1, $2, $3) RETURNING *`, [title, description, author_id]
        );
        return Response.json(ctx, result.rows[0]);
    }
}

module.exports = new AppModule();