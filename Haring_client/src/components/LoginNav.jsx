import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function LoginNav() {
    const navigate = useNavigate();
    function handleLogoClick() {
        
        navigate("/");
    }
    return (
        <div className="header">
            <h1 onClick={handleLogoClick}>HARING.</h1>
        </div>
    );
    }