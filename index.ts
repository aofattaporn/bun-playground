// index.ts
import Bao from "baojs";
import { blog_controller } from "./controllers/blog";

const app = new Bao();

blog_controller(app);

const server = app.listen();

console.log(`Listening on ${server.hostname}:${server.port}`);
