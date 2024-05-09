import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Alerts from "../templates/functionality/Alerts";
import Button from "../templates/functionality/Button";
import Checkbox from "../templates/functionality/Checkbox";
import Select from "../templates/functionality/Select";
import Range from "../templates/functionality/Range";
import Toggle from "../templates/functionality/Toggle";
import InputField from "../templates/functionality/InputField";
export default function Defaults({templates}) {
    
    return (
        <div className="templates-container">
            <h1>Templates.</h1>
            <Divider sx={{ margin: "20px", border: ".5px solid black", height:"4px", backgroundColor: "tomato"}} />
            <div className="templates">
                <div>
                    <div key={templates[0].submissionId} className="template-card">
                        <h2>{templates[0].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[0].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[0].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Toggle/>
                        </div>
                        <div className="code-display-def">
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
                    <div key={templates[1].submissionId} className="template-card-2">
                        <h2>{templates[1].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[1].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[1].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Range/>
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[1].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[1].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div key={templates[2].submissionId} className="template-card-3">
                        <h2>{templates[2].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[2].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[2].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Select/>
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[2].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[2].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div key={templates[3].submissionId} className="template-card-4">
                        <h2>{templates[3].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[3].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[3].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Checkbox />
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[3].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[3].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div key={templates[4].submissionId} className="template-card-5">
                        <h2>{templates[4].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[4].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[4].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <InputField/>
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[4].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[4].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div key={templates[5].submissionId} className="template-card-6">
                        <h2>{templates[5].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[5].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[5].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Alerts/>
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[5].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[5].submissionCss}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                    <div key={templates[6].submissionId} className="template-card">
                        <h2>{templates[6].submissionTitle}</h2>
                        <p className="elm-type-lbl">{templates[6].elmType.elmTypeName}</p>
                        <p className="temp-desc">{templates[6].submissionDescription}</p>
                        <div>
                            <label className="snippet-label-def">Demo</label>
                            <Button/>
                        </div>
                        <div className="code-display-def">
                            <div>
                                <label className="snippet-label-def">HTML</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[6].submissionHtml}
                                    </code>
                                </pre>
                            </div>
                            <Divider orientation="vertical" flexItem sx={{ margin: "20px", height: "105%", backgroundColor: "black" }} />
                            <div>
                                <label className="snippet-label-def">CSS</label>
                                <pre className="code-container-def">
                                    <code>
                                        {templates[6].submissionCss}
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