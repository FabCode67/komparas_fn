import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/getAllCategories';
// import { getProductsByCategory } from '../../api/getProductsByCategory';

const ProdCategories = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const [categories, setCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    getAllCategories()
      .then((response) => setCategories(response.data))
      .catch();
  }, []);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <>
      <div className='rowCategories w-full flex flex-row justify-center space-x-8 items-center overflow-x-auto '>
        <button
          className={`category-names flex w-fit flex-row hover:bg-gray-600 hover:text-white cursor-pointer font-bold rounded-sm p-1 ${
            selectedCategory === 'all' ? 'bg-gray-600 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('all')}
        >
          all
        </button>

        {categories.map((category: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; children: any }) => (
          <div key={category._id} className='categories'>
            <div
              className={`category-names flex w-fit flex-row hover:bg-gray-600 hover:text-white cursor-pointer font-bold rounded-sm p-1 ${
                selectedCategory === category.name ? 'bg-gray-600 text-white' : ''
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </div>
          </div>
        ))}
      </div>
      <div className='line h-1 mt-4 w-full bg-blue-700'></div>
    </>
  );
};

export default ProdCategories;
