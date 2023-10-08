import Bao from "baojs";
import { mock_harry_potter } from "../mocks/blogMock";

export const blog_controller = (app: Bao) => {
  // get blogssss
  app.get("/", (ctx) => {
    return ctx.sendPrettyJson(mock_harry_potter);
  });
};
