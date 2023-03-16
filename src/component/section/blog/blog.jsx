import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Our Most Popular Blog posts";

let BlogList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'blog-thumb',
        title: 'Distinctive redefine resource maximizing for',
        postAuthor: 'Admin',
        postDate: '01 January 2022',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'blog-thumb',
        title: 'redefine resource maximizing for Distinctive',
        postAuthor: 'Admin',
        postDate: '01 January 2022',
        desc: 'Uniquely conceptuaze visionary process ariwith tactical ramatica centered qualitys vectoris with outofthebox scenario is ompelling uthoritatively generate front-end niches after one',
        btnText: 'read more',
    },
]

class Blog extends Component {
    render() { 
        return (
            <div className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
                            {BlogList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="blog-item">
                                        <div className="blog-inner">
                                            <div className="blog-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="blog-content px-3 py-4">
                                                <Link to="/blog-single"><h3>{val.title}</h3></Link>
                                                <div className="meta-post">
                                                    <a href="#">{val.postAuthor}</a>
                                                    <a href="#">{val.postDate}</a>
                                                </div>
                                                <p>{val.desc}</p>
                                                <Link to="/blog-single" className="default-btn reverse-effect"><span>{val.btnText} <i className="icofont-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Blog;