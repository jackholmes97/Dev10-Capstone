import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SubmissionForm({submissions, setSubmissions, posterId, authorities}) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [demo, setDemo] = useState('');
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [category, setCategory] = useState(7);

   

    function handleTitle(event) {
        setTitle(event.target.value);  
    }
    function handleDescription(event) {
        setDescription(event.target.value);  
    }
    function handleDemo(event) {
        setDemo(event.target.value);  
    }
    function handleHTML(event) {
        setHtml(event.target.value);  
    }
    function handleCss(event) {
        setCss(event.target.value);  
    }

    function handleCategory(event) {
        setCategory(event.target.value);  
    }

    function handleSubmit(event) {
        event.preventDefault();
        const submission = {
            submissionTitle: title,
            submissionDescription: description,
            submissionDemo: demo,
            submissionHtml: html,
            submissionCss: css,
            elmType: {
                elmTypeId: category
            },
            appUser: {
                appUserId: posterId,
                authorities: authorities
            }
        }
        console.log(submission);
        fetch("http://localhost:8080/api/submissions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(submission)
        })
        .then((response) => response.json())
        .then((data) => {
            const newSubs = [...submissions, data];
            setSubmissions(newSubs);
            navigate("/community");
        });
    }
    return (
        <div className="sub-form-container">
            <h1>New Submission.</h1>
            <form className="sub-form">
                <input type="text" id="title" name="title" value={title} onChange={handleTitle} placeholder="Title"/>
                <textarea id="description" name="description" value={description} onChange={handleDescription} placeholder="Description."/>
                <input type="text" id="demo" name="demo" value={demo} onChange={handleDemo} placeholder="Demo GIF. (optional)"/>
                <div className="format-form">
                    <textarea id="html" name="submissionHtml" value={html} onChange={handleHTML} rows={"5"} placeholder="HTML Code."/>
                    <textarea id="css" name="submissionCss" value={css} onChange={handleCss} rows={"5"} placeholder="CSS Code."/>
                </div>
                <select id="template" name="template" value={category} onChange={handleCategory}>
                    <option value={1}>Alert</option>
                    <option value={2}>Button</option>
                    <option value={3}>Input Field</option>
                    <option value={4}>Dropdown</option>
                    <option value={5}>Checkbox</option>
                    <option value={6}>Toggle</option>
                    <option value={7}>Other</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}