// index.ts
import Bao from "baojs";
import { controllers } from "./controllers";

// create instant to ceate a server
const app = new Bao();

// calling controller
controllers.blog(app);

const server = app.listen();
console.log(`Listening on ${server.hostname}:${server.port}`);
