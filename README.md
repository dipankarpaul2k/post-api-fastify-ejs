# Simple Post API using NodeJs, EJS and Fastify 😊

I am learning about APIs and CURD operations. This is the third time I am building an API. This time I am using NodeJs, EJS for rendering the templates with pure HTML and JavaScript and fastify web framework for NodeJs. I have used a fake data created by ChatGPT to build and test this API.

## Table of Contents 👇

1. [Installation & Usage](#installation--usage)
2. [Endpoints](#endpoints)
3. [Dependencies](#dependencies)
4. [Author](#author)

## Installation & Usage

It is a simple api that I built for practicing CURD operations, but if you still want to try it out, then follow the steps mentioned below 👇

- Fork the repository in your account in Github.
- Make project directory and go inside the directory.
- Clone the repository.
- Install dependencies.
- Start or run your API on the local machine.

```shell
# Make a directory
mkdir posts-api-fastify-ejs

# go inside the directory
cd posts-api-fastify-ejs

# Clone the repo
git clone https://github.com/...(repo url)

# Install dependencies
npm install

# Start the API
npm start

# Access the API in your web browser
http://localhost:5000/
```

## Endpoints

### GET method

```shell
# Get all the posts
localhost:5000/posts

# Get a single post
localhost:5000/posts/:postId

# Get a form to add new post
localhost:5000/posts/new

# Get a form to edit post
localhost:5000/posts/:postId/edit
```

### POST method

```shell
# Add a new post
localhost:5000/posts
```

### PATCH method

```shell
# Update a single post
localhost:5000/posts/:postId
```

### DELETE method

```shell
# Uelete a single post
localhost:5000/posts/:postId
```

## Dependencies

Here are some of the major dependencies I have used in this project:

```json
"dependencies": {
  "@fastify/formbody": "^7.4.0",
  "@fastify/view": "^8.2.0",
  "ejs": "^3.1.9",
  "fastify": "^4.23.2",
  "fastify-method-override": "^1.5.10",
  "nanoid": "^5.0.1"
},
"devDependencies": {
  "nodemon": "^3.0.1",
  "pino-pretty": "^10.2.3"
}
```

## Author

Dipankar Paul 😀👍 | Contact me 👉 dipankarpaul2k@gmail.com 😊
