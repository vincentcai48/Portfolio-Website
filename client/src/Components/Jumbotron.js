import React from "react"

class Jumbotron extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="jumbotron">
                <div className="jumbotron-text">
                    <h2>{this.props.title}</h2>
                    {this.props.description==null?"":<a href="/contact">{this.props.description}<span className="arrow-button">{this.props.afterelement}</span></a>}
                </div>
            </div>
        )
    }
}

export default Jumbotron