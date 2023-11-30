import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackTop } from "./components/common/BackTop";
import { Route, Routes, useLocation } from "react-router-dom";
import Faq from "./pages/Faq";
import Playerpathwa from "./pages/Playerpathwa";
import Wealth from "./pages/Wealth";
import Ementoring from "./pages/Ementoring";
import ClubInvestment from "./pages/ClubInvestment";
import DebtFunding from "./pages/DebtFunding";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Preloader } from "./components/common/Preloader";
import CommonFrom from "./components/common/CommonFrom";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 800,
    });
    Aos.refresh();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const timeout = setTimeout(scrollToTop, 300);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/faq" Component={Faq} />
        <Route exact path="/player-pathwa" Component={Playerpathwa} />
        <Route exact path="/wealth-management" Component={Wealth} />
        <Route exact path="/e-mentoring" Component={Ementoring} />
        <Route exact path="/club-investments" Component={ClubInvestment} />
        <Route exact path="/debt-funding" Component={DebtFunding} />
        <Route exact path="/about-us" Component={AboutUs} />
        <Route exact path="/contact" Component={CommonFrom} />
      </Routes>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
