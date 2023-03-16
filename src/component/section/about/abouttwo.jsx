import { Component } from "react";


const title = "we are professional team esport";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than an extensible archtectur services and cross";


let AboutTwoList = [
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

class AboutTwo extends Component {
    render() { 
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src="assets/images/about/01.png" alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutTwoList.map((val, i) => (
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
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutTwo;