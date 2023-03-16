import { Component, Fragment } from "react";
import Banner from "../component/banner/banner";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about/about";
import Blog from "../component/section/blog/blog";
import Game from "../component/section/game/game";
import Match from "../component/section/match/match";
import Sponsor from "../component/section/sponsor/sponsor";
import Team from "../component/section/team/team";
import Testimonial from "../component/section/testimonial/testimonial";
import Tournament from "../component/section/tournament/tournament";
import Video from "../component/section/video/video";


class Home extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
				<Banner />
				<Sponsor />
				<Tournament />
				<About />
				<Game />
				<Match />
				<Video />
				<Team />
				<Testimonial />
				<Blog />
				<Footer />
            </Fragment>
        );
    }
}
 
export default Home;