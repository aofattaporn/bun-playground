import Bao from "baojs";
import { blogs } from "../mocks/blogMock";
import { BlogType } from "../models/Blog";

export const blog = (app: Bao) => {
  // get all blog
  app.get("/api/blogs", (ctx) => {
    return ctx.sendPrettyJson(blogs);
  });

  // get blog id
  app.get("/api/blogs/:blog_id", (ctx) => {
    const blogId = ctx.params.blog_id;
    const blog = blogs.find((blog) => blog.id === parseInt(blogId));

    return ctx.sendPrettyJson(blog as BlogType);
  });

  // create blog

  // update blog

  // delete blog
};
