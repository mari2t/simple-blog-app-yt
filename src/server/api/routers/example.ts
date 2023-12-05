import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";

export const exampleRouter = createTRPCRouter({
  getAllBlogs: publicProcedure.query(() => {
    return db.post.findMany();
  }),
});
