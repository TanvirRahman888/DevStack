import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Technologies from "./Components/Technologies/Technologies";
import type { iTechnologyType } from "./types/technologiesType";
import { ToastContainer, Zoom } from "react-toastify";
import Loader from "./Components/Loader/Loader";

const fetchTechnology = async (): Promise<iTechnologyType[]> => {
  const res = await fetch("/data.json");
  await new Promise((resolve) => setTimeout(resolve, 1000));
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
        <Suspense fallback={<Loader />}>
          <Technologies technologyPromise={technologyPromise} />
        </Suspense>
        <Footer />
        <ToastContainer
          hideProgressBar
          position="top-center"
          autoClose={1500}
          theme="colored"
          transition={Zoom}
        />
      </div>
    </>
  );
}

export default App;
