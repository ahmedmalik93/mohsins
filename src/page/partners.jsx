import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

class PartnersPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'our partners'} curPage={'partners'} />
                <div className="partner-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-6 col-12">
                                    <div className="partner-list" id="accordionExample">
                                        <div className="row g-4 justify-content-center">
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingOne">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapAsusne"
                                                            aria-expanded="true" aria-controls="collapAsusne">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/01.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapAsusne" className="accordion-collapse collapse"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="true" aria-controls="collapseTwo">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/02.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseTwo" className="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="true" aria-controls="collapseThree">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/03.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseThree" className="accordion-collapse collapse"
                                                        aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="true" aria-controls="collapseFour">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/04.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseFour" className="accordion-collapse collapse"
                                                        aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="partner-list" id="accordionExample-2">
                                        <div className="row g-4 justify-content-center">
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="true" aria-controls="collapseFive">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/05.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseFive" className="accordion-collapse collapse"
                                                        aria-labelledby="headingFive" data-bs-parent="#accordionExample-2">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingSix">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                            aria-expanded="true" aria-controls="collapseSix">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/06.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseSix" className="accordion-collapse collapse"
                                                        aria-labelledby="headingSix" data-bs-parent="#accordionExample-2">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingSeven">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                            aria-expanded="true" aria-controls="collapseSeven">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/07.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseSeven" className="accordion-collapse collapse"
                                                        aria-labelledby="headingSeven" data-bs-parent="#accordionExample-2">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingEight">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                            aria-expanded="true" aria-controls="collapseEight">
                                                            <span className="accor-header-inner d-flex flex-wrap align-items-center">
                                                                <span className="accor-thumb">
                                                                    <img src="assets/images/sponsor/08.png" alt="partner-thumb" />
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <div id="collapseEight" className="accordion-collapse collapse"
                                                        aria-labelledby="headingEight" data-bs-parent="#accordionExample-2">
                                                        <div className="accordion-body">
                                                            <p>Qorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                                                volu ptas provid ent qui corporis facere officia numquam, repelat,
                                                                vel
                                                                ame ting velit quidem culp vitae error ex porro voluptates a
                                                                ame tingera velit quidem culpa vitae error exal porro voluptates a
                                                                veritatis sedlum doloring inventore

                                                            </p>
                                                            <a href="#" className="default-btn"><span>Visit Website</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <Link to="/contact" className="default-btn"><span>Become a Partner</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default PartnersPage;