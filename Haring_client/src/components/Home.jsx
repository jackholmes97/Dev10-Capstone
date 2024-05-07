import React from "react";
import { NavLink } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
export default function Home({user}) {
    console.log(user)
    return (
        <Slide direction="down" duration={2000} triggerOnce>
        <div className="home-container">
            <h1>A new collaborative design system and creative community.</h1>
            <p>Front End Styling and CSS development can be a daunting task for a novice software developer. I remember the feelings frustration and constant confusion I encountered while trying to center my first div. This is why many developers rely on design frameworks to give their web application that polished look that attracts the users attention. But once you feel comfortable in using design frameworks or component libraries, such as Bootstrap, Semantic, and seemingly dominant Material UI (for React), you'll notice a few conceptual flaws. For one, many of these frameworks have near inaccessible default stylings, which can make your designs within these frameworks look "Cookie Cutter" and impersonal. Another issue with design systems, is that there isn't enough emphasis on community and customization. Often times these design systems are intended to be implemented in their default form, which looks great but can wring the creative fun and inspiration out of designing a web application.</p>
            <div className="home-card-container">
                <div className="home-card">
                    <NavLink className={"card-text"} to="/templates">Templates</NavLink>
                </div>
                <div className="home-card">
                    <NavLink className={"card-text"} to="/about">About</NavLink>
                </div>
                <div className="home-card">
                    <NavLink className={"card-text"} to={user === '' ? '/login-form' : '/community'}>Community</NavLink>
                </div>
                
                
            </div>


        </div>
        </Slide>
    );
}