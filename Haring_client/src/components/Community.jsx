import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityCard from "./CommunityCard";
export default function Community({setSubmissions, submissions, setUser, setPosterId, setAuthorities, authorities, posterId}) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost:8080/api/appUsers/" + localStorage.getItem('user'))
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosterId(data.appUserId);
            setAuthorities(data.authorities);
        });
    }, []);

    console.log(submissions);

    function handleSearch(e) {
        setSearch(e.target.value);
        console.log(search);
    }

    function handleNewSubmission() {
        navigate("/new-submission");
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
                <button className="add-btn" onClick={handleNewSubmission}>+ Post</button>
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