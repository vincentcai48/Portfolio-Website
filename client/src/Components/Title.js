import React from "react"

class Title extends React.Component{
    render(){
        return(
            <div className="title">
                <h2>About Me</h2>
                <div>
                    <p>Hi my name is Vincent Cai. I'm a student and a web developer/designer. Due to the recent COVID-19 Pandemic, many individuals, organizations, and businesses are in need of an online presense. To help the community through these difficult times, I will be creating and redesigning simple websites for free. Contact me by email if you want to request a website.</p>
                    <img src="https://images.unsplash.com/photo-1578582805561-4abd22211b9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                </div>
            </div>
        )
    }
}

export default Title