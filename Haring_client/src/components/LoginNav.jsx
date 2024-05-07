import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginNav({user, setUser}) {
    const navigate = useNavigate();
    function handleLogoClick() {
        navigate("/");
    }

    function handleLogOut() {
        setUser('');
        localStorage.setItem('user', '');
        navigate("/");
    }
    return (
        <div className="header">
            <h1 onClick={handleLogoClick}>HARING.</h1>
            {user !== undefined && user !== "" ? (
            <div className="head-txt">
                <p>Welcome, {user}</p>
                <span>||</span>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
            ) : 
            (<></>)}
        </div>
    );
    }