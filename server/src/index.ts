import { Elysia } from "elysia";
import { clerkPlugin } from "elysia-clerk";

const app = new Elysia()
  .use(clerkPlugin())
  .get("/", async () => {
    return { hello: "world" };
  })
  .get("/private", async ({ clerk, store, set }) => {
    console.log("private called");
    console.log(store);
    if (!store.auth?.userId) {
      set.status = 403;
      console.log("Unauthorized");
      return "Unauthorized";
    }
    const user = await clerk.users.getUser(store.auth.userId);
    return { user };
  })
  .post("/entry", async ({ clerk, store, set }) => {
    console.log("private called");
    console.log(store);
    if (!store.auth?.userId) {
      set.status = 403;
      console.log("Unauthorized");
      return "Unauthorized";
    }
    const user = await clerk.users.getUser(store.auth.userId);
    return { user };
  })

  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
