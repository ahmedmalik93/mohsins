import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import Video from "../component/section/video/video";

class StreamPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Stream'} curPage={'Stream'} />
                <Video />
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default StreamPage;