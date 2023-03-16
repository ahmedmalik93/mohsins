import { Component } from "react";
import { Link } from "react-router-dom";
import TeamSlider from "./teamslider";

const title = "Meet Our Giant Teams";
const btnText = "Join as a Team";

class TeamTwo extends Component {
    render() { 
        return (
            <section className="team padding-top padding-bottom">
                <div className="container">
                    <div className="section-header-2 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="section-header-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="section-header-content">
                            <Link to="/contact" className="default-btn"><span>{btnText}</span></Link>
                        </div>

                    </div>
                    <div className="team__wrapper">
                        <div className="team__slider">
                            <TeamSlider />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TeamTwo;