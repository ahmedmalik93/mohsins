import { Component } from "react";
import { Link } from "react-router-dom";

const subTitle = "Let's Play together";
const title = <h2 className="mb-3">JOIN <span className="theme-color text-uppercase">Gamerzy</span> <br /> ESPORTS TO BECOME NEXT PRO</h2>;
const btnText = "Join Community";

class Cta extends Component {
    render() { 
        return (
            <section className="cta-section padding-top padding-bottom">
                <div className="container">
                    <div className="cta-wrapper">
                        <div className="cta-item text-center bg--cover" style={{backgroundImage: "url(/assets/images/cta/bg.jpg)"}}>
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="cta-content">
                                        <p className="text-uppercase ls-2">{subTitle}</p>
                                        {title}
                                        <Link to="/signup" className="default-btn"><span>{btnText} <i className="icofont-circled-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Cta;