import React from 'react';

interface CategoryBurgePropsProps {
    toggleCategory: () => void;
    categoryOpen: boolean;
  }

const CategoryBurger: React.FC<CategoryBurgePropsProps> = ({ toggleCategory, categoryOpen }) => {


  return (
    <button className="fixed z-50 top-[15%] left-0 m-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={toggleCategory}>
      <span className="sr-only">Open main menu</span>
      {!categoryOpen ? (
      <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      ) : (
        <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

export default CategoryBurger;
