import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import EditVoluntario from "./pages/EditVoluntario";
import NewProject from "./pages/NewProject";
import DashboardVoluntario from "./pages/DashboardVoluntario";
import PerfilVoluntario from "./pages/PerfilVoluntario";
import { UserPhotoProvider } from "./context/UserPhotoContext";

export function Router() {
  return (
    <UserPhotoProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/EditVoluntario" element={<EditVoluntario />} />
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/Dashboard-Voluntario" element={<DashboardVoluntario /> } /> 
        <Route path="/PerfilVoluntario" element={<PerfilVoluntario />} />
      </Routes>
    </UserPhotoProvider>
  );
}
