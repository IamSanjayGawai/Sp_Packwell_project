import React, { useState } from "react";
import SubDropDown from "./SubDropDown";
import {category} from "../../src/data/catalog.json"

const MultiLevelDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setSubDropdownOpen] = useState(false);
  const [isMiniDropDownOpen, setMiniDropDownOpen] = useState(false);
  const [isLengthDropDownOpen, setLengthDropDownOpen] = useState(false);

  

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleSubDropdown = () => setSubDropdownOpen(!isSubDropdownOpen);
  const toggleMiniDropdownOpen = () => setMiniDropDownOpen(!isMiniDropDownOpen);
  const toggleLengthDropdownOpen = () =>{ console.log("working"), setLengthDropDownOpen(!isLengthDropDownOpen)};
  console.log(category, "category")

  return (
    
    <div className="relative">
      {/* Dropdown Button */}
  <a
        onClick={toggleDropdown}
        className="text-whitefont-medium rounded-lg text-sm text-center inline-flex items-center cursor-pointer"
      >
        Category
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </a>
    {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 mt-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          {category.map((item, index)=> <>   
          <SubDropDown  toggleSubDropdown= {toggleSubDropdown} isSubDropdownOpen= {isSubDropdownOpen} item={item} toggleMiniDropdownOpen={toggleMiniDropdownOpen} isMiniDropDownOpen={isMiniDropDownOpen} toggleLengthDropdownOpen={toggleLengthDropdownOpen} isLengthDropDownOpen={isLengthDropDownOpen}/>
          </> ) 
}
  
  {/* <SubDropDown  toggleSubDropdown= {toggleSubDropdown} isSubDropdownOpen1= {isSubDropdownOpen1}/>
  <SubDropDown  toggleSubDropdown= {toggleSubDropdown} isSubDropdownOpen2= {isSubDropdownOpen2}/>
  <SubDropDown  toggleSubDropdown= {toggleSubDropdown} isSubDropdownOpen3= {isSubDropdownOpen3}/>
  <SubDropDown  toggleSubDropdown= {toggleSubDropdown} isSubDropdownOpen4= {isSubDropdownOpen4}/> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiLevelDropdown;
