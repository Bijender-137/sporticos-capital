import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import FormSubmission from "./components/FormSubmission";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <FormSubmission />
    </>
  );
}

export default App;
