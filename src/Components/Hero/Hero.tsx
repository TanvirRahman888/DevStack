import bannerImage from "../../assets/banner-stack.png";
const Hero = () => {
  return (
    <div>
      <div className="container mt-16 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="lg:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex justify-center md:justify-start gap-3 lg:w-1/2">
            <button className="btn bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white font-semibold">
              Explore Technologies
            </button>
            <button className="btn font-semibold px-8">Learn More</button>
          </div>
        </div>
        <div className="">
          <img src={bannerImage} alt="" className="" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Hero;
