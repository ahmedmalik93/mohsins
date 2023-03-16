import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";

let TabOneList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabTwoList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabThreeList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabFourList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabFiveList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabSixList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

let TabSevenList = [
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-1.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'IEM Cologne',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-2.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/03.svg',
        position: '3rd',
        date: 'Jan 05, 2022',
        vanue: 'BLAST Premier: Spring Finals 2022',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-3.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - North American Championship',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-4.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'Intel Extreme Masters XVI - Summer',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-5.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/01.svg',
        position: '2nd',
        date: 'Jan 05, 2022',
        vanue: 'RLCS Season X - Spring: NA Major',
    },
    {
        imgUrl: 'assets/images/match/teamsm/teamsm-6.png',
        imgAlt: 'achievement',
        sgvImg: 'assets/images/achivement/02.svg',
        position: '1st',
        date: 'Jan 05, 2022',
        vanue: 'DreamHack Masters Spring 2022',
    },
]

class AchievementPage extends Component {
    render() { 
        return (
            <Fragment>
                <Header />
                <PageHeader title={'our achievements'} curPage={'achievements'} />
                <div className="achievement-section padding-top padding-bottom">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="achievement-area">
                                <ul className="nav nav-tabs align-items-center" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation" title="Pubg Lite">
                                        <button className="nav-link active" id="tabOne-tab" data-bs-toggle="tab" data-bs-target="#tabOne" type="button" role="tab" aria-controls="tabOne" aria-selected="false"><img src="assets/images/achivement/01.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Rockstar Games">
                                        <button className="nav-link" id="tabTwo-tab" data-bs-toggle="tab" data-bs-target="#tabTwo" type="button" role="tab" aria-controls="tabTwo" aria-selected="false"><img src="assets/images/achivement/02.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Valorant">
                                        <button className="nav-link" id="tabThree-tab" data-bs-toggle="tab" data-bs-target="#tabThree" type="button" role="tab" aria-controls="tabThree" aria-selected="false"><img src="assets/images/achivement/03.png" alt="achievement" /></button>
                                    </li>

                                    <li className="nav-item" role="presentation" title="Apex Legends">
                                        <button className="nav-link" id="tabFour-tab" data-bs-toggle="tab" data-bs-target="#tabFour" type="button" role="tab" aria-controls="tabFour" aria-selected="false"><img src="assets/images/achivement/04.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Assassins Creed">
                                        <button className="nav-link" id="tabFive-tab" data-bs-toggle="tab" data-bs-target="#tabFive" type="button" role="tab" aria-controls="tabFive" aria-selected="false"><img src="assets/images/achivement/05.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Duty Mobile">
                                        <button className="nav-link" id="tabSix-tab" data-bs-toggle="tab" data-bs-target="#tabSix" type="button" role="tab" aria-controls="tabSix" aria-selected="false"><img src="assets/images/achivement/06.png" alt="achievement" /></button>
                                    </li>
                                    <li className="nav-item" role="presentation" title="Epic Games">
                                        <button className="nav-link" id="tabSeven-tab" data-bs-toggle="tab" data-bs-target="#tabSeven" type="button" role="tab" aria-controls="tabSeven" aria-selected="false"><img src="assets/images/achivement/07.png" alt="achievement" /></button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="tabOne" role="tabpanel" aria-labelledby="tabOne-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabOneList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabTwo" role="tabpanel" aria-labelledby="tabTwo-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabTwoList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabThree" role="tabpanel" aria-labelledby="tabThree-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabThreeList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabFour" role="tabpanel" aria-labelledby="tabFour-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabFourList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabFive" role="tabpanel" aria-labelledby="tabFive-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabFiveList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabSix" role="tabpanel" aria-labelledby="tabSix-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabSixList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tab-pane fade" id="tabSeven" role="tabpanel" aria-labelledby="tabSeven-tab">
                                        <table className="table text-white">
                                            <tbody>
                                                {TabSevenList.map((val, i) => (
                                                    <tr key={i}>
                                                        <td><img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} width="60" />
                                                        </td>
                                                        <td>
                                                            <img src={`${val.sgvImg}`} alt={`${val.imgAlt}`} />
                                                            {val.position}
                                                        </td>
                                                        <td>{val.date}</td>
                                                        <td><b>{val.vanue}</b></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
 
export default AchievementPage;