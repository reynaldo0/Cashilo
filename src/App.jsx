import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feature from "./pages/Feature";
import Hero from "./pages/Hero";
import AboutSection from "./pages/About";
import Next from "./pages/Next";
import DownloadSection from "./pages/Download";
import Footer from "./components/Footer";
import VideoDemo from "./pages/Video";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Saat pertama kali load, langsung scroll ke atas
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      <Feature />
      <AboutSection />
      <Next />
      <VideoDemo />
      <DownloadSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
