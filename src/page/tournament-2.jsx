import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import GameTwo from "../component/section/game/gametwo";


class TournamentTwoPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tournament 2'} curPage={'Tournament 2'} />
                <GameTwo />
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TournamentTwoPage;