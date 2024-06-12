import { pgTableCreator, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

import { env } from "@/env.mjs";

export const createTable = pgTableCreator(
  (name) => `${env.NEXT_PUBLIC_PROJECT_NAME}_${name}`,
);

export const emails = createTable("emails", {
  email: varchar("email", { length: 255 }),
});
export const insertPostSchema = createInsertSchema(emails);
