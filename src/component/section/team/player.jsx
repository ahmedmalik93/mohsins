import { Component } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import SocialMedia from "../../sidebar/socialmedia";


const title = "Meet Our Team Squad";


let PlayerSliderList = [
    {
        bgImgUrl: 'assets/images/team/1.jpg',
        imgUrl: 'assets/images/team/1.png',
        imgAlt: 'Player Thumb',
        title: 'Dragon Team',
    },
    {
        bgImgUrl: 'assets/images/team/2.jpg',
        imgUrl: 'assets/images/team/2.png',
        imgAlt: 'Player Thumb',
        title: 'Frogs Team',
    },
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Player Thumb',
        title: 'Tigers Team',
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Player Thumb',
        title: 'Shark Team',
    },
]

class Player extends Component {
    render() { 
        return (
            <section className="player-section padding-top padding-bottom bg--cover" style={{backgroundImage: "url(/assets/images/team/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="player-slider">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={'true'}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 3.7,
                                    },
                                }}
                            >
                                {PlayerSliderList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="player-item-2 text-center" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                            <div className="player-inner-2">
                                                <div className="player-thumb-2">
                                                    <Link to="/team-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                </div>
                                                <div className="player-content-2">
                                                    <Link to="/team-single"><h2>{val.title}</h2></Link>
                                                    <SocialMedia />
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Player;