import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import EditVoluntario from "./pages/EditVoluntario";
import NewProject from "./pages/NewProject";
import DashboardVoluntario from "./pages/DashboardVoluntario";
import PerfilVoluntario from "./pages/PerfilVoluntario";
import { UserPhotoProvider } from "./context/UserPhotoContext";
import DashboardONG from "./pages/dashboardONG";
import PerfilONG from "./pages/perfilONG";


export function Router() {
  return (
    <UserPhotoProvider>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/EditVoluntario" element={<EditVoluntario />} />
        <Route path="/NewProject" element={<NewProject />} />
        <Route path="/Dashboard-Voluntario" element={<DashboardVoluntario /> } /> 
        <Route path="/DashboardONG" element={<DashboardONG /> } /> 
        <Route path="/PerfilVoluntario" element={<PerfilVoluntario />} />
        <Route path="/PerfilONG" element={<PerfilONG />} />
      </Routes>
    </UserPhotoProvider>
  );
}
