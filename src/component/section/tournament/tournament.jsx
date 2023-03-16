import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Today's Big Matches";

let TournamentList = [
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
]

class Tournament extends Component {
    render() { 
        return (
            <section className="tournament padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="tournament__wrapper">
                        <div className="row g-4 justify-content-center">
                            {TournamentList.map((val, i) => (
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
            </section>
        );
    }
}
 
export default Tournament;