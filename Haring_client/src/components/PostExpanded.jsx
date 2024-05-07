import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider } from "@mui/material";
export default function PostExpanded({user, setUser, sub, setSubmissions}) {
    const handleBack = () => {
        window.history.back();
    }

    function handleDelete(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/api/submissions/${sub.submissionId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const newSubs = [...submissions];
            const index = newSubs.indexOf(sub);
            newSubs.splice(index, 1);
            setSubmissions(newSubs);
            window.history.back();
        });
    }
    return (
        <div className="post-exp-container">
            <div className="post-head">
                <ArrowBackIcon onClick={handleBack} sx={{scale: "2", color: "black", '&:hover': {
                    cursor: "pointer",
                    transform: "scale(2.2)",
                    color: "tomato"
                }}}/>
                <br/>
                <div className="post-head-txt">
                <h1>{sub.submissionTitle}</h1>
                {user === sub.appUser.username ? (
                    <ClearIcon sx={{scale: "2", color: "black", mt: "10px", ml: "1vw",'&:hover': {
                        cursor: "pointer",
                        transform: "scale(1.7)",
                        color: "tomato"
                    }}} onClick={handleDelete}/>
                ) : <></>}
                </div>
                <p> By: <em>{sub.appUser.username}</em></p>
                <p>{sub.submissionDescription}</p>
            </div>
            <div className="demo-display">
                <img className="demo-img" src={sub.submissionDemo} alt={sub.submissionTitle} />
            </div>
            <div className="code-display">
                <div>
                    <label className="snippet-label">HTML</label>
                    <pre className="code-container">
                        <code>
                            {sub.submissionCss}
                        </code>
                    </pre>
                </div>
                <Divider orientation="vertical" flexItem sx={{margin: "20px", height: "59%", backgroundColor: "black"}}/>
                <div>
                    <label className="snippet-label">CSS</label>
                    <pre className="code-container">
                        <code>
                            {sub.submissionHtml}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
}