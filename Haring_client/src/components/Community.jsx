import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityCard from "./CommunityCard";
export default function Community({setSubmissions, submissions, setUser}) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    

    console.log(submissions);

    function handleSearch(e) {
        setSearch(e.target.value);
        console.log(search);
    }

    const filteredSubmissions = submissions.filter((submission) => {
        return submission.submissionTitle.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className="community-container">
        <div className="community">
            <h1>Community.</h1>
            <div className="community-action">
                <input className="search-input" type="text" value={search} onChange={handleSearch} placeholder="Search" />
                <button className="add-btn">+ Post</button>
            </div>
            <p>Results:</p>
            <div className="community-grid">
                {filteredSubmissions.map((submission) => (
                    <CommunityCard key={submission.submissionId} sub={submission} />
                ))}
            </div>
        </div>
        </div>
    );
}