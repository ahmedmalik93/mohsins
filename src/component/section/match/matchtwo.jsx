import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Latest Matches And Results";


let UpcomingList = [
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        bgImgUrl: 'assets/images/match/bg/01.jpg',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-3.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-4.png',
        bgImgUrl: 'assets/images/match/bg/02.jpg',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-5.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-6.png',
        bgImgUrl: 'assets/images/match/bg/03.jpg',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-7.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-8.png',
        bgImgUrl: 'assets/images/match/bg/04.jpg',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
]

let FinishedList = [
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-8.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-7.png',
        bgImgUrl: 'assets/images/match/bg/04.jpg',
        result: '2 : 3',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-6.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-5.png',
        bgImgUrl: 'assets/images/match/bg/03.jpg',
        result: '2 : 3',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-4.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-3.png',
        bgImgUrl: 'assets/images/match/bg/02.jpg',
        result: '2 : 3',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    {
        title: '2 Groups,10 Players',
        subTitle: 'Dragon Gamers',
        subTitleTwo: 'Wolves Squade',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        bgImgUrl: 'assets/images/match/bg/01.jpg',
        result: '2 : 3',
        imgAlt: 'Team member Image',
        btnText: 'View Stream',
        memberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Member Thumb',
            },
        ],
        memberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Member Thumb',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Member Thumb',
            },
        ]
    },
    
]


class MatchTwo extends Component {
    render() { 
        return (
            <section className="match padding-top padding-bottom">
                <div className="container">
                    <div className="section-header-2 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-header-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="section-header-content">
                            <ul className="filter-btns nav nav-pills" id="pills-tab-match" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link active" id="pills-upcoming-tab" data-bs-toggle="pill" data-bs-target="#pills-upcoming" type="button" role="tab" aria-controls="pills-upcoming" aria-selected="true">Upcoming</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-finished-tab" data-bs-toggle="pill" data-bs-target="#pills-finished" type="button" role="tab" aria-controls="pills-finished" aria-selected="false">Finished</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="match__wrapper">
                        <div className="tab-content" id="pills-tabContent-match">
                            <div className="tab-pane fade show active" id="pills-upcoming" role="tabpanel"
                                aria-labelledby="pills-upcoming-tab">
                                <div className="row g-3">
                                    {UpcomingList.map((val, i) => (
                                        <div className="col-12" key={i}>
                                            <div className="match__item match__item--style-2" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                <div className="match__item-inner">
                                                    <div className="match__item-top">
                                                        <div className="match__item-title">
                                                            <h4><Link to="/match-single">{val.title}</Link></h4>
                                                            <p>{val.matchDate} <Link className="text-btn" to="/stream">{val.btnText}</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="match__item-bottom">
                                                        <ul className="match__item-bottomList">
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <div className="match__team-content">
                                                                        <h5 className="mb-3"><Link to="/team-single">{val.subTitle}</Link></h5>
                                                                        <ul className="match__team-members">
                                                                            {val.memberListOne.map((val, i) => (
                                                                                <li className="match__team-member" key={i}>
                                                                                    <Link to="player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="match__vs"><img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} /></li>
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <div className="match__team-content">
                                                                        <h5 className="mb-3"><Link to="/team-single">{val.subTitleTwo}</Link></h5>
                                                                        <ul className="match__team-members">
                                                                            {val.memberListTwo.map((val, i) => (
                                                                                <li className="match__team-member" key={i}>
                                                                                    <Link to="player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="pills-finished" role="tabpanel" aria-labelledby="pills-finished-tab">
                                <div className="row g-3">
                                    {FinishedList.map((val, i) => (
                                        <div className="col-12" key={i}>
                                            <div className="match__item match__item--style-2" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                <div className="match__item-inner">
                                                    <div className="match__item-top">
                                                        <div className="match__item-title">
                                                            <h4><Link to="/match-single">{val.title}</Link></h4>
                                                            <p>{val.matchDate} <Link className="text-btn" to="/stream">{val.btnText}</Link></p>
                                                        </div>
                                                    </div>
                                                    <div className="match__item-bottom">
                                                        <ul className="match__item-bottomList">
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <div className="match__team-content">
                                                                        <h5 className="mb-3"><Link to="/team-single">{val.subTitle}</Link></h5>
                                                                        <ul className="match__team-members">
                                                                            {val.memberListOne.map((val, i) => (
                                                                                <li className="match__team-member" key={i}>
                                                                                    <Link to="player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="match__vs">
                                                                <h3>{val.result}</h3>
                                                            </li>
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <div className="match__team-content">
                                                                        <h5 className="mb-3"><Link to="/team-single">{val.subTitleTwo}</Link></h5>
                                                                        <ul className="match__team-members">
                                                                            {val.memberListTwo.map((val, i) => (
                                                                                <li className="match__team-member" key={i}>
                                                                                    <Link to="player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default MatchTwo;