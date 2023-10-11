// *All the route handlers are in here

// import fake post database and nanoid
import Posts from "../fakePostDB.js";
import { nanoid } from "nanoid";

export const getHome = async (req, reply) => {
  return reply.view("index.ejs");
};

export const getAllPost = async (req, reply) => {
  const locals = {
    title: "Post Listing Page",
    message: "All the post",
  };
  return reply.view("allPosts.ejs", { locals, Posts });
};

export const getSinglePost = async (req, reply) => {
  const { postId } = req.params;
  const singlePost = Posts.find((post) => post.id === postId);
  return reply.view("singlePost.ejs", { singlePost });
};

export const createNewPost = async (req, reply) => {
  return reply.view("newPost.ejs");
};

export const addNewPost = async (req, reply) => {
  const formData = req.body;
  const newPost = {
    id: nanoid(),
    title: formData.title,
    body: formData.body,
  };
  Posts.push(newPost);
  return reply.redirect("/posts");
};

export const createEditPost = async (req, reply) => {
  const { postId } = req.params;
  const singlePost = Posts.find((post) => post.id === postId);
  return reply.view("editPost.ejs", { singlePost });
};

export const updatePost = async (req, reply) => {
  const { postId } = req.params;
  const post = Posts.find((post) => post.id === postId);
  const formData = req.body;
  post.title = formData.title;
  post.body = formData.body;
  return reply.redirect("/posts");
};

export const deletePost = async (req, reply) => {
  const { postId } = req.params;
  const index = Posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    Posts.splice(index, 1);
  }
  return reply.redirect("/posts");
};
