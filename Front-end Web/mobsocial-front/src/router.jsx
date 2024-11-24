import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Home from "./pages/Home"
import EditVoluntario from "./pages/EditVoluntario";
import NewProject from "./pages/NewProject";
import DashboardVoluntario from "./pages/DashboardVoluntario";
import PerfilVoluntario from "./pages/PerfilVoluntario";
import { UserPhotoProvider } from "./context/UserPhotoContext";
import { UserProvider } from "./context/UserContext";
import DashboardONG from "./pages/dashboardONG";
import PerfilONG from "./pages/perfilONG";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return token ? <Component {...rest} /> : <Navigate to="/login" />;
};

export function Router() {
  return (
    <UserPhotoProvider>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/EditVoluntario" element={<ProtectedRoute element={EditVoluntario} />} />
        <Route path="/NewProject" element={<ProtectedRoute element={NewProject} />} />
        <Route path="/Dashboard-Voluntario" element={<ProtectedRoute element={DashboardVoluntario} />} />
        <Route path="/DashboardONG" element={<ProtectedRoute element={DashboardONG} />} />
        <Route path="/PerfilVoluntario" element={<ProtectedRoute element={PerfilVoluntario} />} />
        <Route path="/PerfilONG" element={<ProtectedRoute element={PerfilONG} />} />
      </Routes>
    </UserProvider>
    </UserPhotoProvider>
  );
}
