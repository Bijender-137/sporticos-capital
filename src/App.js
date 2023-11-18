import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackTop } from "./components/common/BackTop";
import { Route, Routes } from "react-router-dom";
import Academy from "./pages/Academy";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={FormSubmission} />
        <Route exact path="/academy" Component={Academy} />
      </Routes>
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
