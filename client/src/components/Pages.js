import React, { useState } from "react";
import Eligibility from "./sections/Eligibility";
import Certifications from './sections/Certifications';
import Test from './sections/Test';
import Packaging from "./sections/Packaging";
import Banking from "./sections/Banking";
import Shipping from "./sections/Shipping";
import PostShipping from "./sections/PostShipping";
const sections = {
  eligibility: <Eligibility/>,
  certifications: <Certifications/>,
  tests: <Test/>,
  packaging: <Packaging/>,
  banking: <Banking/>,
  shipping: <Shipping/>,
  postShipping: <PostShipping/>,
};

const Pages = () => {
  const [activeSection, setActiveSection] = useState("eligibility");

  return (
    <div className="w-full">
      {/* Scrollable Nav */}
      <nav className="flex space-x-4  p-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button
          onClick={() => setActiveSection("eligibility")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Eligibility Criteria
        </button>
        <button
          onClick={() => setActiveSection("certifications")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Certifications
        </button>
        <button
          onClick={() => setActiveSection("tests")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Tests and Inspections
        </button>
        <button
          onClick={() => setActiveSection("packaging")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Packaging and Labelling
        </button>
        <button
          onClick={() => setActiveSection("banking")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Pre-Shipping Banking
        </button>
        <button
          onClick={() => setActiveSection("shipping")}
          className="text-gray-700 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Shipping and Insurance
        </button>
        <button
          onClick={() => setActiveSection("postShipping")}
          className="text-gray-500 font-semibold px-16 py-2 border-b-4 border-transparent hover:border-blue-800 hover:border-b-4"
        >
          Post-Shipping Steps
        </button>
      </nav>

      {/* Content Section */}
      <div className="p-4">{sections[activeSection]}</div>
    </div>
  );
};

export default Pages;
