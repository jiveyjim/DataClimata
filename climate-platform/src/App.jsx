import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Clubs from "./Pages/Clubs";
import Farmers from "./Pages/Farmers";
import Awareness from "./Pages/Awareness/Awareness";
import Researchers from "./Pages/Researchers";
import Donations from "./Pages/Donations/Donations";
import Login from "./Pages/Authentication/Login";   
import Signup from "./Pages/Authentication/Signup"; 
import Forgot from "./Pages/Authentication/Forgot";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/about" element={<About />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/awareness" element={<Awareness/>} />
        <Route path="/researchers" element={<Researchers />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
