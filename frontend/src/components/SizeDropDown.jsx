import React from 'react';
import LengthDropDown from './LengthDropDown';

const SizeDropDown = ({
  size,
  isMiniDropDownOpen,
  toggleMiniDropdownOpen,
  toggleLengthDropdownOpen,
  isLengthDropDownOpen,
  sizes,
}) => {
  return (
    <>
      <li>
        <button
          onClick={toggleMiniDropdownOpen}
          className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          {size.size}
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
        {isMiniDropDownOpen && (
          <div className="absolute left-full top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {sizes
                .filter((currentSize) => currentSize.size === size.size) // Filter relevant sizes
                .map((filteredSize, index) => (
                  <LengthDropDown
                    key={index}
                    isLengthDropDownOpen={isLengthDropDownOpen}
                    toggleLengthDropdownOpen={toggleLengthDropdownOpen}
                    length={filteredSize}
                  />
                ))}
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default SizeDropDown;
