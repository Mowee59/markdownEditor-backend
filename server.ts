import { Application } from "./deps.ts";
import router from "./routes.ts";

const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || "localhost";

const app = new Application();
// app.use(errorHandler); TODO implement eror handler
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(_404); TODO Implement 404

console.log(`Server running on port ${PORT}`);

app.listen(`${HOST}:${PORT}`);
