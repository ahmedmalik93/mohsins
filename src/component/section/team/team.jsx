import { Component } from "react";
import { Link } from "react-router-dom";
import TeamSlider from "./teamslider";


const title = "Meet Our Main Power";
const btnText = "Join as a Team";



class Team extends Component {
    render() { 
        return (
            <section className="team padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="team__wrapper">
                        <TeamSlider />
                        <div className="mt-5 text-center">
                            <Link to="/contact" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Team;