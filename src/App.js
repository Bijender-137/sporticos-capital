import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/Header";
import { BackTop } from "./components/BackTop";
import Footer from "./components/Footer";

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
