import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import Game from "../component/section/game/game";


class TournamentPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tournament'} curPage={'Tournament'} />
                <Game />
                <Cta />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TournamentPage;