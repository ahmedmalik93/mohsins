import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const contactNumber = "+800-123-4567 6587";
const contactAddress = "Beverley, New York 224 USA";

let SocialMideaList = [
    {
        IconName: 'icofont-facebook-messenger',
        IconLink: '#',
    },
    {
        IconName: 'icofont-twitter',
        IconLink: '#',
    },
    {
        IconName: 'icofont-vimeo',
        IconLink: '#',
    },
    {
        IconName: 'icofont-skype',
        IconLink: '#',
    },
    {
        IconName: 'icofont-rss-feed',
        IconLink: '#',
    },
]

class Header extends Component {

    menuTrigger() {
        document.querySelector('.menu').classList.toggle('active')
        document.querySelector('.header-bar').classList.toggle('active')
    }
    menuTriggerTwo() {
        document.querySelector('.header-top').classList.toggle('open')
    }
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header-section').classList.add(['header-fixed'], ['fadeInUp'])
            }else{
                document.querySelector('.header-section').classList.remove(['header-fixed'], ['fadeInUp'])
            }
        });
        return (
            <header className="header-section">
                <div className="container">
                    <div className="header-holder">
                        <div className="header-menu-part">
                            <div className="header-top">
                                <div className="header-top-area">
                                    <ul className="left">
                                        <li>
                                            <i className="icofont-ui-call"></i> <span>{contactNumber}</span>
                                        </li>
                                        <li>
                                            <i className="icofont-location-pin"></i> {contactAddress}
                                        </li>
                                    </ul>
                                    <ul className="social-icons d-flex align-items-center">
                                        {SocialMideaList.map((val, i) => (
                                            <li key={i}>
                                                <a href={`${val.IconLink}`}><i className={`${val.IconName}`}></i></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="header-bottom d-flex flex-wrap justify-content-between align-items-center">
                                <div className="brand-logo d-none d-lg-inline-block">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-wrapper justify-content-lg-end">
                                    <div className="mobile-logo d-lg-none">
                                        <Link to="/"><img src="assets/images/logo/logo.png" alt="logo" /></Link>
                                    </div>
                                    <div className="menu-area">
                                        <ul className="menu">
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Home</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/">Home 1</NavLink></li>
                                                    <li><NavLink to="/index-2">Home 2</NavLink></li>
                                                    <li><NavLink to="/index-3">Home 3</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Games</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/tournament">Tournament 1</NavLink></li>
                                                    <li><NavLink to="/tournament-2">Tournament 2</NavLink></li>
                                                    <li><NavLink to="/tournament-single">Tournament Single</NavLink></li>
                                                    <li><NavLink to="/match">Match</NavLink></li>
                                                    <li><NavLink to="/match-2">Match 2</NavLink></li>
                                                    <li><NavLink to="/match-day">Match Day</NavLink></li>
                                                    <li><NavLink to="/match-single">Match Single</NavLink></li>
                                                    <li><NavLink to="/match-single-2">Match Single 2</NavLink></li>
                                                    <li><NavLink to="/stream">Video Stream</NavLink></li>
                                                    <li><NavLink to="/achievements">Achievement</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Teams</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/team">Team 1</NavLink></li>
                                                    <li><NavLink to="/team-2">Team 2</NavLink></li>
                                                    <li><NavLink to="/team-single">Team Single</NavLink></li>
                                                    <li><NavLink to="/team-member">Team Members</NavLink></li>
                                                    <li><NavLink to="/player-single">Team Player Single</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Pages</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/about">About</NavLink></li>
                                                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                                                    <li><NavLink to="/partners">Partners</NavLink></li>
                                                    <li><NavLink to="/shop">Shop page</NavLink></li>
                                                    <li><NavLink to="/shop-single">Product Signle</NavLink></li>
                                                    <li><NavLink to="/cart-page">Product Cart</NavLink></li>
                                                    <li><NavLink to="/forgot-pass">Reset Pass</NavLink></li>
                                                    <li><NavLink to="/404">404</NavLink></li>
                                                    <li><NavLink to="/coming-soon">Coming Soon</NavLink></li>
                                                    <li><NavLink to="/coming-soon-2">Coming Soon 2</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Blog</a>
                                                <ul className="submenu dropdown-menu">
                                                    <li><NavLink to="/blog">Blog</NavLink></li>
                                                    <li><NavLink to="/blog-2">Blog 2</NavLink></li>
                                                    <li><NavLink to="/blog-3">Blog 3</NavLink></li>
                                                    <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">Contact</NavLink></li>
                                        </ul>
                                        <NavLink to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </NavLink>
                                        <NavLink to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span></NavLink>

                                        <div className="header-bar d-lg-none" onClick={this.menuTrigger}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="ellepsis-bar d-lg-none" onClick={this.menuTriggerTwo}>
                                            <i className="icofont-info-square"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;