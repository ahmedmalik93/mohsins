import { Component } from "react";
import { Link } from "react-router-dom";
import BlogItem from "./blogitem";

const title = "Explore Latest News";
const btnText = "View More";


class BlogTwo extends Component {
    render() { 
        return (
            <section className="blog padding-top padding-bottom">
                <div className="container">
                    <div className="section-header-2 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="section-header-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="section-header-content">
                            <Link to="/blog" className="default-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                    <div className="blog__wrapper">
                        <BlogItem />
                    </div>
                </div>
            </section>
        );
    }
}
 
export default BlogTwo;