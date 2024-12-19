import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "./router";
import EditVoluntario from "./pages/EditVoluntario";

function App() {
  return (
    <>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </>
  );
}

export default App;
