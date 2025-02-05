import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-2 flex justify-between items-center">
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

export default Accordion;
