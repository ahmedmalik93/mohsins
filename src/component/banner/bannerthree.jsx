import { Component } from "react";
import { Link } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

let TeamSliderList = [
    {
        bgImgUrl: 'assets/images/banner/bg.jpg',
        title: 'Gamerzy Game',
        subtitle: 'Best For eSports And Gaming',
        desc: 'Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital',
        btnText: 'join us today',
    },
    {
        bgImgUrl: 'assets/images/banner/bg-2.jpg',
        title: 'Gamerzy Game',
        subtitle: 'Best For eSports And Gaming',
        desc: 'Assertively communicate an expanded array of mindshare rather than diverse technologies for magnetic applications eamlessly virtual then Conveniently monetize synergistic human capital',
        btnText: 'join us today',
    },
]

class BannerThree extends Component {
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
                            <div className="banner" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                <div className="container">
                                    <div className="pe-4 pe-sm-0">
                                        <div className="row g-0">
                                            <div className="col-lg-6 col-12">
                                                <div className="banner__content">
                                                    <h1>{val.title}</h1>
                                                    <h2>{val.subtitle} </h2>
                                                    <p>{val.desc}</p>
                                                    <Link to="/login" className="default-btn"><span>{val.btnText}</span> </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default BannerThree;