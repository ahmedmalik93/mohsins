import { Component } from "react";
import { Link } from "react-router-dom";


const title = "BECOME A PARTNER of Gamerzy";
const btnText = "BECOME A PARTNER";

let SponsorTwoList = [
    {
        imgUrl: 'assets/images/sponsor/01.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/02.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/03.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/04.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/05.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/06.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/07.png',
        imgAlt: 'sponsor-thumb',
    },
    {
        imgUrl: 'assets/images/sponsor/08.png',
        imgAlt: 'sponsor-thumb',
    },

]

class SponsorTwo extends Component {
    render() { 
        return (
            <div className="sponsor-section padding-top padding-bottom overflow-hidden">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-5 justify-content-center row-cols-md-5 row-cols-sm-3 row-cols-2">
                            {SponsorTwoList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="sponsor-item">
                                        <div className="sponsor-inner">
                                            <div className="sponsor-thumb text-center">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <Link to="/contact" className="default-btn"><span>{btnText} </span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default SponsorTwo;