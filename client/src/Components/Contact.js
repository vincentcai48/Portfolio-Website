import React from "react"
import Jumbotron from "./Jumbotron"
import Title from "./Title"
import Technologies from "./Technologies"
import Projects from "./Projects"

class Main extends React.Component{
    render(){
        return(
            <div className="contact">


                <div className="jumbotron jumbotron-red">
                    <div className="jumbotron-red-text">
                        <h2>Get Your FREE Website</h2>
                        <a className="email-button" href="mailto:vincent.cai48@gmail.com">EMAIL ME NOW {">>>"}</a>
                    </div>
                </div>


                <div className="contact-title">
                    <div>I create beautiful simple websites and landing pages, 100% free of charge.</div>
                    <a href="/#projectsid">View Samples {">>>"}</a>
                </div>



                <div className="contact-main">
                    <h3>About</h3>
                    <p>I make simple websites for free. All my websites are fully responsive to mobile, tablet, laptop, desktop, and all viewport widths.</p>
                    <a href="/">Learn More {">>>"}</a>
                    <ul>
                        <li><span className="fa fa-star"></span><span className="list-text">Fully Responsive</span></li>
                        <li><span className="fa fa-star"></span><span className="list-text">100% Free of Charge</span></li>
                        <li><span className="fa fa-star"></span><span className="list-text">Beautiful Design and UI</span></li>
                        <li><span className="list-text" style={{fontSize: "0.8em"}}>NOTE: Websites made only on availability. I cannot guarantee that a website can be made. Please email for more details</span></li>
                    </ul>
                </div>

                <div className="contact-email">
                    <h3>EMAIL ME TO REQUEST A WEBSITE</h3>
                    <div>Email: vincent.cai48@gmail.com</div>
                    <a className="email-button" href="mailto:vincent.cai48@gmail.com">EMAIL ME NOW {">>>"}</a>
                </div>
            </div>
        )
    }
}

export default Main