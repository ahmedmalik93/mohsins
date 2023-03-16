import { Component } from "react";

import TestimonialSlider from "./testimonialslider";



class Testimonial extends Component {
    render() { 
        return (
            <div className="testimonial-section padding-top padding-bottom bg--cover" style={{backgroundImage: "url(/assets/images/testimonial/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header">
                        <h2>Hear From Our Clients</h2>
                    </div>
                    <div className="section-wrapper">
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Testimonial;