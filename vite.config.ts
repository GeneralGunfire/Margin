import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { existsSync, readFileSync, realpathSync } from "node:fs";

// On Windows the same folder can be spelled "C:\..." or "c:\..." depending on the shell (PowerShell vs Git Bash).
// If the project root and the "@" alias disagree about that, Vite loads the same file under two module ids, the app
// ends up with two copies of shared modules (for example two React contexts) and crashes. Use one canonical spelling.
const root = realpathSync.native(__dirname);

// Ensure .env.local overrides any placeholder VITE_* variables already set in the host environment.
const envLocalPath = path.resolve(root, ".env.local");
if (existsSync(envLocalPath)) {
  for (const line of readFileSync(envLocalPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (key.startsWith("VITE_") && val) {
      process.env[key] = val;
    }
  }
}

export default defineConfig({
  root,
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(root, "src") } },
});
