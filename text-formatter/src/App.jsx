import "./App.css";
import React from "react";
import { Helmet } from "react-helmet";
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

function SEO() {
  return (
    <Helmet>
      <title>Text Formatter | Online Text Utilities</title>
      <meta name="description" content="Format, edit, and modify your text easily with our online text utilities tool. Free and easy to use!" />
      <meta name="keywords" content="text formatter, text utilities, online text editor, 
      text cleaner, case converter, uppercase converter, text format, lowercase converter, word count, 
      sentence count, remove extra spaces, white space remove, letters count, Initcase converter, remove special charcters,
      specail characters removal, extract numbers, extract numbers from text, extract numbers from sentence, text util,
      text editor, text edit" />
    </Helmet>
  );
}
export default App;
