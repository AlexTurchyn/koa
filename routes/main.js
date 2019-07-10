const Router = require("koa2-router");
const AppModule = require("core/modules/AppModule");


const router = new Router();

router.get("/ping", ctx => {
    console.log(ctx);
    return AppModule.ping(ctx);
});
router.get("/ideas", async ctx => {
    return AppModule.getAllIdeas(ctx);
});
router.get("/ideas/:id", async ctx => {
    return AppModule.getIdea(ctx);
});
router.post("/ideas", async ctx => {
    return AppModule.postIdea(ctx);
});
router.delete("/ideas/:id",  async ctx => {
    return AppModule.deleteIdea(ctx);
})
router.put("ideas/:id", ctx => {
    return AppModule.editIdea(ctx);
})


module.exports = router;
