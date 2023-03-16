import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import Team from "../component/section/team/team";

const title = "Fire Fight Toronto 4v4";
const place = "Toronto Canada";
const placeTime = "23 Dec 2022 15:39 PM";
const btnText = "Register";
const aboutTitle = "About tournament";
const desc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque alias nihil dicta tempora itaque laborum culpa, recusandae quod dolore magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia.";

const staTitle = "View Our Standings";

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

let AminitiesList = [
    {
        title: '62 Teams',
        details: 'Round Robin',
    },
    {
        title: '2 Groups',
        details: '36 Players',
    },
    {
        title: 'Prize Pool',
        details: '$1000 USD',
    },
]

let GroupListA = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'Thumb',
        name: 'Indianz',
        statusList: [
            {
                result: '20',
            },
            {
                result: '13',
            },
            {
                result: '2',
            },
            {
                result: '5',
            },
            {
                result: '152',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'Thumb',
        name: 'Soulders Z',
        statusList: [
            {
                result: '10',
            },
            {
                result: '5',
            },
            {
                result: '2',
            },
            {
                result: '3',
            },
            {
                result: '100',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'Thumb',
        name: 'War Gangs',
        statusList: [
            {
                result: '15',
            },
            {
                result: '7',
            },
            {
                result: '6',
            },
            {
                result: '2',
            },
            {
                result: '142',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'Thumb',
        name: 'Madness CR',
        statusList: [
            {
                result: '25',
            },
            {
                result: '13',
            },
            {
                result: '2',
            },
            {
                result: '10',
            },
            {
                result: '160',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'Thumb',
        name: 'Shark Sqd',
        statusList: [
            {
                result: '18',
            },
            {
                result: '5',
            },
            {
                result: '10',
            },
            {
                result: '3',
            },
            {
                result: '25',
            },
        ]
    },
]

let GroupListB = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'Thumb',
        name: 'Panda Crew',
        statusList: [
            {
                result: '20',
            },
            {
                result: '13',
            },
            {
                result: '2',
            },
            {
                result: '5',
            },
            {
                result: '152',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-7.png',
        imgAlt: 'Thumb',
        name: 'Spartan',
        statusList: [
            {
                result: '10',
            },
            {
                result: '5',
            },
            {
                result: '2',
            },
            {
                result: '3',
            },
            {
                result: '100',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-8.png',
        imgAlt: 'Thumb',
        name: 'ReaPearz',
        statusList: [
            {
                result: '15',
            },
            {
                result: '7',
            },
            {
                result: '6',
            },
            {
                result: '2',
            },
            {
                result: '142',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-9.png',
        imgAlt: 'Thumb',
        name: 'Soldier',
        statusList: [
            {
                result: '25',
            },
            {
                result: '13',
            },
            {
                result: '2',
            },
            {
                result: '10',
            },
            {
                result: '160',
            },
        ]
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-10.png',
        imgAlt: 'Thumb',
        name: 'Madness CR',
        statusList: [
            {
                result: '18',
            },
            {
                result: '5',
            },
            {
                result: '10',
            },
            {
                result: '3',
            },
            {
                result: '25',
            },
        ]
    },
]

class TournamentSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tournament Single'} curPage={'Tournament Single'} />
                <div className="about-tournament-section padding-top">
                    <div className="container">
                        <div className="about-tournament">
                            <div className="about-tournament__wrapper">
                                <div className="about-tournament-thumb">
                                    <img src="assets/images/tournament/single/01.jpg" alt="tournament Images" />
                                    <div className="game-name"><img src="assets/images/game/fortnite.png" alt="Fortnite" /></div>
                                </div>
                                <div className="about-tournament-content">
                                    <div className="about-tournament-top">
                                        <div className="about-tournament-title">
                                            <h3>{title}</h3>
                                            <ul className="tournament-placetime">
                                                <li><span><i className="icofont-google-map"></i></span> <a href="#">{place}</a></li>
                                                <li><span><i className="icofont-clock-time"></i></span> <a href="#">{placeTime}</a></li>
                                            </ul>
                                        </div>
                                        <Link to="/signup" className="default-btn"><span>{btnText}</span> </Link>
                                    </div>
                                    <div className="about-tournament-bottom">
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <div className="about-tournament-details">
                                                    <div className="about-tournament-subtitle">
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
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="tournament-aminities">
                                                    {AminitiesList.map((val, i) => (
                                                        <li className="tournament-aminities-item" key={i}>
                                                            <p className="tournament-am-title">{val.title}</p>
                                                            <p className="tournament-am-details">{val.details}</p>
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
                </div>
                <Team />
                <section className="standing">
                    <div className="container">
                        <div className="section-header">
                            <h2>{staTitle}</h2>
                        </div>
                        <div className="standing__wrapper">
                            <div className="row g-5">
                                <div className="col-lg-6">
                                    <div className="standing__chart">
                                        <ul className="standing__list">
                                            <li className="standing__header">
                                                <h5>Group A</h5>
                                            </li>
                                            <li className="standing__item standing__item--subheader">
                                                <div className="standing__item-inner">
                                                    <div className="standing__item-team">
                                                        <h6>COMPETITOR</h6>
                                                    </div>
                                                    <ul className="standing__item-status">
                                                        <li>
                                                            <h5>M</h5>
                                                        </li>
                                                        <li>
                                                            <h5>W</h5>
                                                        </li>
                                                        <li>
                                                            <h5>D</h5>
                                                        </li>
                                                        <li>
                                                            <h5>L</h5>
                                                        </li>
                                                        <li>
                                                            <h5>P</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            {GroupListA.map((val, i) => (
                                                <li className="standing__item" key={i}>
                                                    <div className="standing__item-inner">
                                                        <div className="standing__item-team">
                                                            <Link to="/team-single"><span><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></span> {val.name} </Link>
                                                        </div>
                                                        <ul className="standing__item-status">
                                                            {val.statusList.map((val, i) => (
                                                                <li key={i}>
                                                                    <p>{val.result}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="standing__chart">
                                        <ul className="standing__list">
                                            <li className="standing__header">
                                                <h5>Group B</h5>
                                            </li>
                                            <li className="standing__item standing__item--subheader">
                                                <div className="standing__item-inner">
                                                    <div className="standing__item-team">
                                                        <h6>COMPETITOR</h6>
                                                    </div>
                                                    <ul className="standing__item-status">
                                                        <li>
                                                            <h5>M</h5>
                                                        </li>
                                                        <li>
                                                            <h5>W</h5>
                                                        </li>
                                                        <li>
                                                            <h5>D</h5>
                                                        </li>
                                                        <li>
                                                            <h5>L</h5>
                                                        </li>
                                                        <li>
                                                            <h5>P</h5>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            {GroupListB.map((val, i) => (
                                                <li className="standing__item" key={i}>
                                                    <div className="standing__item-inner">
                                                        <div className="standing__item-team">
                                                            <Link to="/team-single"><span><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></span> {val.name} </Link>
                                                        </div>
                                                        <ul className="standing__item-status">
                                                            {val.statusList.map((val, i) => (
                                                                <li key={i}>
                                                                    <p>{val.result}</p>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TournamentSingle;