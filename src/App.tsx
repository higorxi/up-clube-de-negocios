import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Stores from "./pages/Stores";
import StoreDetails from "./pages/StoreDetails";
import ServiceProviders from "./pages/ServiceProviders";
import Workshops from "./pages/Workshops";
import Events from "./pages/Events";
import Rewards from "./pages/Rewards";
import Donations from "./pages/Donations";
import AuthPage from "./pages/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lojas" element={<Stores />} />
          <Route path="lojas/:id" element={<StoreDetails />} />
          <Route path="prestadores" element={<ServiceProviders />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="eventos" element={<Events />} />
          <Route path="recompensas" element={<Rewards />} />
          <Route path="doacoes" element={<Donations />} />
          <Route
            path="configuracoes"
            element={
              <div className="p-6">
                <h1 className="text-2xl font-bold">Configurações</h1>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
