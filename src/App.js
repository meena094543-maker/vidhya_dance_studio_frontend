import logo from './logo.svg';

import './App.css';

import { BrowserRouter, useLocation } from "react-router-dom";

import AppRoutes from './Routers/AppRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function AppContent() {
  const location = useLocation();

  const hideFooter = [
    "/login",
    "/signup",
    "/forgot-password",
  ].includes(location.pathname);

  return (
    <div className="App">
      <Navbar />

      <AppRoutes />

      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
