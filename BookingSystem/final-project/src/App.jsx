import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style/mystyle.css";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projektit" element={<Projects />} />
        <Route path="/yhteystiedot" element={<Contact />} />
        <Route path="/yleinen" element={<div>Yleinen page</div>} />
      </Routes>
    </>
  );
}