import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import CountDown from "../component/sidebar/countdown";

const title = "We're Coming Very Soon !";


let SocialList = [
    {
        iconName: 'icofont-twitch',
        siteLink: '#',
    },
    {
        iconName: 'icofont-youtube-play',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-brand-steam',
        siteLink: '#',
    },
]

class CommingSoonTwo extends Component {
    render() { 
        return (
            <section className="coming-soon coming-soon--style-2 bg--cover" style={{backgroundImage: "url(/assets/images/coming-soon/bg.jpg)"}}>
                <div className="coming-soon__inner">
                    <div className="coming-soon__content">
                        <h2 className="color--gradient-y">{title} </h2>
                        <CountDown />
                        <form className="input-group mb-5">
                            <input type="text" className="form-control" placeholder="Enter You Email to get update" />
                            <button className="input-group-text" type="submit"><i className="icofont-paper-plane"></i></button>
                        </form>
                        <ul className="social justify-content-center">
                            {SocialList.map((val, i) => (
                                <li className="social__item" key={i}>
                                    <a href={val.siteLink} className="social__link"><i className={val.iconName}></i></a>
                                </li>
                            ))}
                        </ul>
                        <div className="d-inline">
                            <Link to="/" className="default-btn mt-5"><span>Back To Home</span></Link>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
 
export default CommingSoonTwo;