import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
    return (
        <div className="home-container">
            <h1>A new collaborative design system and creative community.</h1>
            <div className="home-card-container">
                <div className="home-card">
                    <NavLink className={"card-text"} to="/templates">Templates</NavLink>
                </div>
                <div className="home-card">
                    <NavLink className={"card-text"} to="/about">About</NavLink>
                </div>
                <div className="home-card">
                    <NavLink className={"card-text"} to="/community">Community</NavLink>
                </div>
                
                
            </div>


        </div>
    );
}