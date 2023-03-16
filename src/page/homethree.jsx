import { Component, Fragment } from "react";
import Header from "../component/layout/header";
import BannerThree from "../component/banner/bannerthree";
import BlogThree from "../component/section/blog/blogthree";
import AboutTwo from "../component/section/about/abouttwo";
import Game from "../component/section/game/game";
import Cta from "../component/section/cta/cta";
import MatchThree from "../component/section/match/matchthree";
import Product from "../component/section/product/product";
import Player from "../component/section/team/player";
import Video from "../component/section/video/video";
import Testimonial from "../component/section/testimonial/testimonial";
import SponsorTwo from "../component/section/sponsor/sponsortwo";
import Footer from "../component/layout/footer";

class HomeThree extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
				<BannerThree />
				<BlogThree />
				<AboutTwo />
				<Game />
				<MatchThree />
				<Player />
				<Cta />
				<Video />
				<Product />
				<Testimonial />
				<SponsorTwo />
				<Footer />
            </Fragment>
        );
    }
}
 
export default HomeThree;