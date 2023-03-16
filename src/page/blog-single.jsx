import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Archive from "../component/sidebar/archive";
import ArticlePagination from "../component/sidebar/article-pagination";
import Authors from "../component/sidebar/authors";
import CategorieTwo from "../component/sidebar/categorietwo";
import Comments from "../component/sidebar/comments";
import RecentPost from "../component/sidebar/recentpost";
import Respond from "../component/sidebar/respond";
import SearchBar from "../component/sidebar/search";
import Tags from "../component/sidebar/tags";


let ShareList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-dribbble',
        siteLink: '#',
        className: 'dribble',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-google-plus',
        siteLink: '#',
        className: 'google',
    },
]

class BlogSingle extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Serenity hassir taken posseson...'} curPage={'Blog Details'} />
                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row g-5 justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <div className="post-item-2">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <img src="assets/images/blog/single/01.jpg" alt="blog" />
                                                </div>
                                                <div className="post-content">
                                                    <h2>Serenity hassir taken posseson of mying entire</h2>
                                                    <ul className="lab-ul post-date">
                                                        <li><span><i className="icofont-ui-calendar"></i>January 01, 2022 10:59 am</span></li>
                                                        <li><span><i className="icofont-user"></i><a href="#">Jhon Doe</a></span></li>
                                                        <li><span><i className="icofont-speech-comments"></i><a href="#">09 Comments</a></span></li>
                                                    </ul>
                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <blockquote className="single-quote mb-30">
                                                        <div className="quotes">
                                                            Dynamicaly recaptiuaze distribute technologies wherease
                                                            turnkey channels and onotonec provide aces to resource
                                                            levelng expert vias worldwide deverabes uoliticly extend
                                                            aserser are diverse vortals.
                                                            <span>...Melissa Hunter</span>
                                                        </div>
                                                    </blockquote>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="post-thumb mb-30">
                                                        <img src="assets/images/blog/single/02.jpg" alt="blog-img" />
                                                    </div>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="post-thumb mb-30">
                                                        <img src="assets/images/blog/single/03.jpg" alt="blog" />
                                                        <a href="https://www.youtube.com/embed/LjEwuC6J-Uk" className="play-btn" target="_blank"> <i className="icofont-play"></i><span className="pluse_2"></span></a>
                                                    </div>

                                                    <p>Serenity hassir taken posseson of mying entire soung like these sweet mornngs is whch enjoy with my whole heart create am alonesi and feel the charm of exstenceth spotens whch was the blis of souls like mineing am soo happy my dearsi frend absoribed the em exquste sense enjoy with my whole heart inaming alone and feel the charm of exstensc spotsi whch was the blis of souls like mineing am soing happyr my dear frend soingu ize absoribed the exqust sense tranquil existence that neglect my talentsr Ins should byers ncapable ofing is drawng and singe wonderful.</p>

                                                    <div className="tags-area">
                                                        <ul className="tags lab-ul justify-content-center">
                                                            <li><a href="#">Gaming</a></li>
                                                            <li><a href="#" className="active">eSports</a></li>
                                                            <li><a href="#">Gamerzy</a></li>
                                                            <li><a href="#">Sports</a></li>
                                                        </ul>
                                                        <ul className="share lab-ul justify-content-center">
                                                            {ShareList.map((val, i) => (
                                                                <li key={i}>
                                                                    <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ArticlePagination />
                                        <Authors />
                                        <Comments />
                                        <Respond />
                                    </article>
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
 
export default BlogSingle;