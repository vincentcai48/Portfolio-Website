import React from "react"
import html from "./images/html.png"
import css from "./images/css.jpg"
import bootstrap from "./images/bootstrap.png"
import express from "./images/express.jpg"
import react from "./images/react.png"
import nodejs from "./images/nodejs.png"
import js from "./images/js.png"



class Technologies extends React.Component{
    render(){
        return(
            <div className="technologies">
                <h2>Technologies</h2>
                <div className="technologies-list">
                    <div className="technology"><img src={html} alt="tech-image"></img><span>HTML 5</span></div>
                    <div className="technology"><img src={css} style={{width: "8vw", margin:"0 1vw"}}alt="tech-image"></img><span>CSS 3</span></div>
                    <div className="technology"><img src={bootstrap} alt="tech-image"></img><span>Bootstrap 4</span></div>
                    <div className="technology"><img src={js} alt="tech-image"></img><span>Javascript (ES6+)</span></div>
                    <div className="technology"><img src={react} alt="tech-image"></img><span>React JS</span></div>
                    <div className="technology"><img src={nodejs} alt="tech-image"></img><span>Node JS</span></div>
                </div>
            </div>
        )
    }
}

export default Technologies