/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/client/App.jsx
 * License: MIT (see LICENSE)
*/

import { BrowserRouter, Routes, Route } from "react-router";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";

export default function App() {
    return (
        <>
            <BrowserRouter future={{ v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
};