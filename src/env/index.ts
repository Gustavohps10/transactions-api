import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string(),
  PORT: z.number({ coerce: true }).int().default(3333),
});

export const env = envSchema.parse(process.env);
