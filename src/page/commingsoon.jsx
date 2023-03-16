import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import CountDown from "../component/sidebar/countdown";

const title = "We're Coming Soon !";
const desc = "We are working hard to bring you new experience";


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

class CommingSoon extends Component {
    render() { 
        return (
            <section className="coming-soon">
                <div className="coming-soon__inner">
                    <div className="coming-soon__content">
                        <h2 className="color--gradient-y">{title} </h2>
                        <p>{desc}</p>
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
                    <div className="coming-soon__thumb">
                        <Link to="/"><img src="assets/images/coming-soon/01.jpg" alt="NFT Image" /> </Link>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default CommingSoon;