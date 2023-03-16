import { Component, Fragment } from "react";


import BannerTwo from "../component/banner/bannertwo";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import BlogTwo from "../component/section/blog/blogtwo";
import GameTwo from "../component/section/game/gametwo";
import MatchTwo from "../component/section/match/matchtwo";
import TeamTwo from "../component/section/team/teamtwo";
import TestimonialTwo from "../component/section/testimonial/testimonialtwo";
import VideoTwo from "../component/section/video/videotwo";

class HomeTwo extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
				<BannerTwo />
				<VideoTwo />
				<TeamTwo />
				<GameTwo />
				<MatchTwo />
				<TestimonialTwo />
				<BlogTwo />
				<Footer />
            </Fragment>
        );
    }
}
 
export default HomeTwo;