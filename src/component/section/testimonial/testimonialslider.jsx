import { Component } from "react";
import { Link } from "react-router-dom";


import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import Rating from "../../sidebar/rating";



let TestimonialSliderList = [
    {
        imgUrl: 'assets/images/testimonial/01.jpg',
        imgUrlLogo: 'assets/images/testimonial/logo/01.png',
        imgAlt: 'testimonial',
        name: 'Radhika Roy',
        degi: 'UI Designer',
        desc: 'Edgeing nterfaces fnergstca plagiarize teams anbudng paradgms rapidiousl  buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze',
        ratingCount: '5.28',
    },
    {
        imgUrl: 'assets/images/testimonial/02.jpg',
        imgUrlLogo: 'assets/images/testimonial/logo/02.png',
        imgAlt: 'testimonial',
        name: 'Madley Pondor',
        degi: 'UX Designer',
        desc: 'Edgeing nterfaces fnergstca plagiarize teams anbudng paradgms rapidiousl  buildcaboration anden deassharing viaing and bleeding whereas goingi forward process and monetze',
        ratingCount: '5.28',
    },
]

class TestimonialSlider extends Component {
    render() { 
        return (
            <div className="testimonial-slider overflow-hidden">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
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
                            slidesPerView: 1.2,
                        },
                    }}
                >
                    {TestimonialSliderList.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className="testimonial-item">
                                <div className="testimonial-inner">
                                    <div className="testimonial-head">
                                        <div className="testi-top">
                                            <div className="testimonial-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="name-des">
                                                <h5>{val.name}</h5>
                                                <p>{val.degi}</p>
                                            </div>
                                        </div>
                                        <Link to="/team-single"><img src={`${val.imgUrlLogo}`} alt={`${val.imgAlt}`} /></Link>
                                    </div>
                                    <div className="testimonial-body">
                                        <p>{val.desc}</p>
                                    </div>
                                    <div className="testimonial-footer">
                                        <Rating />
                                        <h5>{val.ratingCount}</h5>
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
 
export default TestimonialSlider;