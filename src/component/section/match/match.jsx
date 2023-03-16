import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Latest Matches And Results";

let UpcomingList = [
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-3.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-4.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-5.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-6.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-7.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-8.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgAlt: 'Team member Image',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'Team member Image',
        result: '2 : 3',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-2.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'Team member Image',
        result: '0 : 1',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-5.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'Team member Image',
        result: '2 : 4',
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
        priceTitle: 'Prize Pool $30,000',
        matchName: 'EU Winner Leage - Starter Division',
        matchDate: '03 Oct 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-7.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-8.png',
        imgAlt: 'Team member Image',
        result: '3 : 0',
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

class Match extends Component {
    render() { 
        return (
            <section className="match padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="match__wrapper">
                        <ul className="filter-btns nav nav-pills" id="pills-tab-match" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="filter-btn nav-link active" id="pills-upcoming-tab" data-bs-toggle="pill" data-bs-target="#pills-upcoming" type="button" role="tab" aria-controls="pills-upcoming" aria-selected="true">Upcoming</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="filter-btn nav-link" id="pills-finished-tab" data-bs-toggle="pill" data-bs-target="#pills-finished" type="button" role="tab" aria-controls="pills-finished" aria-selected="false">Finished</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent-match">
                            <div className="tab-pane fade show active" id="pills-upcoming" role="tabpanel"
                                aria-labelledby="pills-upcoming-tab">
                                <div className="row g-3">
                                    {UpcomingList.map((val, i) => (
                                        <div className="col-12" key={i}>
                                            <div className="match__item">
                                                <div className="match__item-inner">
                                                    <div className="match__item-top">
                                                        <div className="match__item-topTeam">
                                                            <h5>{val.title}</h5>
                                                        </div>
                                                        <div className="match__item-topPrize">
                                                            <h5>{val.priceTitle}</h5>
                                                        </div>
                                                        <div className="match__item-title">
                                                            <h4><Link to="/match-single">{val.matchName}</Link></h4>
                                                            <p>{val.matchDate}</p>
                                                        </div>
                                                    </div>
                                                    <div className="match__item-bottom">
                                                        <ul className="match__item-bottomList">
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <ul className="match__team-members">
                                                                        {val.memberListOne.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.Alt}`} /></Link>
                                                                            </li>
                                                                        ))} 
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="match__vs"><img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} /></li>
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <ul className="match__team-members">
                                                                        {val.memberListTwo.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.Alt}`} /></Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
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
                                            <div className="match__item">
                                                <div className="match__item-inner">
                                                    <div className="match__item-top">
                                                        <div className="match__item-topTeam">
                                                            <h5>{val.title}</h5>
                                                        </div>
                                                        <div className="match__item-topPrize">
                                                            <h5>{val.priceTitle}</h5>
                                                        </div>
                                                        <div className="match__item-title">
                                                            <h4><Link to="/match-single">{val.matchName}</Link></h4>
                                                            <p>{val.matchDate}</p>
                                                        </div>
                                                    </div>
                                                    <div className="match__item-bottom">
                                                        <ul className="match__item-bottomList">
                                                            <li className="match__team">
                                                                <div className="match__team-inner">
                                                                    <div className="match__team-thumb">
                                                                        <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                                                    </div>
                                                                    <ul className="match__team-members">
                                                                        {val.memberListOne.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.Alt}`} /></Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
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
                                                                    <ul className="match__team-members">
                                                                        {val.memberListTwo.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.Alt}`} /></Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
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
 
export default Match;