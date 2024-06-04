import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

export default defineConfig({
  test: {
    environment: "node",
    env: loadEnv("", process.cwd(), ""),
  },
});
