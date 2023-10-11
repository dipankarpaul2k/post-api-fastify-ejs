import Fastify from "fastify";
import fastifyView from "@fastify/view";
import ejs from "ejs";
import fastifyFormbody from "@fastify/formbody";
import fastifyMethodOverride from "fastify-method-override";

const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

// Register the fastifyMethodOverride to use PATCH, PUT and DELETE method
fastify.register(fastifyMethodOverride);

// Register the fastifyFormbody plugin to parse request bodies
fastify.register(fastifyFormbody);

// Register the fastifyView plugin to render view templates
fastify.register(fastifyView, {
  engine: {
    ejs,
  },
  root: "./src/views/",
});

// Import and resgister post routes
import { postRoutes } from "./routes/post.routes.js";
fastify.register(postRoutes);

const PORT = 5000;
const startServer = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`listening to port ${PORT}.`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
startServer();

// Gracefully terminate the server
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    await fastify.close();
    process.exit(0);
  });
});
