import { Component } from "react";
import { Link } from "react-router-dom";



let BlogTwoList = [
    {
        imgUrl: 'assets/images/blog/home-1/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Tips make your workforce a security info front line',
        badge: 'Esports',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'How to Play Perfect Multirole Combat in Call Of Duty',
        badge: 'Gaming',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/03.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Explore Your Gaming Site with Gamerzy eSport Tempalte',
        badge: 'Gamerzy',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
]

class BlogItem extends Component {
    render() { 
        return (
            <div className="row g-4 justify-content-center">
                {BlogTwoList.map((val, i) => (
                    <div className="col-lg-4 col-sm-6" key={i}>
                        <div className="blog__item">
                            <div className="blog__item-inner">
                                <div className="blog__item-thumb">
                                    <Link to="/blog-single"><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /></Link>
                                    <div className="badge">{val.badge}</div>
                                </div>
                                <div className="blog__item-content">
                                    <h3><Link to="/blog-single">{val.title}</Link></h3>
                                    <ul className="blog__item-meta">
                                        <li className="blog__item-metadate"><a href="#"> <span><i className="icofont-ui-calendar"></i></span> {val.postDate} </a>
                                        </li>
                                        <li className="blog__item-metacom">
                                            <a href="#"><span><i className="icofont-speech-comments"></i></span> {val.postComment}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default BlogItem;