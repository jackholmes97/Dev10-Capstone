import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Alerts from "../templates/functionality/Alerts";
export default function Defaults({templates}) {
    
    return (
        <div className="templates-container">
            <h1>Templates</h1>
            <div className="templates">
                <div>
                    <div key={templates[0].submissionId} className="template-card">
                        <h2>{templates[0].submissionTitle}</h2>
                        <p>{templates[0].elmType.elmTypeName}</p>
                        <p>{templates[0].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Alerts/>
                        </div>
                        <div className="code-display">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[0].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[0].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}