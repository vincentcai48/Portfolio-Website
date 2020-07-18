import React from "react"

class SingleProject extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow: false
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var hasReachedScrolled = document.querySelector(`#${this.props.projectid}`).getBoundingClientRect().y<window.outerHeight;
            if (hasReachedScrolled != this.state.isShow) this.setState({isShow: hasReachedScrolled})
        })
    }

    render(){
        var listarray = this.props.description.map(element => <li><span className="fa fa-star"></span>{element}</li>)
        return(
            <div className={this.state.isShow?"project show":"project"} id={this.props.projectid} style={{ backgroundColor: this.props.backgroundcolor, fontFamily: this.props.fontfamily, color: this.props.textcolor}}>
                    <div className="title-text">{this.props.titletext}</div>
                    <h3 className="project-title">{this.props.projecttitle}</h3>
                    <div className="subtitle">{this.props.subtitle}</div>
                    <ul className="description">{listarray}</ul>
                    <div className="site">
                    <img className="site"src={this.props.siteimage} style={this.props.imagestyles}></img>
                    <a href={this.props.url} className="site-link" style={{color: this.props.backgroundcolor, backgroundColor: this.props.textcolor}} target="_blank">Go To Site</a>
                    </div>
            </div>
        )
    }
}

export default SingleProject