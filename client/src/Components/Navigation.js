import React from "react"

class Navigation extends React.Component{

    constructor(){
        super()
        this.state = {
            isScrolled: "",
        }
    }

    componentDidMount(){
        window.addEventListener("scroll",this.scrollEvent)
    }

    scrollEvent = () =>{
        var threshold = window.outerWidth>576?200:120
        if(window.pageYOffset >= threshold){
            this.setState({isScrolled: "fixed scrolled"})
        }else if(window.pageYOffset > 20){
            this.setState({isScrolled: "fixed"})
        }else{
            this.setState({isScrolled: ""})
        }
    }

    render(){
        return(
            <nav className={this.state.isScrolled}onScroll={this.scrollEvent}>
                <div className="nav-brand" style= {{postion:"relative", zIndex:"100", display: "block"}}><span className="brand"></span><a href="/"><h1>Vincent Cai Websites</h1></a></div>
                <div className="nav-buttons">
                    <a href="/"className="nav-link" >Home</a>
                    <a href="/designs"className="nav-link" >Designs</a>
                    <a href="/contact"className="nav-link" id="contact-now">Contact Now</a>
                </div>
            </nav>
        )
    }
}

export default Navigation