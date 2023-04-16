import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Vans from "./pages/Vans";
import { QueryClient, QueryClientProvider } from 'react-query';
import VanDetails from "./pages/VanDetails";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="vans/" element={<Vans />} />
          <Route path="vans/:id/" element={<VanDetails />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  )
}