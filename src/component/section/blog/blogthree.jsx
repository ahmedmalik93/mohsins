import { Component } from "react";
import { Link } from "react-router-dom";
import BlogItem from "./blogitem";

const title = "Explore Latest News";
const btnText = "View More";

class BlogThree extends Component {
    render() { 
        return (
            <section className="blog padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="blog__wrapper">
                        <BlogItem />
                        <div className="mt-5 text-center"> <Link to="/blog" className="default-btn"><span>{btnText}</span></Link> </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default BlogThree;