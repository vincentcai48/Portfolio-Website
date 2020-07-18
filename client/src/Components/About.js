import React from "react"
import Jumbotron from "./Jumbotron"

class About extends React.Component{
    render(){
        return(
            <div>
                <Jumbotron title="About This Website" />
                <div class="about-main">
                    <h2>Title</h2>
                    <p id="p1">Paragraph 1 </p>
                    <p id="p2">Paragraph 2 </p>
                </div>
            </div>
        )
    }
}

export default About