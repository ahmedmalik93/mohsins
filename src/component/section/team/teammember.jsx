import { Component } from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../../sidebar/socialmedia";

const playerTitle = "TEAM Members";


let PlayerList = [
    {
        imgUrl: 'assets/images/player/01.jpg',
        imgAlt: 'player-img',
        Name: 'Guape R. Johnson',
    },
    {
        imgUrl: 'assets/images/player/02.jpg',
        imgAlt: 'player-img',
        Name: 'Amado R. Martin',
    },
    {
        imgUrl: 'assets/images/player/03.jpg',
        imgAlt: 'player-img',
        Name: 'Kyle S. Stelly',
    },
    {
        imgUrl: 'assets/images/player/04.jpg',
        imgAlt: 'player-img',
        Name: 'John T. Toney',
    },
    {
        imgUrl: 'assets/images/player/05.jpg',
        imgAlt: 'player-img',
        Name: 'Charles S. Elliott',
    },
    {
        imgUrl: 'assets/images/player/06.jpg',
        imgAlt: 'player-img',
        Name: 'Claude M. Vasquez',
    },
]



class TeamMember extends Component {
    render() { 
        return (
            <div className="player-section padding-top padding-bottom bg-attachment" style={{backgroundImage: "url(/assets/images/video/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <h2>{playerTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center">
                            {PlayerList.map((val, i) => (
                                <div className="col-xxl-3 col-lg-4 col-sm-6 col-12" key={i}>
                                    <div className="player-item">
                                        <div className="player-inner">
                                            <div className="player-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="player-content text-center">
                                                <div className="player-info-list">
                                                    <h3 className="mb-0"><Link to="/player-single">{val.Name}</Link> </h3>
                                                </div>
                                                <SocialMedia />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TeamMember;