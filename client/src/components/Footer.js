import { Facebook, LinkedIn, Search } from "@mui/icons-material";
import logo from '../assets/footer logo.png';
import Twitter from "@mui/icons-material/Twitter"; // Use a custom icon if required

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Search */}
          <div>
            <div className="flex items-center space-x-2">
              <div className="text-white text-2xl font-bold flex items-center">
                <img src={logo} alt="CultivAlte Logo" className="w-36" />
              </div>
            </div>
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search CultivAlte"
                  className="bg-gray-800 text-gray-400 rounded-full px-4 py-2 focus:outline-none w-full lg:w-full md:w-auto"
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                  aria-label="Search"
                >
                  <Search />
                </button>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Commodity Finder
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline flex items-center space-x-2"
                >
                  <span>Market Insights</span>
                  <span className="text-yellow-500 bg-gray-700 px-2 rounded-full text-xs">
                    New
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Newsletter</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-4 mb-4"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>© 2024 Global ISpice Platforms Pvt Ltd</p>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Settings</a></li>
            <li><a href="#" className="hover:underline">Your Privacy Choices</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">CultivAlte® is part of Global ISpice Platforms Pvt Ltd</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </a>
          </div>
        </div>

        {/* Golden Line */}
        <div className="h-1 bg-yellow-500 mt-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
