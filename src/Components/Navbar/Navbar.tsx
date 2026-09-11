import logo from "../../assets/logo-text.png"
const Navbar = () => {
  return (
    <div className="w-full h-18 bg-[#F1F5F9] fixed shadow-2xs top-0">
      <div className="lg:container mx-auto max-lg:collapse lg:mb-48  w-full">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <img src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-10 px-1">
              <li>
                <h2 className="font-semibold hover:text-[#DB2777]">Home</h2>
              </li>
              <li>
                <h2 className="font-semibold hover:text-[#DB2777]">Technologies</h2>
              </li>
              <li>
                <h2 className="font-semibold hover:text-[#DB2777]">Projects</h2>
              </li>
              <li>
                <h2 className="font-semibold hover:text-[#DB2777]">About</h2>
              </li>
              <li>
                <h2 className="font-semibold hover:text-[#DB2777]">Contact</h2>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <button className="btn rounded-full">Sign In</button>
            <button className="btn btn-secondary rounded-full">Sign Up</button>
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="flex flex-col gap-5 p-5 bg-[#F1F5F9] rounded-sm font-semibold">
            <li>
                <h2 className="hover:text-[#DB2777]">Home</h2>
              </li>
              <li>
                <h2 className="hover:text-[#DB2777]">Technologies</h2>
              </li>
              <li>
                <h2 className="hover:text-[#DB2777]">Projects</h2>
              </li>
              <li>
                <h2 className="hover:text-[#DB2777]">About</h2>
              </li>
              <li>
                <h2 className="hover:text-[#DB2777]">Contact</h2>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
