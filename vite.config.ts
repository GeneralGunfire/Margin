import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { realpathSync } from "node:fs";

// On Windows the same folder can be spelled "C:\..." or "c:\..." depending on the shell (PowerShell vs Git Bash).
// If the project root and the "@" alias disagree about that, Vite loads the same file under two module ids, the app
// ends up with two copies of shared modules (for example two React contexts) and crashes. Use one canonical spelling.
const root = realpathSync.native(__dirname);

export default defineConfig({
  root,
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(root, "src") } },
});
