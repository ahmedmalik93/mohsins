import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";

const title = "All Of Our Teams";

let allGameList = [
    {
        bgImgUrl: 'assets/images/team/1.jpg',
        imgUrl: 'assets/images/team/1.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/2.jpg',
        imgUrl: 'assets/images/team/2.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/05.jpg',
        imgUrl: 'assets/images/team/05.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/06.jpg',
        imgUrl: 'assets/images/team/06.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/07.jpg',
        imgUrl: 'assets/images/team/07.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/08.jpg',
        imgUrl: 'assets/images/team/08.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
]

let fortniteGameList = [
    {
        bgImgUrl: 'assets/images/team/1.jpg',
        imgUrl: 'assets/images/team/1.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/2.jpg',
        imgUrl: 'assets/images/team/2.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/05.jpg',
        imgUrl: 'assets/images/team/05.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/06.jpg',
        imgUrl: 'assets/images/team/06.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
]

let callGameList = [
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/05.jpg',
        imgUrl: 'assets/images/team/05.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/06.jpg',
        imgUrl: 'assets/images/team/06.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
]

let fifaGameList = [
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
    {
        bgImgUrl: 'assets/images/team/05.jpg',
        imgUrl: 'assets/images/team/05.png',
        imgAlt: 'Team Logo Image',
        title: 'Cyborg Gunner',
        desc: 'Fortnite',
        form: 'From Australia',
        btnText: 'View Team',
        MemberList: [
            {
                imgUrl: 'assets/images/player/01.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/02.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/03.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/04.jpg',
                imgAlt: 'Plyaer Image',
            },
            {
                imgUrl: 'assets/images/player/05.jpg',
                imgAlt: 'Plyaer Image',
            },
        ],
    },
]

class TeamPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'our team'} curPage={'team'} />
                <section className="team padding-top">
                    <div className="container">
                        <div className="section-header">
                            <h2>{title}</h2>
                        </div>
                        <div className="team__wrapper">
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
                                    <div className="row justify-content-center g-4">
                                        {allGameList.map((val, i) => (
                                            <div className="col-xxl-3 col-lg-4 col-md-6" key={i}>
                                                <div className="team__item" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                    <div className="team__item-inner">
                                                        <div className="team__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="team__item-content">
                                                            <h3><Link to="/team-single">{val.title}</Link></h3>
                                                            <p>{val.desc}</p>
                                                            <div className="team__member">
                                                                <ul className="team__member-list">
                                                                    {val.MemberList.map((val, i) => (
                                                                        <li className="team__member-item" key={i}>
                                                                            <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="country-btn">{val.form} </p>
                                                        <Link to="/team-single" className="default-btn"><span>{val.btnText}</span> </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-fortnite" role="tabpanel" aria-labelledby="pills-fortnite-tab">
                                    <div className="row justify-content-center g-4">
                                        {fortniteGameList.map((val, i) => (
                                            <div className="col-xxl-3 col-lg-4 col-md-6" key={i}>
                                                <div className="team__item" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                    <div className="team__item-inner">
                                                        <div className="team__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="team__item-content">
                                                            <h3><Link to="/team-single">{val.title}</Link></h3>
                                                            <p>{val.desc}</p>
                                                            <div className="team__member">
                                                                <ul className="team__member-list">
                                                                    {val.MemberList.map((val, i) => (
                                                                        <li className="team__member-item" key={i}>
                                                                            <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="country-btn">{val.form} </p>
                                                        <Link to="/team-single" className="default-btn"><span>{val.btnText}</span> </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-call" role="tabpanel" aria-labelledby="pills-call-tab">
                                    <div className="row justify-content-center g-4">
                                        {callGameList.map((val, i) => (
                                            <div className="col-xxl-3 col-lg-4 col-md-6" key={i}>
                                                <div className="team__item" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                    <div className="team__item-inner">
                                                        <div className="team__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="team__item-content">
                                                            <h3><Link to="/team-single">{val.title}</Link></h3>
                                                            <p>{val.desc}</p>
                                                            <div className="team__member">
                                                                <ul className="team__member-list">
                                                                    {val.MemberList.map((val, i) => (
                                                                        <li className="team__member-item" key={i}>
                                                                            <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="country-btn">{val.form} </p>
                                                        <Link to="/team-single" className="default-btn"><span>{val.btnText}</span> </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-fifa" role="tabpanel" aria-labelledby="pills-fifa-tab">
                                    <div className="row justify-content-center g-4">
                                        {fifaGameList.map((val, i) => (
                                            <div className="col-xxl-3 col-lg-4 col-md-6" key={i}>
                                                <div className="team__item" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                                    <div className="team__item-inner">
                                                        <div className="team__item-thumb">
                                                            <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                        </div>
                                                        <div className="team__item-content">
                                                            <h3><Link to="/team-single">{val.title}</Link></h3>
                                                            <p>{val.desc}</p>
                                                            <div className="team__member">
                                                                <ul className="team__member-list">
                                                                    {val.MemberList.map((val, i) => (
                                                                        <li className="team__member-item" key={i}>
                                                                            <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="country-btn">{val.form} </p>
                                                        <Link to="/team-single" className="default-btn"><span>{val.btnText}</span> </Link>
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
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TeamPage;