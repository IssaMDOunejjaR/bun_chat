import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "production"]),
    JWT_SECRET: z.string(),
  },

  runtimeEnv: process.env,
});

export const config = {
  env,
};
