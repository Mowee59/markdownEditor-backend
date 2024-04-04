import { Router } from "./deps.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    success: true,
    msg: "Hello World",
  };
});

export default router;
