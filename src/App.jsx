import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feature from "./pages/Feature";
import Hero from "./pages/Hero";
import AboutSection from "./pages/About";
import Next from "./pages/Next";
import DownloadSection from "./pages/Download";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Feature />
      <AboutSection />
      <Next />
      <DownloadSection />
    </BrowserRouter>
  );
}

export default App;
