import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { BackTop } from "./components/common/BackTop";


function App() {
  return (
    <>
      <Header />
      <FormSubmission />
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
