import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About/>
    </BrowserRouter>
  );
}

export default App;
