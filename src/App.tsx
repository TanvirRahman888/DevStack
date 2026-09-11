import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";

function App() {
  return (
    <>
    <div className="px-1">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
