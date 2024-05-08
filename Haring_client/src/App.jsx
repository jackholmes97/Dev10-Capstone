import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Community from './components/Community'
import LoginNav from './components/LoginNav'
import Defaults from './components/Defaults'
import PostExpanded from './components/PostExpanded'
import SubmissionForm from './components/SubmissionForm'
import './App.css'
import { Routes, Route, } from 'react-router-dom'
import LoginForm from './components/LoginForm'

function App() {
  const [user, setUser] = useState('')
  const [posterId, setPosterId] = useState("");
  const [authorities, setAuthorities] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/submissions")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmissions(data);
      });
  }
    , []);
  useEffect(() => {
    setUser(localStorage.getItem('user') || '')
  }
    , []);

  return (
    <>
      <LoginNav user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community setUser={setUser} submissions={submissions} setSubmissions={setSubmissions} posterId={posterId} setPosterId={setPosterId} authorities={authorities} setAuthorities={setAuthorities}/>} />
        <Route path="/templates" element={<Defaults />} />
        <Route path="/login-form" element={<LoginForm user={user} setUser={setUser} />} />
        <Route path="/new-submission" element={<SubmissionForm user={user} setSubmissions={setSubmissions} submissions={submissions}/>} />
        {submissions.map((submission) => (
          <Route key={submission.submissionId} path={"/submission/" + submission.submissionId} element={<PostExpanded user={user} setUser={setUser} sub={submission} setSubmissions={setSubmissions} posterId={posterId} authorities={authorities}/>} />
        ))}
      </Routes>
    </>
  )
}

export default App;
