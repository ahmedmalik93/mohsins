import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import Match from "../component/section/match/match";
import MatchFour from "../component/section/match/matchfour";

const btnText = "View Match";

let MatchItemSingle = [
    {
        bgImgUrl: 'assets/images/match/match-single.jpg',
        title: 'Indian Skull - Empire Gamers',
        date: '03 Dec 2022, 4:30pm',
        imgUrlOne: 'assets/images/match/teamsm/teamsm-1.png',
        imgUrlTwo: 'assets/images/match/teamsm/teamsm-2.png',
        imgUrlVs: 'assets/images/match/vs.png',
        imgUrlLogo: 'assets/images/game/fortnite.png',
        imgAlt: 'Match Thumb',
        teamNameOne: 'Indian Skull',
        teamNameTwo: 'Empire Gamers',
        teamMemberListOne: [
            {
                imgUrl: 'assets/images/match/teamsm/member/01.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/02.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/03.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/04.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/05.png',
                imgAlt: 'Team Member',
            },
        ],
        teamMemberListTwo: [
            {
                imgUrl: 'assets/images/match/teamsm/member/06.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/07.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/08.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/09.png',
                imgAlt: 'Team Member',
            },
            {
                imgUrl: 'assets/images/match/teamsm/member/10.png',
                imgAlt: 'Team Member',
            },
        ],
    },
]


class MatchSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Match Single'} curPage={'Match Single'} />
                <section className="match match--single padding-top padding-bottom">
                    <div className="container">
                        <div className="match__wrapper">
                            <div className="row g-3">
                                {MatchItemSingle.map((val, i) => (
                                    <div className="col-12" key={i}>
                                        <div className="match__item match__item--single" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                            <div className="match__item-inner">
                                                <div className="match__item-top">
                                                    <div className="match__item-title">
                                                        <div className="match__game mb-4">
                                                            <img src={`${val.imgUrlLogo}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <h4><a href="#"> {val.title} </a></h4>
                                                        <p>{val.date}</p>
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
                                                                    <h5 className="mb-3"><Link to="/team-single">{val.teamNameOne}</Link></h5>
                                                                    <ul className="match__team-members">
                                                                        {val.teamMemberListOne.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={val.imgAlt} /></Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="match__vs"><img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                        </li>
                                                        <li className="match__team">
                                                            <div className="match__team-inner">
                                                                <div className="match__team-thumb">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </div>
                                                                <div className="match__team-content">
                                                                    <h5 className="mb-3"><Link to="/team-single">{val.teamNameTwo} </Link></h5>
                                                                    <ul className="match__team-members">
                                                                        {val.teamMemberListTwo.map((val, i) => (
                                                                            <li className="match__team-member" key={i}>
                                                                                <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="mt-4 text-center">
                                                        <Link to="/stream" className="default-btn"><span>{btnText}</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <MatchFour />
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default MatchSingle;