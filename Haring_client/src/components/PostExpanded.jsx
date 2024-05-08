import React, {useEffect, useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function PostExpanded({user, setUser, sub, setSubmissions, posterId, authorities}) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const navigate = useNavigate();
    console.log(posterId);
    console.log(authorities);
    const handleBack = () => {
        navigate("/community");
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/comments/submission/${sub.submissionId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setComments(data);
        });
    }, []);

    function handleEdit(e) {
        setNewComment(e.target.value);
        console.log(newComment);
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
            const newSubs = [...submissions];
            const index = newSubs.indexOf(sub);
            newSubs.splice(index, 1);
            setSubmissions(newSubs);
            navigate("/community");
        });
    }
    function handleComment(e) {
        e.preventDefault();
        const postComm = {
            commentText: newComment,
            submission: {
                submissionId: sub.submissionId
            },
            appUser: {
                appUserId: posterId,
                username: user,
                authorities: authorities
            }
        }
        console.log(postComm);
        fetch(`http://localhost:8080/api/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postComm),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setComments([...comments, data]);
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
                            {sub.submissionHtml}
                        </code>
                    </pre>
                </div>
                <Divider orientation="vertical" flexItem sx={{margin: "20px", height: "105%", backgroundColor: "black"}}/>
                <div>
                    <label className="snippet-label">CSS</label>
                    <pre className="code-container">
                        <code>
                            {sub.submissionCss}
                        </code>
                    </pre>
                </div>
            </div>
            <div className="comment-section">
                <h1>Comments ({comments.length})</h1>
                <div className="comments">
                    {comments.map((comment) => (
                        <div key={comment.commentId} className="comment">
                            <p>{comment.commentText}</p>
                            <p>By: {comment.appUser.username}</p>
                        </div>
                    ))}
                </div>
                <input type="text" value={newComment} onChange={handleEdit} placeholder="Add a comment."/>
                <button onClick={handleComment}>Submit</button>   
            </div>
        </div>
    );
}