import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Match from "../component/section/match/match";

class MatchPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Matches'} curPage={'Matches'} />
                <Match />
                <Footer />
            </Fragment>
        );
    }
}
 
export default MatchPage;