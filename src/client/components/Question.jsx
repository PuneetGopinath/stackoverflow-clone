/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/client/components/Question.jsx
 * License: MIT (see LICENSE)
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { POST_API_URL, USER_API_URL } from "../../shared/constants.js";

export default function Question() {
    const { id } = useParams();

    const [question, setQuestion] = useState(null);

    const fetchQuestion = async () => {
        setQuestion(null);
        try {
            const res = await fetch(`${POST_API_URL}${id}`);
            const data = await res.json();

            if (res.ok) {
                setQuestion(data);
                console.log(data);
            } else {
                console.error(data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, [id]);

    const comment = async () => {
        let username = localStorage.getItem("username");
        if (!username) {
            username = prompt("Enter your username:");
            if (!username) return;
            localStorage.setItem("username", username);
            const name = prompt("Enter your name:");
            if (!name) return;
            try {
                const res = await fetch(`${USER_API_URL}signup`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, name })
                });

                const data = await res.json();

                if (!res.ok) {
                    return console.error(data);
                }
            } catch(err) {
                return console.error(err);
            }
        }
        
        const content = prompt("Enter your comment:");
        if (!content) return;
        try {
            const res = await fetch(`${POST_API_URL}${id}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    content
                })
            });

            const data = await res.json();

            if (res.ok) {
                setQuestion((prev) => ({
                    ...prev,
                    comments: [...prev.comments, data]
                }))
            } else {
                console.error(data);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <main>
            {question ? (
                <>
                    <div className="question">
                        <h1>{question.title}</h1>
                        <p>{question.content}</p>
                        <p>Asked by: {question.author.name} ({question.author.username})</p>
                    </div>

                    <button onClick={comment}>Add a comment</button>

                    <div className="comments">
                        <h2>Comments</h2>
                        {question.comments.length > 0 ? (
                            <ul>
                                {question.comments.map((comment) => (
                                    <li key={comment._id} className="comment">
                                        <p>{comment.content}</p>
                                        <p>By: {comment.author.name} ({comment.author.username})</p>
                                    </li>
                                ))}
                            </ul>
                        ) : <p>No comments yet.</p>}
                    </div>
                </>
            ) : (
                <p>Loading question...</p>
            )}
        </main>
    );
};