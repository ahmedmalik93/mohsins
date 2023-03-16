import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AboutTwo from "../component/section/about/abouttwo";
import Cta from "../component/section/cta/cta";
import Team from "../component/section/team/team";
import Testimonial from "../component/section/testimonial/testimonial";
import Video from "../component/section/video/video";

class AboutPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'about Gamerzy'} curPage={'about'} />
                <AboutTwo />
                <Video />
                <Team />
                <Testimonial />
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default AboutPage;