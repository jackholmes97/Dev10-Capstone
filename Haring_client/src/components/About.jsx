import React from "react";
import AboutCarousel from "./AboutCarousel";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function About() {
    const navigate = useNavigate();
    function handleBack() {
        navigate("/");
    }
    return (
        <div className="abt-page-cont">
            <div className="back-arr">
                <ArrowBackIcon className="back-btn" onClick={handleBack} />
            </div>
            
            <div className="abt-page">
                <AboutCarousel />
                <div className="abt-txt">
                    <h1>About.</h1>
                    <p>
                        Welcome to HARING, where design meets collaboration in the digital realm! Inspired by the vibrant and inclusive spirit of street artist Keith Haring, our front-end design system is a celebration of creativity and teamwork in web design.
                    </p>
                    <br />
                    <p>
                        Just like Haring's iconic artwork brought people together through bold colors and playful lines, HARING is designed to inspire designers and developers to collaborate seamlessly. Our goal is to foster a sense of community and innovation, encouraging everyone to push the boundaries of front-end design.
                    </p>
                    <br />
                    <p>
                        With HARING, you'll discover a comprehensive set of design elements, components, and guidelines that empower you to create visually stunning and user-friendly interfaces. Whether you're a seasoned designer or just starting your journey in web design, HARING provides the tools and inspiration you need to bring your ideas to life.
                    </p>
                    <br />
                    <p>
                        Join us in embracing the spirit of collaboration and creativity. Let's paint the digital world with imagination and innovation together, one pixel at a time.
                    </p>
                </div>
            </div>
        </div>
    );
}