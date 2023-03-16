import { Component, Fragment } from "react";
import { Link } from "react-router-dom";


import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import PageHeaderTwo from "../component/layout/pageheader-2";
import TeamMember from "../component/section/team/teammember";

const title = "The Madness Crew";
const badgeTitle = "Badges";
const aboutTitle = "About Team";
const aboutDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias nihil dicta  tempora itaque laborum culpa, recusandae quod dolore magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia.";
const desc = "Founded 11 Oct 2015";

let TeamMetaList = [
    {
        iconName: 'icofont-win-trophy',
        text: '15 WINS',
    },
    {
        iconName: 'icofont-flag-alt-2',
        text: '5 Loses',
    },
    {
        iconName: 'icofont-game',
        text: '03 Draws',
    },
]

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

class TeamSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeaderTwo title={'Madness Crew'} imgUrl={'assets/images/team/4.png'} />
                <div className="about-team-section padding-top padding-bottom">
                    <div className="container">
                        <div className="about-team">
                            <div className="about-team__wrapper">
                                <div className="about-team-thumb">
                                    <img src="assets/images/team/single/01.jpg" alt="Team Images" />
                                    <div className="game-name"><img src="assets/images/game/fortnite.png" alt="Fortnite" /></div>
                                </div>
                                <div className="about-team-content">
                                    <div className="about-team-top">
                                        <div className="about-team-title">
                                            <h3>{title}</h3>
                                            <p>{desc}</p>
                                        </div>
                                        <ul className="d-flex flex-wrap justify-content-center team-meta mb-0">
                                            {TeamMetaList.map((val, i) => (
                                                <li className="team-meta-item" key={i}>
                                                    <span className="left "><i className={val.iconName}></i></span>
                                                    <p className="right"> {val.text} </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="about-team-bottom">
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <div className="about-team-details">
                                                    <div className="about-team-subtitle">
                                                        <h4>{aboutTitle}</h4>
                                                        <ul className="social">
                                                            {SocialList.map((val, i) => (
                                                                <li className="social__item" key={i}>
                                                                    <a href={val.siteLink} className="social__link"><i className={val.iconName}></i></a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <p>{aboutDesc}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-team-badge">
                                                    <div className="about-team-badge-title">
                                                        <h4>{badgeTitle}</h4>
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
                                                                    slidesPerView: 5.5,
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
                <TeamMember />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TeamSingle;