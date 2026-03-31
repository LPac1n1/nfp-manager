import React, { useState, useEffect, useRef } from "react";

const Dropwdown = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <label className="block text-sm font-medium ml-2 mb-2">{label}</label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-neutral-900 border border-neutral-600/60 rounded-xl px-4 py-2 text-left hover:bg-neutral-700/50 focus:outline-none focus:ring-1 focus:ring-neutral-500 transition-all flex justify-between items-center"
      >
        <span className={selected ? "text-neutral-100" : "text-neutral-400"}>
          {selected || "Selecione..."}
        </span>
      </button>

      {isOpen && (
        <ul
          className={`absolute z-20 mt-2 w-full ${options.length > 3 ? "max-h-41" : ""} bg-neutral-800 border border-neutral-600/60 rounded-xl shadow-xl overflow-auto`}
        >
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 text-neutral-300 hover:bg-neutral-700/50 hover:text-neutral-100 cursor-pointer transition-colors"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropwdown;
