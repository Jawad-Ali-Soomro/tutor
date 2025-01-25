import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Book from "./pages/Book";

function ScrollToTop() {
const  location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:bookId" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
