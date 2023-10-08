import { blog_controller } from "./controller/blog";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const response = await blog_controller(url);
    return response;
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
