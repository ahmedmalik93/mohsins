import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


let TournamentListOne = [
    {
        title: 'Cyborg Gunners VS Apes',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/01.png',
        imgUrlTwo: 'assets/images/tournament/team/02.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Gunner VS Galaxy',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/03.png',
        imgUrlTwo: 'assets/images/tournament/team/04.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Greens VS Samurai',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/05.png',
        imgUrlTwo: 'assets/images/tournament/team/06.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Cyborg Gunners VS Apes',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/04.png',
        imgUrlTwo: 'assets/images/tournament/team/05.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Gunner VS Galaxy',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/06.png',
        imgUrlTwo: 'assets/images/tournament/team/01.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Greens VS Samurai',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/02.png',
        imgUrlTwo: 'assets/images/tournament/team/05.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
]

let TournamentListTwo = [
    {
        title: 'Cyborg Gunners VS Apes',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/01.png',
        imgUrlTwo: 'assets/images/tournament/team/02.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Greens VS Samurai',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/05.png',
        imgUrlTwo: 'assets/images/tournament/team/06.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
]


let TournamentListThree = [
    {
        title: 'Gunner VS Galaxy',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/03.png',
        imgUrlTwo: 'assets/images/tournament/team/04.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Greens VS Samurai',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/05.png',
        imgUrlTwo: 'assets/images/tournament/team/06.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
]

let TournamentListFour = [
    {
        title: 'Cyborg Gunners VS Apes',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/01.png',
        imgUrlTwo: 'assets/images/tournament/team/02.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
    {
        title: 'Gunner VS Galaxy',
        date: '03 Oct 2022 04:38 pm',
        imgUrlOne: 'assets/images/tournament/team/03.png',
        imgUrlTwo: 'assets/images/tournament/team/04.png',
        imgUrlVs: 'assets/images/tournament/team/vs.png',
        imgAlt: 'Team Logo',
        btnText: 'View Match',
    },
]


class MatchDayPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Today\'s Matches'} curPage={'Today\'s Matches'} />
                <section className="tournament padding-top padding-bottom">
                    <div className="container">
                        <div className="section-header">
                            <h2>Today's Matches</h2>
                        </div>
                        <div className="tournament__wrapper">
                            <ul className="filter-btns nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link active" id="pills-allGame-tab" data-bs-toggle="pill" data-bs-target="#pills-allGame" type="button" role="tab" aria-controls="pills-allGame" aria-selected="true">All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-fortnite-tab" data-bs-toggle="pill" data-bs-target="#pills-fortnite" type="button" role="tab" aria-controls="pills-fortnite" aria-selected="false">Fortnite</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-call-tab" data-bs-toggle="pill" data-bs-target="#pills-call" type="button" role="tab" aria-controls="pills-call" aria-selected="false">Call Of Duty</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-fifa-tab" data-bs-toggle="pill" data-bs-target="#pills-fifa" type="button" role="tab" aria-controls="pills-fifa" aria-selected="false">FIFA</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-allGame" role="tabpanel"
                                    aria-labelledby="pills-allGame-tab">
                                    <div className="row g-4 justify-content-center">
                                        {TournamentListOne.map((val, i) => (
                                            <div className="col-xl-4 col-md-6" key={i}>
                                                <div className="tournament__item tournament__item--frame">
                                                    <div className="tournament__item-inner">
                                                        <div className="tournament__item-title">
                                                            <h3><Link to="/match-single"> {val.title} </Link> </h3>
                                                            <p>{val.date}</p>
                                                        </div>
                                                        <div className="tournament__item-thumb">
                                                            <ul>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /> </Link>
                                                                </li>
                                                                <li className="tournament__item-vs">
                                                                    <img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                                </li>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <Link to="/match-single" className="text-btn">{val.btnText} <span><i className="icofont-caret-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-fortnite" role="tabpanel" aria-labelledby="pills-fortnite-tab">
                                    <div className="row g-4 justify-content-center">
                                        {TournamentListTwo.map((val, i) => (
                                            <div className="col-xl-4 col-md-6" key={i}>
                                                <div className="tournament__item tournament__item--frame">
                                                    <div className="tournament__item-inner">
                                                        <div className="tournament__item-title">
                                                            <h3><Link to="/match-single"> {val.title} </Link> </h3>
                                                            <p>{val.date}</p>
                                                        </div>
                                                        <div className="tournament__item-thumb">
                                                            <ul>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /> </Link>
                                                                </li>
                                                                <li className="tournament__item-vs">
                                                                    <img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                                </li>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <Link to="/match-single" className="text-btn">{val.btnText} <span><i className="icofont-caret-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-call" role="tabpanel" aria-labelledby="pills-call-tab">
                                    <div className="row g-4 justify-content-center">
                                        {TournamentListThree.map((val, i) => (
                                            <div className="col-xl-4 col-md-6" key={i}>
                                                <div className="tournament__item tournament__item--frame">
                                                    <div className="tournament__item-inner">
                                                        <div className="tournament__item-title">
                                                            <h3><Link to="/match-single"> {val.title} </Link> </h3>
                                                            <p>{val.date}</p>
                                                        </div>
                                                        <div className="tournament__item-thumb">
                                                            <ul>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /> </Link>
                                                                </li>
                                                                <li className="tournament__item-vs">
                                                                    <img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                                </li>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <Link to="/match-single" className="text-btn">{val.btnText} <span><i className="icofont-caret-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-fifa" role="tabpanel" aria-labelledby="pills-fifa-tab">
                                    <div className="row g-4 justify-content-center">
                                        {TournamentListFour.map((val, i) => (
                                            <div className="col-xl-4 col-md-6" key={i}>
                                                <div className="tournament__item tournament__item--frame">
                                                    <div className="tournament__item-inner">
                                                        <div className="tournament__item-title">
                                                            <h3><Link to="/match-single"> {val.title} </Link> </h3>
                                                            <p>{val.date}</p>
                                                        </div>
                                                        <div className="tournament__item-thumb">
                                                            <ul>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /> </Link>
                                                                </li>
                                                                <li className="tournament__item-vs">
                                                                    <img src={`${val.imgUrlVs}`} alt={`${val.imgAlt}`} />
                                                                </li>
                                                                <li className="tournament__item-team">
                                                                    <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <Link to="/match-single" className="text-btn">{val.btnText} <span><i className="icofont-caret-right"></i></span></Link>
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
                <Footer />
            </Fragment>
        );
    }
}
 
export default MatchDayPage;