import React from 'react';

const LengthDropDown = ({ toggleLengthDropdownOpen, length }) => {
  return (
    <>
      <li>
        {length.lengths.map((leng, index) => (
          <button
            key={index}
            onClick={toggleLengthDropdownOpen}
            className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {leng.length}
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
        ))}
      </li>
    </>
  );
};

export default LengthDropDown;
