import { Component } from "react";
import { Link } from "react-router-dom";

const latTitle = "Latest Collection";
const winTitle = "Today's Winner";
const useTitle = "Useful Links";
const desc = "Upropr brand enomca sound technig after covale techno enable prospeve wastn marke whera propra and bran econmca sound techno";



let msList = [
    {
        imgUrl: 'assets/images/match/social-1.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-2.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/match/social-3.png',
        imgAlt: 'thumb',
        siteLink: '#',
    },
]

let RecentProduct = [
    {
        imgUrl: 'assets/images/footer/01.jpg',
        imgAlt: 'recent product',
        title: 'Gaming T Shirt',
        price: '$230',
    },
    {
        imgUrl: 'assets/images/footer/02.jpg',
        imgAlt: 'recent product',
        title: 'Gaming Sticker',
        price: '$230',
    },
]

let FooterWinnerList = [
    {
        imgUrl: 'assets/images/footer/team/01.jpg',
        imgAlt: 'Team Image',
    },
    {
        imgUrl: 'assets/images/footer/team/02.jpg',
        imgAlt: 'Team Image',
    },
    {
        imgUrl: 'assets/images/footer/team/03.jpg',
        imgAlt: 'Team Image',
    },
    {
        imgUrl: 'assets/images/footer/team/04.jpg',
        imgAlt: 'Team Image',
    },
    {
        imgUrl: 'assets/images/footer/team/05.jpg',
        imgAlt: 'Team Image',
    },
    {
        imgUrl: 'assets/images/footer/team/06.jpg',
        imgAlt: 'Team Image',
    },
]

let usefulLink = [
    {
        text: 'Home',
        textLink: '/',
    },
    {
        text: 'News',
        textLink: '#',
    },
    {
        text: 'Our Team',
        textLink: '/team',
    },
    {
        text: 'Matches',
        textLink: '/match',
    },
    {
        text: 'Tournament',
        textLink: '/tournament',
    },
    {
        text: 'About',
        textLink: '/about',
    },
    {
        text: 'Contact',
        textLink: '/contact',
    },
    {
        text: 'Partners',
        textLink: '/partners',
    },
    {
        text: 'Stream',
        textLink: '/stream',
    },
    {
        text: 'Gallery',
        textLink: '/gallery',
    },
]

class Footer extends Component {
    render() { 
        return (
            <footer className="footer-section">
                <div className="footer-middle padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="container">
                        <div className="row gx-4 gy-5">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{desc}</p>
                                            <ul className="match-social-list d-flex flex-wrap align-items-center">
                                                {msList.map((val, i) => (
                                                    <li key={i}><a href={val.siteLink}><img src={`${val.imgUrl}`} alt={val.imgAlt} /></a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{latTitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                            {RecentProduct.map((val, i) => (
                                                <div className="fm-item-widget lab-item" key={i}>
                                                    <div className="lab-inner">
                                                        <div className="lab-thumb">
                                                            <Link to="/shop-single"> <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                        </div>
                                                        <div className="lab-content">
                                                            <h6><a href="/shop-single">{val.title}</a></h6>
                                                            <p>price: <b>{val.price}</b></p>
                                                            <div className="rating">
                                                                <i className="icofont-ui-rating"></i>
                                                                <i className="icofont-ui-rating"></i>
                                                                <i className="icofont-ui-rating"></i>
                                                                <i className="icofont-ui-rating"></i>
                                                                <i className="icofont-ui-rating"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{useTitle}</h4>
                                        </div>
                                        <div className="footer-middle-content">
                                            <ul className="useful-linklist">
                                                {usefulLink.map((val, i) => (
                                                    <li key={i}><a className="useful-link" href={val.textLink}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{winTitle}</h4>
                                        </div>
                                        <div className="footer-middle-content">
                                            <ul className="footer__winner">
                                                {FooterWinnerList.map((val, i) => (
                                                    <li key={i}>
                                                        <Link className="footer__winner-item" to="/team-single">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>&copy;2022 <Link to="/"> Gamerzy </Link> - eSports And Gaming React Template.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;