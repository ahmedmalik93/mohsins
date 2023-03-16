import { Component, Fragment } from "react";
import { Link } from "react-router-dom";



import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

const aboutTitle = "About player";
const Name = "Alexer Tom (Sniper)";
const pageName = "Madness Gangs";
const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias nihil dicta tempora itaque laborum culpa, recusandae quod dolore magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia.";
const btnText = "Become A Sponsor";


let SocialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitch',
        siteLink: '#',
    },
    {
        iconName: 'icofont-youtube-play',
        siteLink: '#',
    },
    {
        iconName: 'icofont-steam',
        siteLink: '#',
    },
]

let badgeList = [
    {
        imgUrl: 'assets/images/team/single/badge-1.png',
        imgAlt: 'Badge Image',
    },
    {
        imgUrl: 'assets/images/team/single/badge-2.png',
        imgAlt: 'Badge Image',
    },
    {
        imgUrl: 'assets/images/team/single/badge-3.png',
        imgAlt: 'Badge Image',
    },
    {
        imgUrl: 'assets/images/team/single/badge-1.png',
        imgAlt: 'Badge Image',
    },
    {
        imgUrl: 'assets/images/team/single/badge-2.png',
        imgAlt: 'Badge Image',
    },
    {
        imgUrl: 'assets/images/team/single/badge-3.png',
        imgAlt: 'Badge Image',
    },
]

let PlayerMeta = [
    {
        iconName: 'icofont-skull-face',
        desc: 'Death',
        count: '210',
    },
    {
        iconName: 'icofont-military',
        desc: 'Kills',
        count: '360',
    },
    {
        iconName: 'icofont-focus',
        desc: 'Headshots',
        count: '454',
    },
]

class PlayerSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Player Single'} curPage={'Player Single'} />
                <div className="about-player-section padding-top padding-bottom">
                    <div className="container">
                        <div className="about-player">
                            <div className="about-player__wrapper">
                                <div className="about-player-thumb">
                                    <img src="assets/images/player/single/01.jpg" alt="player Images" />
                                    <div className="player-profile"><img src="assets/images/player/single/player.jpg" alt="Player Image" /></div>
                                </div>
                                <div className="about-player-content">
                                    <div className="about-player-top">
                                        <div className="about-player-title">
                                            <h3>{Name}</h3>
                                            <p>Current Team: <Link to="/team-single">{pageName}</Link> </p>
                                        </div>
                                        <ul className="d-flex flex-wrap justify-content-center player-single-meta mb-0">
                                            {PlayerMeta.map((val, i) => (
                                                <li className="player-meta-item" key={i}>
                                                    <span><i className={val.iconName}></i></span>
                                                    <p>{val.desc}</p>
                                                    <p>{val.count}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="about-player-bottom">
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <div className="about-player-details">
                                                    <div className="about-player-subtitle">
                                                        <h4>{aboutTitle}</h4>
                                                        <ul className="social">
                                                            {SocialList.map((val, i) => (
                                                                <li className="social__item" key={i}>
                                                                    <a href={val.siteLink} className="social__link"><i className={val.iconName}></i></a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <p>{desc}</p>
                                                    <a href="#" className="default-btn mt-3"><span>{btnText}</span></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-player-badge">
                                                    <div className="about-player-badge-title">
                                                        <h4>Badges</h4>
                                                    </div>
                                                    <div className="about-badge-slider overflow-hidden">
                                                        <Swiper
                                                            spaceBetween={20}
                                                            slidesPerView={2}
                                                            loop={'true'}
                                                            autoplay={{
                                                                delay: 5000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            modules={[Autoplay]}
                                                            breakpoints={{
                                                                0: {
                                                                    width: 0,
                                                                    slidesPerView: 1,
                                                                },
                                                                768: {
                                                                    width: 768,
                                                                    slidesPerView: 5.8,
                                                                },
                                                            }}
                                                        >
                                                            {badgeList.map((val, i) => (
                                                                <SwiperSlide key={i}>
                                                                    <div className="about-badge-item">
                                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))}
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default PlayerSingle;