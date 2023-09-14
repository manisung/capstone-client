import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
// import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import MembersPage from './pages/MembersPage/MembersPage';
import LogInPage from './pages/LogInPage/LogInPage';
import UserPage from './pages/UserPage/UserPage';
import VideosListPage from './pages/VideosListPage/VideosListPage';
import EventsPage from './pages/EventsPage/EventsPage';
import AdminPage from './pages/AdminPage/AdminPage';
import AboutPage from './pages/AboutPage/AboutPage';
import StorePage from './pages/StorePage/StorePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';
import AdminLogInPage from './pages/AdminLogInPage/AdminLogInPage';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      {/* <Route path="/" element={<Navigate to='/landingpage' />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/videolist" element={<VideosListPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/adminlogin" element={<AdminLogInPage />}/>
      <Route path="/admin" element={<AdminPage />} /> //for now, just build one admin for demo purpose
      <Route path="/store" element={<StorePage />} />
    </Routes>
    <Footer text="Yumi Chung Official Website" />
  </BrowserRouter>
  );
}

export default App;
