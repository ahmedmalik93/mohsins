import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import MatchTwo from "../component/section/match/matchtwo";

class MatchTwoPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Match 2'} curPage={'Match 2'} />
                <MatchTwo />
                <Footer />
            </Fragment>
        );
    }
}
 
export default MatchTwoPage;