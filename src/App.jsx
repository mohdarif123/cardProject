import { Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Cards from "./pages/Card";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
