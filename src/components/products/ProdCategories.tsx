import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../../api/getAllCategories';
import { CiSearch } from 'react-icons/ci';

const ProdCategories = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const [categories, setCategories] = useState<any>([]);
  const [filteredCategories, setFilteredCategories] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    getAllCategories()
      .then((response) => {
        setCategories(response.data);
        setFilteredCategories(response.data);
      })
      .catch();
  }, []);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter categories based on the search query
    const filtered = categories.filter((category: any) => category.name.toLowerCase().includes(query));
    setFilteredCategories(filtered);
  };

  return (
    <>
      <div className='searchForCategories bg-white mb-8 flex justify-center rounded-md border-2 items-center mx-auto mt-4 focus:border-blue-500'>
        <input
          type='text'
          placeholder='Search for categories'
          className='w-full p-2 rounded-sm   border-gray-200 focus:outline-none '
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className='textgrey-900 bg-white text-xl p-2'>
          <CiSearch />
        </button>
      </div>
      <div className='rowCategories w-full flex flex-row justify-center space-x-8 items-center overflow-x-auto '>
        <button
          className={`category-names flex w-fit flex-row hover:bg-gray-600 hover:text-white cursor-pointer font-bold rounded-sm p-1 ${
            selectedCategory === 'all' ? 'bg-gray-600 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('all')}
        >
          all
        </button>

        {filteredCategories.map((category: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; children: any }) => (
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
