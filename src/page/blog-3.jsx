import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/layout/pagination";
import Archive from "../component/sidebar/archive";
import CategorieTwo from "../component/sidebar/categorietwo";
import RecentPost from "../component/sidebar/recentpost";
import SearchBar from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";



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
    {
        imgUrl: 'assets/images/blog/home-1/04.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Tips make your workforce a security info front line',
        badge: 'Esports',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/05.jpg',
        imgAlt: 'Blog Thumb',
        title: 'How to Play Perfect Multirole Combat in Call Of Duty',
        badge: 'Gaming',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/06.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Explore Your Gaming Site with Gamerzy eSport Tempalte',
        badge: 'Gamerzy',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/07.jpg',
        imgAlt: 'Blog Thumb',
        title: 'How to Play Perfect Multirole Combat in Call Of Duty',
        badge: 'Gaming',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/08.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Explore Your Gaming Site with Gamerzy eSport Tempalte',
        badge: 'Gamerzy',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/01.jpg',
        imgAlt: 'Blog Thumb',
        title: 'How to Play Perfect Multirole Combat in Call Of Duty',
        badge: 'Gaming',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
    {
        imgUrl: 'assets/images/blog/home-1/02.jpg',
        imgAlt: 'Blog Thumb',
        title: 'Explore Your Gaming Site with Gamerzy eSport Tempalte',
        badge: 'Gamerzy',
        postDate: '24 August 2022',
        postComment: '25 Comments',
    },
]


class BlogPageThree extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Blog posts 3'} curPage={'Blog 3'} />
                <div className="blog-section padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-5 justify-content-center">
                                <div className="col-lg-8 col-12">
                                    <div className="blog-wrappers">
                                        <div className="row g-4 justify-content-center">
                                            {BlogTwoList.map((val, i) => (
                                                <div className="col-sm-6" key={i}>
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
                                        <Pagination />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SearchBar />
                                        <CategorieTwo />
                                        <RecentPost />
                                        <Archive />
                                        <Tags />
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default BlogPageThree;