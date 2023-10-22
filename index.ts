import Bao from "baojs";
import { MongoClient, ServerApiVersion } from "mongodb";
import { controllers } from "./controllers";

async function startServer() {
  const uri = process.env.MONGO_URL;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    console.log("Connecting to MongoDB...");
    await client.connect();
    console.log("Connected to MongoDB");

    const app = new Bao();
    await controllers.blog(app, client);

    const server = app.listen();
    console.log(`Listening on ${server.hostname}:${server.port}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();
