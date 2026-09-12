import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { iTechnologyType } from "./types/technologiesType";
import { ToastContainer } from "react-toastify";

const fetchTechnology = async ():Promise<iTechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

function App() {
  const technologyPromise = fetchTechnology();
  return (
    <>
      <div className="px-1">
        <Navbar />
        <Hero />
        <Suspense
          fallback={
            <div>
              <span className="loading loading-spinner loading-xs"></span>
              <span className="loading loading-spinner loading-sm"></span>
              <span className="loading loading-spinner loading-md"></span>
              <span className="loading loading-spinner loading-lg"></span>
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <Technologies technologyPromise={technologyPromise} />
        </Suspense>
        <Footer />
        <ToastContainer
        position="top-right"
        autoClose={2000}
      />
      </div>
    </>
  );
}

export default App;
