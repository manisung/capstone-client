import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
// import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import NavBarVertical from './components/NavBarVertical/NavBarVertical';
import MembersPage from './pages/MembersPage/MembersPage';
import LogInPage from './pages/LogInPage/LogInPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Navigate to='/landingpage' />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/navbarv" element={<NavBarVertical />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/login" element={<LogInPage />} />
    </Routes>
    <Footer text="Yumi Chung Official Website" />
  </BrowserRouter>
  );
}

export default App;
