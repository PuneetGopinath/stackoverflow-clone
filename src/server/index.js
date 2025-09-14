/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/server/index.js
 * License: MIT (see LICENSE)
*/

import { config } from "dotenv";

import express from "express";
import path from "path";

import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

const prod = process.env.PROD === "1";

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

console.log(`Environment: ${prod ? "Production" : "Development"}`);
app.listen(PORT, () => {
    console.log(`Stack Overflow Clone Server is running on port ${PORT}`);
});