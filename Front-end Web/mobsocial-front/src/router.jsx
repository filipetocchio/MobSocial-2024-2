import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import EditVoluntario from "./pages/EditVoluntario";
import NewProject from "./pages/NewProject";

export function Router() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/EditVoluntario" element={<EditVoluntario />} />
        <Route path="/NewProject" element={<NewProject />} />
      </Routes>
  );
}
