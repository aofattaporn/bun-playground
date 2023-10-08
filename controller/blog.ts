export const blog_controller = async (url: URL) => {
  if (url.pathname === "/") {
    return new Response("Home page in controller!");
  } else if (url.pathname === "/blog") {
    return new Response("Blog!");
  } else {
    return new Response("404!");
  }
};
