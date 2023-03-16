import { Component } from "react";
import { Link } from "react-router-dom";


import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

let TeamSliderList = [
    {
        bgImgUrl: 'assets/images/team/1.jpg',
        imgUrl: 'assets/images/team/1.png',
        imgAlt: 'Team Logo Image',
        title: 'Soldier Esports',
        desc: 'FIFA 2022',
        descTwo: 'From Uk',
        btnText: 'View Team',
        memberList: [
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
        ]
    },
    {
        bgImgUrl: 'assets/images/team/2.jpg',
        imgUrl: 'assets/images/team/2.png',
        imgAlt: 'Team Logo Image',
        title: 'Soldier Esports',
        desc: 'FIFA 2022',
        descTwo: 'From Uk',
        btnText: 'View Team',
        memberList: [
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
        ]
    },
    {
        bgImgUrl: 'assets/images/team/3.jpg',
        imgUrl: 'assets/images/team/3.png',
        imgAlt: 'Team Logo Image',
        title: 'Soldier Esports',
        desc: 'FIFA 2022',
        descTwo: 'From Uk',
        btnText: 'View Team',
        memberList: [
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
        ]
    },
    {
        bgImgUrl: 'assets/images/team/4.jpg',
        imgUrl: 'assets/images/team/4.png',
        imgAlt: 'Team Logo Image',
        title: 'Soldier Esports',
        desc: 'FIFA 2022',
        descTwo: 'From Uk',
        btnText: 'View Team',
        memberList: [
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
        ]
    },
]

class TeamSlider extends Component {
    render() { 
        return (
            <div className="team__slider">
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
                    {TeamSliderList.map((val, i) => (
                        <SwiperSlide key={i}>
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
                                                {val.memberList.map((val, i) => (
                                                    <li className="team__member-item" key={i}>
                                                    <Link to="/player-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="country-btn">{val.descTwo} </p>
                                    <Link to="/team-single" className="default-btn"><span>{val.btnText}</span></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default TeamSlider;