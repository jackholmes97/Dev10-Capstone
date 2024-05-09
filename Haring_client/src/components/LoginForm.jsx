import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({user, setUser}) {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    
    const navigate = useNavigate();


    function handleCancel() {
        navigate("/");
    }

    function addUsername(e) {
        setUsername(e.target.value);
    }

    function addPassword(e) {
        setPassword(e.target.value);
    }

    function handleLogin(e) {
        e.preventDefault();
        fetch("http://localhost:8080/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                enabled: true
            }),
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Username or password is incorrect");
                }
            })
            .then((data) => {
                console.log("Success:", data);
                if (data !== undefined && data.jwt !== null && data.jwt !== "") {
                    setUser(username);
                    localStorage.setItem("user", username);
                    navigate("/community");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <div className="login-form-container">
            {showLogin ? (
                <div className="login-form-card">
                    <div className="login-form">
                        <h1>Login.</h1>
                        <form className="login-inputs">
                            <input className="input-field-login" type="text" value={username} onChange={addUsername} placeholder="Username" required />
                            <input className="input-field-login" type="password" value={password} onChange={addPassword} placeholder="Password" required />
                            <div className="lg-btns">
                                <button className="login-button" type="submit" onClick={handleLogin}>Login</button>
                                <button className="login-button" type="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="register-form-card">
                    <div className="register-form">
                        <h1>Register.</h1>
                        <form className="login-inputs">
                            <input className="input-field-login" type="text" value={username} onChange={addUsername} placeholder="Username" required/>
                            <input className="input-field-login" type="password" value={password} onChange={addPassword} placeholder="Password" required/>
                            <div className="lg-btns">
                                <button className="login-button" type="submit">Create Account</button>
                                <button className="login-button" type="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <div className="login-register-toggle">
                <button onClick={() => setShowLogin(true)}>Login</button>
                <span>||</span>
                <button onClick={() => setShowLogin(false)}>Register</button>
            </div>
        </div>
    );


}
