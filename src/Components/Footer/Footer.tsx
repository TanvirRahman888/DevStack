import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto border-t border-slate-100 bg-white">
      <div className="px-6 py-14">

        <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack" className="h-8"/>
            </div>
            <p className="mt-4 max-w-xs leading-6 text-slate-500">Curated tools, technologies, and resources for developers building modern software.</p>

            <div className="mt-5 flex gap-5">
              <a href="#" className="text-slate-700 transition hover:text-pink-500">GitHub</a>

              <a href="#" className="text-slate-700 transition hover:text-pink-500">Twitter</a>

              <a href="#" className="text-slate-700 transition hover:text-pink-500">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wide text-slate-900">
              PRODUCT
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Home</a>
              </li>

              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Technologies</a>
              </li>

              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wide text-slate-900">COMPANY</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">About</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Contact</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Careers</a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wide text-slate-900">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-pink-500">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>


        <div className=" mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;