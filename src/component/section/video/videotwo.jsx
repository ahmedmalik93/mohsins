import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Featured Stream Video";

let twStream = [
    {
        imgUrl: 'assets/images/video/01.jpg',
        imgAlt: 'video-thumb',
        videoLink: 'https://www.youtube.com/embed/z5y2BMxrAqw',
        title: '2022 LVP SuperLiga Orange Summer',
    },
    {
        imgUrl: 'assets/images/video/02.jpg',
        imgAlt: 'video-thumb',
        videoLink: 'https://www.youtube.com/embed/z5y2BMxrAqw',
        title: 'Lorem ipsum dolor sit amet.',
    },
]

let ytStreamList = [
    {
        imgUrl: 'assets/images/video/03.jpg',
        imgAlt: 'video-thumb',
        videoLink: 'https://www.youtube.com/embed/z5y2BMxrAqw',
        title: 'Fortnite Ultimate Warzone Tournament',
    },
    {
        imgUrl: 'assets/images/video/04.jpg',
        imgAlt: 'video-thumb',
        videoLink: 'https://www.youtube.com/embed/z5y2BMxrAqw',
        title: 'Lorem ipsum dolor sit.',
    },
    {
        imgUrl: 'assets/images/video/05.jpg',
        imgAlt: 'video-thumb',
        videoLink: 'https://www.youtube.com/embed/z5y2BMxrAqw',
        title: 'Where can I Redeem My Earnings',
    },
]

class VideoTwo extends Component {
    render() { 
        return (
            <div className="video-section padding-top">
                <div className="container">
                    <div className="section-header-2 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-header-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="section-header-content">
                            <ul className="filter-btns mb-0 nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link active" id="pills-allStream-tab" data-bs-toggle="pill" data-bs-target="#pills-allStream" type="button" role="tab" aria-controls="pills-allStream" aria-selected="true">View All</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-ytStream-tab" data-bs-toggle="pill" data-bs-target="#pills-ytStream" type="button" role="tab" aria-controls="pills-ytStream" aria-selected="false">Youtube</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="filter-btn nav-link" id="pills-twStream-tab" data-bs-toggle="pill" data-bs-target="#pills-twStream" type="button" role="tab" aria-controls="pills-twStream" aria-selected="false">Twitch</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="section-wrapper">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-allStream" role="tabpanel"
                                aria-labelledby="pills-allStream-tab">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="video-bottom">
                                            <div className="row g-4">
                                                {ytStreamList.map((val, i) => (
                                                    <div className="col-xl-4 col-md-6 col-12" key={i}>
                                                        <div className="video-item">
                                                            <div className="video-inner position-relative">
                                                                <div className="video-thumb position-relative video-overlay">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                                    <div className="video-icon">
                                                                        <a href={val.videoLink} target="_blank">
                                                                            <i className="icofont-play-alt-1"></i>
                                                                            <span className="pluse"></span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="video-content abs-video-content">
                                                                    <h3><Link to="/stream">{val.title}</Link></h3>
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
                            <div className="tab-pane fade" id="pills-ytStream" role="tabpanel" aria-labelledby="pills-ytStream-tab">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="video-bottom">
                                            <div className="row g-4 ">
                                                {ytStreamList.map((val, i) => (
                                                    <div className="col-xl-4 col-md-6 col-12" key={i}>
                                                        <div className="video-item">
                                                            <div className="video-inner position-relative">
                                                                <div className="video-thumb position-relative video-overlay">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                                    <div className="video-icon">
                                                                        <a href={val.videoLink} target="_blank">
                                                                            <i className="icofont-play-alt-1"></i>
                                                                            <span className="pluse"></span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="video-content abs-video-content">
                                                                    <h3><Link to="/stream">{val.title}</Link></h3>
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
                            <div className="tab-pane fade" id="pills-twStream" role="tabpanel" aria-labelledby="pills-twStream-tab">
                                <div className="row g-4">
                                    <div className="col-12">
                                        <div className="video-top">
                                            <div className="row g-4 ">
                                                {twStream.map((val, i) => (
                                                    <div className="col-lg-6 col-12" key={i}>
                                                        <div className="video-item">
                                                            <div className="video-inner position-relative">
                                                                <div className="video-thumb position-relative video-overlay">
                                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                                                    <div className="video-icon">
                                                                        <a href={val.videoLink} target="_blank">
                                                                            <i className="icofont-play-alt-1"></i>
                                                                            <span className="pluse"></span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="video-content abs-video-content">
                                                                    <h3><Link to="/stream">{val.title}</Link></h3>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default VideoTwo;