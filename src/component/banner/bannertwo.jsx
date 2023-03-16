import { Component } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

let TeamSliderList = [
    {
        bgImgUrl: 'assets/images/banner/bg-3.jpg',
        imgUrlOne: 'assets/images/banner/02.png',
        imgUrlTwo: 'assets/images/banner/03.png',
        imgAlt: 'banner-thumb',
        title: 'Today \'s BIG MATCH',
        subtitle: 'LEAGUE BATTLE',
        date: 'Time : 08:30Pm - 30 December 2022',
        btnText: 'Watch Now',
    },
    {
        bgImgUrl: 'assets/images/banner/bg-4.jpg',
        imgUrlOne: 'assets/images/banner/04.png',
        imgUrlTwo: 'assets/images/banner/05.png',
        imgAlt: 'banner-thumb',
        title: 'Today \'s BIG MATCH',
        subtitle: 'Gamerzy 2k22',
        date: 'Time : 08:30Pm - 30 December 2022',
        btnText: 'Watch Now',
    },
    {
        bgImgUrl: 'assets/images/banner/bg-4.jpg',
        imgUrlOne: 'assets/images/banner/06.png',
        imgUrlTwo: 'assets/images/banner/07.png',
        imgAlt: 'banner-thumb',
        title: 'Today \'s BIG MATCH',
        subtitle: 'Esports Leage',
        date: 'Time : 08:30Pm - 30 December 2022',
        btnText: 'Watch Now',
    },
]

class BannerTwo extends Component {
    render() { 
        return (
            <div className="banner__slider overflow-hidden">
                <Swiper
                    spaceBetween={20}
                    loop={'true'}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {TeamSliderList.map((val, i) => (
                        <SwiperSlide key={i}>
                            <section className="banner-section" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                <div className="container">
                                    <div className="pe-4 pe-sm-0">
                                        <div className="banner-content text-center">
                                            <h4 className="fw-norman mb-4">{val.title}</h4>
                                            <h1>{val.subtitle} </h1>
                                            <p>{val.date}</p>
                                            <Link to="/stream" className="default-btn"><span>{val.btnText}</span> </Link>
                                        </div>
                                        <div
                                            className="banner-thumb d-flex flex-wrap justify-content-center justify-content-between align-items-center align-items-lg-end">
                                            <div className="banner-thumb-img ml-xl-50-none">
                                                <Link to="/team-single"><img src={`${val.imgUrlOne}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                            <div className="banner-thumb-img mr-xl-50-none">
                                                <Link to="/team-single"><img src={`${val.imgUrlTwo}`} alt={`${val.imgAlt}`} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default BannerTwo;