import { Component } from "react";
import { Link } from "react-router-dom";

const title = <h1>Best <span> Game </span> <span> Playing </span> Online </h1>;
const desc = "Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital";
const btnText = "join us today";

class Banner extends Component {
    render() { 
        return (
            <section className="banner" style={{backgroundImage: "url(/assets/images/banner/bg-2.jpg)"}}>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-xxl-6 col-lg-7 col-md-9 col-sm-10 col-12">
                            <div className="banner__content">
                                {title}
                                <p>{desc}</p>
                                <Link to="/login" className="default-btn"><span>{btnText} <i className="icofont-play-alt-1"></i></span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Banner;