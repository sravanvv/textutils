import "./App.css";
import React from "react";
import Textform from "./components/Textform";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Textform />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
