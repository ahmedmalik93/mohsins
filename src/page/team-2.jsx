import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cta from "../component/section/cta/cta";
import Team from "../component/section/team/team";


class TeamPageTwo extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'our team 2'} curPage={'team 2'} />
                <Team />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TeamPageTwo;