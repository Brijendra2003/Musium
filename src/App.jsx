import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Exhibits from "./Dashbords/Exhibits";
import BookTicket from "./Dashbords/BookTickect.jsx";
import AboutUS from "./Dashbords/AboutUS";
import ContactUS from "./Dashbords/ContactUS";
import Home from "./Dashbords/Home.jsx";
import Login from "./Login.jsx";
// import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Exhibits" element={<Exhibits />} />
        <Route path="BookTickets" element={<BookTicket />} />
        <Route path="AboutUS" element={<AboutUS />} />
        <Route path="ContactUS" element={<ContactUS />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
