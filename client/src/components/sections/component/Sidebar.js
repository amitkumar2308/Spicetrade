import { Facebook, Link, LinkedIn, Twitter } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 p-4 border-r  h-auto md:h-full">
      {/* Table of Contents */}
      <h3 className="text-lg font-semibold mb-4">TABLE OF CONTENTS</h3>
      <ul className="space-y-2 border-l-2 border-gray-300 pl-2">
        {[
          "Registered company",
          "GST registration",
          "PAN registration",
          "Importer Exporter Code (IEC)",
          "Authorized Dealer (AD) code",
          "FSSAI registration",
        ].map((item, index) => (
          <li key={index}>
            <a href="#" className={`text-gray-600 hover:text-blue-800 underline ${index === 0 ? "font-bold" : ""}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Media Icons */}
      <div className="flex justify-center md:justify-start space-x-3 mt-4 flex-wrap">
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <Link fontSize="small" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <Facebook fontSize="small" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <Twitter fontSize="small" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <LinkedIn fontSize="small" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
