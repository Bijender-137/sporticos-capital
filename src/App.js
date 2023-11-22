import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackTop } from "./components/common/BackTop";
import { Route, Routes, useLocation } from "react-router-dom";
import Academy from "./pages/Academy";
import Scouting from "./pages/Scouting";
import { useEffect } from "react";

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
        <Route exact path="/faq" Component={Academy} />
        <Route exact path="/scouting" Component={Scouting} />
      </Routes>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
