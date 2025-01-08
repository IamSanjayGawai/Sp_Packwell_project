import React from 'react'
import {category} from "../../src/data/catalog.json"
import SizeDropDown from './SizeDropDown'

const SubDropDown = ({toggleSubDropdown, isSubDropdownOpen, item, isMiniDropDownOpen, toggleMiniDropdownOpen, isLengthDropDownOpen,toggleLengthDropdownOpen }) => {
  


    console.log(item.sizes, "item sizes")

  return (
<>
<li>
              <button
                onClick={toggleSubDropdown}
                className="flex items-center justify-between  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.name}
                <svg
                  className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>

              {/* Sub Dropdown Menu */}
              {isSubDropdownOpen && (
                <div className="absolute left-full top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {/* 
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {size.size}
                </a>
              </li>
            */}

{item.sizes.map((size, index) => (
            <SizeDropDown toggleMiniDropdownOpen={toggleMiniDropdownOpen} isMiniDropDownOpen = {isMiniDropDownOpen} size={size} index={index}  sizes={item.sizes}  isLengthDropDownOpen={isLengthDropDownOpen} toggleLengthDropdownOpen={toggleLengthDropdownOpen} />
        ))}
          </ul>
                </div>
              )}
            </li>
</>
  )
}

export default SubDropDown