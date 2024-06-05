import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_CLIENT: z.enum(["sqlite", "pg"]),
  DATABASE_URL: z.string(),
  HOST: z.string().default("localhost"),
  PORT: z.coerce.number().default(3333),
});

export const env = envSchema.parse(process.env);
