import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Header/>
      <FormSubmission />
      <MyFooter/>
    </>
  );
}

export default App;
