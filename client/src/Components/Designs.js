import React from "react"
import Jumbotron from "./Jumbotron"
import Projects from "./Projects"

class Designs extends React.Component{
    render(){
        return(
            <div className="main">
                <Jumbotron title="Website Designs" />
                <Projects/>
            </div>
        )
    }
}

export default Designs