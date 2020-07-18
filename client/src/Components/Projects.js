import React from "react"

//**IMPORT IMAGES OF PROJECTS**/
import italianrestaurant from "./images/italianrestaurantimage.PNG"
import realestate from "./images/realestateimage.PNG"
import imagegallery from "./images/imagegalleryimage.PNG"
import artshow from "./images/artshowebsite.PNG"

import SingleProject from "./SingleProject"

class Projects extends React.Component{
    constructor(){
        super()
        this.state ={
            showHeader: false,
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var hasReachedScrolled = document.querySelector('#projectsid').getBoundingClientRect().y<window.outerHeight-0.4*window.innerHeight;
            if (hasReachedScrolled != this.state.showHeader) this.setState({showHeader: hasReachedScrolled})
        })
    }

    render(){
        return(
            <div>
                <a id="projectsid"></a>
                <div className={this.state.showHeader?"projects-header show":"projects-header"}>
                    <h2>WEBSITE DESIGNS</h2>
                    <p>Sample Website Designs of all kinds to suit your needs. Designed and Developed by me.</p>
                </div>
                <section className="projects">
                    <SingleProject 
                        projectid="imagegallery" 
                        fontfamily="'Spinnaker', sans-serif"
                        backgroundcolor="#3cffff"
                        textcolor="black"
                        titletext="MODERN and INTERACTIVE" 
                        projecttitle="Image Gallery" 
                        subtitle="Collection of landscape images that are able to be saved in personal collection through creating a personal gallery and customizing the gallery" 
                        description= {["Fully Responsive","CSS Advanced Wave Animations", "Modern UI/UX", "REST API with MongoDB Database" ,"Account creation", "Authentication with JWT"]}
                        siteimage={imagegallery}
                        url="https://floating-savannah-20707.herokuapp.com/"
                    />
                    <SingleProject 
                        projectid="realestate" 
                        fontfamily="'Prata', serif"
                        backgroundcolor="black"
                        textcolor="#fff"
                        titletext="High End and Exquisite" 
                        projecttitle="Real Estate" 
                        subtitle="Extremely modern design with on screen animations. Multiple pages to display information about products and services. Perfect for an expository site that delivers wonderful user experience." 
                        description= {["Fully Responsive","Animated Moving Jumbotron","Extremely Modern and Fresh Look","REST API Backend","Admin Account Functionality","Flipcard CSS Animations"]}
                        siteimage={realestate}
                        url="https://arcane-sea-41925.herokuapp.com/"
                    />
                     <SingleProject 
                        projectid="italianrestaurant" 
                        fontfamily="'Rasa', serif"
                        backgroundcolor="darkred"
                        textcolor="lightyellow"
                        titletext="WARM and COZY" 
                        projecttitle="Italian Restaurant" 
                        subtitle="Website for an italian restaurant. Perfect for any site that wants an easy to use and welcoming website to display information. Simple but powerful design and layout with lots of room to put information." 
                        description={["Fully Responsive","Animated Jumbotron Slides","Alert functionality to show updates","Welcoming and Easy to Navigate","Ample Room for Info Display"]} 
                        siteimage={italianrestaurant}
                        url="https://protected-oasis-10677.herokuapp.com/"
                    />
                    <SingleProject 
                        projectid="artshow" 
                        fontfamily="'Patrick Hand SC', cursive"
                        backgroundcolor="lightgreen"
                        textcolor="black"
                        titletext="SIMPLE and ELEGANT" 
                        projecttitle="Art Show" 
                        subtitle="Simple and lightweight front end only design of a simple landing page for an art show. Perfect for any small landing page. Clearly displays information in a user friendly environment" 
                        description={["Fully Responsive","Scalable SVG illustrations", "Extremely lightweight and fast","Large text and User-friendly"]}
                        siteimage={artshow}
                        url="https://heuristic-leakey-8286bd.netlify.app/index.html"
                    />
                    <div className="contact-email">
                    <h3>EMAIL ME TO REQUEST A WEBSITE</h3>
                    <div>Email: vincent.cai48@gmail.com</div>
                    <a className="email-button" href="mailto:vincent.cai48@gmail.com">EMAIL ME NOW {">>>"}</a>
                </div>
                </section>
            </div>
        )
    }
}

export default Projects