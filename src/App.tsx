import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}