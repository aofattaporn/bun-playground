import Bao from "baojs";
import { MongoClient } from "mongodb";
import { blogs } from "../mocks/blogMock";
import { BlogType } from "../models/Blog";
const pino = require("pino");
const logger = pino({
  level: "info",
});

export const blog = async (app: Bao, client: MongoClient) => {
  // declare database collection
  const db = client.db("test");
  const collectionx = db.collection("book");

  // get all blogs
  app.get("/api/blogs", async (ctx) => {
    try {
      logger.info("/api/blogs");
      const posts = await collectionx.find({}).toArray();

      return ctx.sendPrettyJson(posts);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      return ctx.sendText("error");
    }
  });

  // get blog by blog id
  app.get("/api/blogs/:blog_id", (ctx) => {
    const blogId = ctx.params.blog_id;
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));
    return ctx.sendPrettyJson(blog as BlogType);
  });

  // add new blog
  app.post("/api/blogs", (ctx) => {
    return ctx.sendText("Blog created successfully");
  });

  // delete blog by id

  // delete all blog
};
