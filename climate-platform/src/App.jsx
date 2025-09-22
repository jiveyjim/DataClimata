import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Clubs from "./Pages/Clubs";
import Farmers from "./Pages/Farmers";
import Citizens from "./Pages/Citizens";
import Researchers from "./Pages/Researchers";
import Donations from "./Pages/Donations/Donations";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/citizens" element={<Citizens />} />
        <Route path="/researchers" element={<Researchers />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </Router>
  );
}

export default App;
