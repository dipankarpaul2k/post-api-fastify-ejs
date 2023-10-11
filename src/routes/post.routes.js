// Import routes handlers
import * as controller from "../controllers/post.controllers.js";

export function postRoutes(fastify, options, done) {
  // Home route
  fastify.get("/", controller.getHome);

  // post listing route
  fastify.get("/posts", controller.getAllPost);

  // View single post route
  fastify.get("/posts/:postId", controller.getSinglePost);

  // Create a new post route(form)
  fastify.get("/posts/new", controller.createNewPost);

  // Add new post route
  fastify.post("/posts", controller.addNewPost);

  // Edit a post route(form)
  fastify.get("/posts/:postId/edit", controller.createEditPost);

  // Update a post route
  fastify.patch("/posts/:postId", controller.updatePost);

  // Delete a post
  fastify.delete("/posts/:postId", controller.deletePost);

  done();
}
