import { Component, thumbsSwiper, setThumbsSwiper } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";


const title = "we are professional team esport";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than an extensible archtectur services and cross";

let AboutList = [
    {
        imgUrl: 'assets/images/about/icon-1.png',
        imgAlt: 'Icon',
        title: '103k Community Earning',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon-2.png',
        imgAlt: 'Icon',
        title: '103k Community Earning',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
        imgUrl: 'assets/images/about/icon-3.png',
        imgAlt: 'Icon',
        title: '240k Streams Complete',
        desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
]

let AboutSliderList = [
    {
        imgUrl: 'assets/images/about/slider/01.png',
        imgAlt: 'About Thumb',
    },
    {
        imgUrl: 'assets/images/about/slider/02.png',
        imgAlt: 'About Thumb',
    },
    {
        imgUrl: 'assets/images/about/slider/03.png',
        imgAlt: 'About Thumb',
    },
    {
        imgUrl: 'assets/images/about/slider/04.png',
        imgAlt: 'About Thumb',
    },
    {
        imgUrl: 'assets/images/about/slider/05.png',
        imgAlt: 'About Thumb',
    },
]


class About extends Component {
    render() { 
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutList.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about__thumb">
                                    <Swiper
                                        spaceBetween={10}
                                        navigation={true}
                                        // thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                        loop={'true'}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        className="about__slider"
                                    >
                                        {AboutSliderList.map((val, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="about__slider-image">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                    <Swiper
                                        // onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                                        loop={'true'}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}
                                        className="about__slider-2"
                                    >
                                        {AboutSliderList.map((val, i) => (
                                            <SwiperSlide key={i}>
                                                <div className="about__slider-image">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;
