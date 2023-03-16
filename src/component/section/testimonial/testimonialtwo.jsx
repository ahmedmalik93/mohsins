import { Component } from "react";
import TestimonialSlider from "./testimonialslider";

const title = "Hear From Our Clients";

class TestimonialTwo extends Component {
    render() { 
        return (
            <div className="testimonial-section padding-top padding-bottom bg--cover" style={{backgroundImage: "url(/assets/images/testimonial/bg.jpg)"}}>
                <div className="container">
                    <div className="section-header-2">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <TestimonialSlider />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TestimonialTwo;