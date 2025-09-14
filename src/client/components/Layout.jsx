/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/client/components/Layout.jsx
 * License: MIT (see LICENSE)
*/

import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Outlet />
        </>
    );
};