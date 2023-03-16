import { Component } from "react";
import { Link } from "react-router-dom";


const title = "All matches schedule";
const upcomingTitle = "Upcoming Matches";
const previousTitle = "Previous Matches";
const btnText = "Browse All Matches";


let MatchListDefault = [
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/team-1.png',
        imgUrlTwo: 'assets/images/match/team-2.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchTitle: 'Battlefield-4 tournament',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
        btnText: 'Watch Now',
    },
]

let MatchListUpcoming = [
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchTitle: 'call of duty Tournament',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-3.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-4.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchTitle: 'call of duty Tournament',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-5.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-6.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchTitle: 'call of duty Tournament',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
]


let MatchListPrevious = [
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-7.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-8.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchResult: '4 - 2',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-9.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-10.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchResult: '4 - 2',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
    {
        matchInfo: '2 group',
        matchInfoTwo: '32 Players',
        matchPrice: 'Prize Pool',
        matchPriceTwo: '$3200',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-11.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-12.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'team-img',
        matchResult: '4 - 2',
        matchDate: '30 April 2022',
        matchTime: 'Time: 08:30PM',
    },
]

class MatchThree extends Component {
    render() { 
        return (
            <section className="match-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row mb-5">
                            {MatchListDefault.map((val, i) => (
                                <div className="col-12" key={i}>
                                    <div className="match-item home-3">
                                        <div className="match-inner">
                                            <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                <p className="match-team-info">
                                                {val.matchInfo} <span className="fw-bold">{val.matchInfoTwo}</span>
                                                </p>
                                                <p className="match-prize">{val.matchPrice} <span className="fw-bold">{val.matchPriceTwo}</span></p>
                                            </div>
                                            <div className="match-content">
                                                <div className="row gy-4 align-items-center justify-content-center">
                                                    <div className="col-xl-4 col-lg-6 order-md-2">
                                                        <div className="match-game-team">
                                                            <ul className="match-team-list d-flex flex-wrap align-items-center justify-content-center">
                                                                <li className="match-team-thumb">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                                <li className="text-center">
                                                                    <img className="w-75 w-md-100" src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                                </li>
                                                                <li className="match-team-thumb">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 order-md-1">
                                                        <div className="match-game-info">
                                                            <h4><Link to="/match-single">{val.matchTitle}</Link> </h4>
                                                            <p className="d-flex flex-wrap justify-content-center  justify-content-lg-start">
                                                                <span className="match-date">{val.matchDate} </span><span className="match-time">{val.matchTime}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-6 order-md-3">
                                                        <div className="match-game-social">
                                                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">
                                                                <li>
                                                                    <Link to="/match-single" className="default-btn reverse-effect">
                                                                        <span>{val.btnText} </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{upcomingTitle}</h3>
                                    <div className="row g-3">
                                        {MatchListUpcoming.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 home-3">
                                                    <div className="match-inner">
                                                        <div
                                                            className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">
                                                                {val.matchInfo} <span className="fw-bold">{val.matchInfoTwo}</span>
                                                            </p>
                                                            <p className="match-prize">{val.matchPrice} <span className="fw-bold">{val.matchPriceTwo}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>

                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4><Link to="/match-single">{val.matchTitle}</Link>
                                                                        </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchDate} </span><span className="match-time">{val.matchTime}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="upcome-matches">
                                    <h3 className="upcome-match-header">{previousTitle}</h3>
                                    <div className="row g-3">
                                        {MatchListPrevious.map((val, i) => (
                                            <div className="col-12" key={i}>
                                                <div className="match-item-2 home-3">
                                                    <div className="match-inner">
                                                        <div
                                                            className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">
                                                                {val.matchInfo} <span className="fw-bold">{val.matchInfoTwo}</span>
                                                            </p>
                                                            <p className="match-prize">{val.matchPrice} <span className="fw-bold">{val.matchPriceTwo}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row align-items-center justify-content-center">
                                                                <div className="col-md-2 col-5 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single" className="text-center"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-2 d-md-none">
                                                                    <img src="assets/images/match/vs.png" alt="vs" />
                                                                </div>
                                                                <div className="col-md-2 col-5 order-md-3 p-0">
                                                                    <div className="match-team-thumb text-center">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8 order-md-2 mt-4 mt-md-0">
                                                                    <div className="match-game-info text-center">
                                                                        <h4>{val.matchResult}</h4>
                                                                        <p className="d-flex flex-wrap justify-content-center">
                                                                            <span className="match-date">{val.matchDate} </span><span className="match-time">{val.matchTime}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrapper text-center mt-5">
                            <Link to="/match" className="default-btn"><span>{btnText} </span></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MatchThree;