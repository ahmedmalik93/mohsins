import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import TeamMember from "../component/section/team/teammember";


class TeamMemberPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'Team Members'} curPage={'Team Members'} />
                <TeamMember />
                <Footer />
            </Fragment>
        );
    }
}
 
export default TeamMemberPage;