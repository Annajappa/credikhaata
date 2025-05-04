import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CustomerProvider } from "./context/CustomerContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Loans from "./pages/Loans";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";

const AppRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/signup" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/customers"
          element={user ? <Customers /> : <Navigate to="/login" />}
        />
        <Route
          path="/loans"
          element={user ? <Loans /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <CustomerProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CustomerProvider>
    </AuthProvider>
  );
}

export default App;
