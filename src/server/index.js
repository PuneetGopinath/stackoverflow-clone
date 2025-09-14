/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/index.js
 * License: MIT (see LICENSE)
*/

import { config } from "dotenv";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
import helmet from "helmet";

import connectDB from "./config/db.js";

config();

const app = express();
const PORT = process.env.PORT || 3000;

const prod = process.env.PROD === "1";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/livez", (req, res) => {
    res.status(200).json({ "status": "OK", "timestamp": new Date().toISOString() });
});

if (prod) {
    app.use(express.static(path.join(__dirname, "../client-dist")));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../client-dist/index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send(`Stack Overflow Clone is running in ${prod ? "Production" : "Development"} mode`);
    });
}

console.log(`[ INFO ] Environment: ${prod ? "Production" : "Development"}`);
connectDB();
app.listen(PORT, () => {
    console.log(`[ INFO ] Stack Overflow Clone Server is running on port ${PORT}`);
});