import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          title: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdeAt: "desc" },
    });
  }),

  getAllBlogs: publicProcedure.query(() => {
    return db.post.findMany();
  }),

  postBlog: publicProcedure
    .input(z.object({ title: z.string(), descriprion: z.string() }))
    .mutation((req) => {
      const postBlog = db.post.create({
        data: { title: req.input.title, descriprion: req.input.descriprion },
      });
      return postBlog;
    }),
  getDetailBlog: publicProcedure
    .input(z.object({ id: z.number() }))
    .query((req) => {
      return db.post.findUnique({ where: { id: req.input.id } });
    }),
  deletelBlog: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation((req) => {
      return db.post.delete({ where: { id: req.input.id } });
    }),
});
