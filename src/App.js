import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackTop } from "./components/common/BackTop";
import { Route, Routes, useLocation } from "react-router-dom";
import Faq from "./pages/Faq";
import Playpathwa from "./pages/Playpathwa";
import Wealth from "./pages/Wealth";
import Ementoring from "./pages/Ementoring";
import ClubInvestment from "./pages/ClubInvestment";
import DebtFunding from "./pages/DebtFunding";
import AboutUs from "./pages/AboutUs";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const timeout = setTimeout(scrollToTop, 300);
    return () => clearTimeout(timeout);
  }, [pathname])
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={FormSubmission} />
        <Route exact path="/faq" Component={Faq} />
        <Route exact path="/play-pathwa" Component={Playpathwa} />
        <Route exact path="/wealth-management" Component={Wealth} />
        <Route exact path="/e-mentoring" Component={Ementoring} />
        <Route exact path="/club-investments" Component={ClubInvestment} />
        <Route exact path="/debt-funding" Component={DebtFunding} />
        <Route exact path="/about-us" Component={AboutUs} />
      </Routes>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
