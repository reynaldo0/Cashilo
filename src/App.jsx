import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feature from "./pages/Feature";
import Hero from "./pages/Hero";
import AboutSection from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Feature/>
      <AboutSection/>
    </BrowserRouter>
  );
}

export default App;
