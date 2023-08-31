import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
// import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import NavBarVertical from './components/NavBarVertical/NavBarVertical';
import MembersPage from './pages/MembersPage/MembersPage';
import LogInPage from './pages/LogInPage/LogInPage';
import UserPage from './pages/UserPage/UserPage';
import VideosListPage from './pages/VideosListPage/VideosListPage';
import EventsPage from './pages/EventsPage/EventsPage';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Navigate to='/landingpage' />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/navbarv" element={<NavBarVertical />} />
      {/* this route is just for styling, will move as a component to every page */}
      <Route path="/members" element={<MembersPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/users/:id" element={<UserPage />} />
      <Route path="/videolist" element={<VideosListPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/admins/:id" element={<AdminPage />} />
    </Routes>
    <Footer text="Yumi Chung Official Website" />
  </BrowserRouter>
  );
}

export default App;
