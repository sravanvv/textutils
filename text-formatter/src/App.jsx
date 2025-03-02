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
      <Helmet>
      <title>TextUtils - Best Online Text Formatter & Case Converter</title>
        <meta
          name="description"
          content="TextUtils is the best online text formatter. Convert text to uppercase, lowercase, sentence case & more. Try it for free!"
        /><meta name="keywords" content="text formatter, text utilities, online text editor, 
      text cleaner, case converter, uppercase converter, text format, lowercase converter, word count, 
      sentence count, remove extra spaces, white space remove, letters count, Initcase converter, remove special charcters,
      specail characters removal, extract numbers, extract numbers from text, extract numbers from sentence, text util,
      text editor, text edit" />
    </Helmet>
    </div>
  );
}

// function SEO() {
//   return (
//     <Helmet>
//       <title>TextUtils - Best Online Text Formatter & Case Converter</title>
//         <meta
//           name="description"
//           content="TextUtils is the best online text formatter. Convert text to uppercase, lowercase, sentence case & more. Try it for free!"
//         /><meta name="keywords" content="text formatter, text utilities, online text editor, 
//       text cleaner, case converter, uppercase converter, text format, lowercase converter, word count, 
//       sentence count, remove extra spaces, white space remove, letters count, Initcase converter, remove special charcters,
//       specail characters removal, extract numbers, extract numbers from text, extract numbers from sentence, text util,
//       text editor, text edit" />
//     </Helmet>
//   );
// }
export default App;
