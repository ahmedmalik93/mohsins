import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Most Popular Tournaments";


let GameUpcomingList = [
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/01.jpg',
        imgAlt: 'Game Image',
    },
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/02.jpg',
        imgAlt: 'Game Image',
    },
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/03.jpg',
        imgAlt: 'Game Image',
    },
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/04.jpg',
        imgAlt: 'Game Image',
    },
]

let GameRunningList = [
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/04.jpg',
        imgAlt: 'Game Image',
    },
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/03.jpg',
        imgAlt: 'Game Image',
    },
]

let GameFinishedList = [
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/02.jpg',
        imgAlt: 'Game Image',
    },
    {
        title: '2 Groups,10 Players',
        priceTitle: 'Prize Pool $30,000',
        gameName: 'Winne Starter Division',
        gameDate: '03 Oct 2022, 4:30pm',
        imgUrl: 'assets/images/game/home-2/01.jpg',
        imgAlt: 'Game Image',
    },
]

class GameTwo extends Component {
    render() { 
        return (
            <section className="game padding-top padding-bottom bg--gradient-primary">
                <div className="container">
                    <div className="section-header-2 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-header-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="section-header-content">
                            <ul className="filter-btns nav nav-pills" id="pills-tab-game" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link active" id="pills-upcomingMatch-tab" data-bs-toggle="pill" data-bs-target="#pills-upcomingMatch" type="button" role="tab" aria-controls="pills-upcomingMatch" aria-selected="true">Upcoming</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-runningMatch-tab" data-bs-toggle="pill" data-bs-target="#pills-runningMatch" type="button" role="tab" aria-controls="pills-runningMatch" aria-selected="false">Running</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-finishedMatch-tab" data-bs-toggle="pill" data-bs-target="#pills-finishedMatch" type="button" role="tab" aria-controls="pills-finishedMatch" aria-selected="false">Finished</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="game__wrapper">
                        <div className="tab-content" id="pills-tabContent-game">
                            <div className="tab-pane fade show active" id="pills-upcomingMatch" role="tabpanel"
                                aria-labelledby="pills-upcomingMatch-tab">
                                <div className="row g-4">
                                    {GameUpcomingList.map((val, i) => (
                                        <div className="col-lg-6" key={i}>
                                            <div className="game__item game__item--style-2">
                                                <div className="game__item-inner">
                                                    <div className="game__item-top">
                                                        <div className="game__item-topTeam">
                                                            <h5>{val.title}</h5>
                                                        </div>
                                                        <div className="game__item-topPrize">
                                                            <h5>{val.priceTitle}</h5>
                                                        </div>
                                                        <div className="game__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="game__item-title">
                                                            <h4><Link to="/tournament-single">{val.gameName}</Link></h4>
                                                            <p>{val.gameDate}</p>
                                                        </div>
                                                        <Link to="/tournament-single" className="game__item-overlay"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-runningMatch" role="tabpanel"
                                aria-labelledby="pills-runningMatch-tab">
                                <div className="row g-4">
                                    {GameRunningList.map((val, i) => (
                                        <div className="col-lg-6" key={i}>
                                            <div className="game__item game__item--style-2">
                                                <div className="game__item-inner">
                                                    <div className="game__item-top">
                                                        <div className="game__item-topTeam">
                                                            <h5>{val.title}</h5>
                                                        </div>
                                                        <div className="game__item-topPrize">
                                                            <h5>{val.priceTitle}</h5>
                                                        </div>
                                                        <div className="game__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="game__item-title">
                                                            <h4><Link to="/tournament-single">{val.gameName}</Link></h4>
                                                            <p>{val.gameDate}</p>
                                                        </div>
                                                        <Link to="/tournament-single" className="game__item-overlay"></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-finishedMatch" role="tabpanel" aria-labelledby="pills-finishedMatch-tab">
                                <div className="row g-4">
                                    {GameFinishedList.map((val, i) => (
                                        <div className="col-lg-6" key={i}>
                                            <div className="game__item game__item--style-2">
                                                <div className="game__item-inner">
                                                    <div className="game__item-top">
                                                        <div className="game__item-topTeam">
                                                            <h5>{val.title}</h5>
                                                        </div>
                                                        <div className="game__item-topPrize">
                                                            <h5>{val.priceTitle}</h5>
                                                        </div>
                                                        <div className="game__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="game__item-title">
                                                            <h4><Link to="/tournament-single">{val.gameName}</Link></h4>
                                                            <p>{val.gameDate}</p>
                                                        </div>
                                                        <Link to="/tournament-single" className="game__item-overlay"></Link>
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
 
export default GameTwo;