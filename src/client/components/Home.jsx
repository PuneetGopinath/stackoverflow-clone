/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/client/components/Home.jsx
 * License: MIT (see LICENSE)
*/

import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <h1>Stack Overflow Clone</h1>
            <p>A web app similar to stack overflow that can be used for question and answers mainly for programming and software engineering related.</p>

            <p><bold>So far, we have implemented the feature of commenting on Questions</bold></p>
            <p>Click on the question below to view and add comments</p>
            <Link to="/questions/92b1a90f-f4ed-4dea-a873-7dd599a3ce2e">Question 1</Link>
        </>
    );
};