/**
 * Stack Overflow Clone
 * © 2025 Puneet Gopinath. All rights reserved.
 * Filename: src/client/components/Question.jsx
 * License: MIT (see LICENSE)
*/

import { useState, useEffect } from "react";
import { useParams } from "react-router";

import { POST_API_URL } from "../../shared/constants.js";

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

    return (
        <main>
            {question ? (
                <div className="question">
                    <h1>{question.title}</h1>
                    <p>{question.content}</p>
                    <p>Asked by: {question.author.name} ({question.author.username})</p>
                </div>
            ) : (
                <p>Loading question...</p>
            )}
        </main>
    );
};