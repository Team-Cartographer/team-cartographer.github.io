import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS for styling

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {title}
      </button>
      {isOpen && <div className="dropdown-menu">{children}</div>}
    </div>
  );
};

export default Dropdown;
