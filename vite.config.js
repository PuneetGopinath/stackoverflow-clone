import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

export default defineConfig({
    root: "./src/client",
    plugins: [react()],
    server: {
        proxy: {
            "/api": `http://localhost:${PORT}`, // Proxy API requests to the backend server
            "/livez": `http://localhost:${PORT}` // Proxy health check requests to the backend server
        }
    },
    build: {
        outDir: "../client-dist",
        emptyOutDir: true,
    }
});