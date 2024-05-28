import fastify from "fastify";

const app = fastify();

app.get("/users", () => {
  return "Hello Worl";
});

app
  .listen({ port: 3333 })
  .then(() => console.log("Server Running on http://localhost:3333"));
