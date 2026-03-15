import { defineConfig } from "vitest/config";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./jest.setup.ts"],
    css: true
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src`
    }
  }
});
