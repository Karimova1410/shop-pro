//outlet
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideBar from "../components/side-bar/SideBar";
import SaleBanner from "../components/sale-banner/SaleBanner";
import MainBanner from "../components/main-banner/MainBanner";

const Home = () => {
	return (
		<div>
			<Header />
			<div style={{
        display: "flex",
        justifyContent: "space-between",
        columnGap: "20px",
        
      }}>
				<SideBar />
				<MainBanner />
			</div>
			<SaleBanner />
			<div>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
