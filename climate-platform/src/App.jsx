import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import ClubsDashboard from "./Pages/Clubs/ClubsDashboard";
import Farmers from "./Pages/Farmers/Farmers";
import Awareness from "./Pages/Awareness/Awareness";
import Researchers from "./Pages/Researchers/Researchers";
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
        <Route path="/clubsdashboard" element={<ClubsDashboard />} />
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
