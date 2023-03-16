import { Component } from "react";


import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

let SponsorList = [
    {
        imgUrl: 'assets/images/sponsor/01.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
    {
        imgUrl: 'assets/images/sponsor/02.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
    {
        imgUrl: 'assets/images/sponsor/03.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
    {
        imgUrl: 'assets/images/sponsor/04.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
    {
        imgUrl: 'assets/images/sponsor/05.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
    {
        imgUrl: 'assets/images/sponsor/06.png',
        imgAlt: 'Sponsor Thumb',
        SiteLink: '#',
    },
]

class Sponsor extends Component {
    render() { 
        return (
            <div className="sponsor">
                <div className="container">
                    <div className="sponsor__wrapper">
                        <div className="swiper sponsor__slider">
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
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 4,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 5.5,
                                    },
                                }}
                            >
                                {SponsorList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="sponsor__item">
                                            <a href={val.SiteLink}><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sponsor;