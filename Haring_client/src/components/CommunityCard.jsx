import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default function CommunityCard({ sub }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/submission/${sub.submissionId}`);
    }
    return (
        <div className="community-card" onClick={handleClick}>
            <img className="card-img" src={sub.submissionDemo} alt={sub.submissionTitle} />
            <div className="card-details">
                <h1>{sub.submissionTitle}</h1>
                <p>By: {sub.appUser.username}</p>
                <br/>
                <p>{sub.submissionDescription}</p>
            </div>
            

        </div>
    );
}