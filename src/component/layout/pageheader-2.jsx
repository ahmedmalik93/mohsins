import { Component } from "react";

class PageHeaderTwo extends Component {
    render() { 
        const {title, imgUrl} = this.props;
        return (
            <section className="pageheader-section" style={{backgroundImage: "url(/assets/images/pageheader/bg.jpg)"}}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img src={imgUrl} alt="Gamerzy Thumb" />
                        </div>
                        <h2 className="pageheader-title">{title}</h2>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PageHeaderTwo;