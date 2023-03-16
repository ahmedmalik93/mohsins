import {BrowserRouter, Routes, Route } from "react-router-dom";


import ScrollToTop from './component/layout/scrolltop';
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import AchievementPage from "./page/achievements";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import ShopCart from "./page/cart-page";
import CommingSoon from "./page/commingsoon";
import CommingSoonTwo from "./page/commingsoon-2";
import Contact from "./page/contact";
import ForgetPassword from "./page/forgetpassword";
import GalleryPage from "./page/gallery";
import Home from "./page/home";
import HomeThree from "./page/homethree";
import HomeTwo from "./page/hometwo";
import LogIn from "./page/login";
import MatchPage from "./page/match";
import MatchTwoPage from "./page/match-2";
import MatchDayPage from "./page/match-day";
import MatchSingle from "./page/match-single";
import MatchSingleTwo from "./page/match-single-2";
import PartnersPage from "./page/partners";
import PlayerSingle from "./page/player-single";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignUp from "./page/sign-up";
import StreamPage from "./page/stream";
import TeamPage from "./page/team";
import TeamPageTwo from "./page/team-2";
import TeamMemberPage from "./page/team-member";
import TeamSingle from "./page/team-single";
import TournamentPage from "./page/tournament";
import TournamentTwoPage from "./page/tournament-2";
import TournamentSingle from "./page/tournament-single";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="index-2" element={<HomeTwo />} />
					<Route path="index-3" element={<HomeThree />} />
					<Route path="tournament" element={<TournamentPage />} />
					<Route path="tournament-2" element={<TournamentTwoPage />} />
					<Route path="tournament-single" element={<TournamentSingle />} />
					<Route path="match" element={<MatchPage />} />
					<Route path="match-2" element={<MatchTwoPage />} />
					<Route path="match-day" element={<MatchDayPage />} />
					<Route path="match-single" element={<MatchSingle />} />
					<Route path="match-single-2" element={<MatchSingleTwo />} />
					<Route path="stream" element={<StreamPage />} />
					<Route path="achievements" element={<AchievementPage />} />
					<Route path="team" element={<TeamPage />} />
					<Route path="team-2" element={<TeamPageTwo />} />
					<Route path="team-single" element={<TeamSingle />} />
					<Route path="team-member" element={<TeamMemberPage />} />
					<Route path="player-single" element={<PlayerSingle />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="partners" element={<PartnersPage />} />
					<Route path="shop" element={<ShopPage />} />
					<Route path="shop-single" element={<ShopDetails />} />
					<Route path="cart-page" element={<ShopCart />} />
					<Route path="forgot-pass" element={<ForgetPassword />} />
					<Route path="coming-soon" element={<CommingSoon />} />
					<Route path="coming-soon-2" element={<CommingSoonTwo />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="blog-2" element={<BlogPageTwo />} />
					<Route path="blog-3" element={<BlogPageThree />} />
					<Route path="blog-single" element={<BlogSingle />} />
					<Route path="contact" element={<Contact />} />
					<Route path="login" element={<LogIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
