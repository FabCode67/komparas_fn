import React, { useState, useEffect } from 'react';
import { fetchParentCategories } from '../../api/getAllCategories';

interface CategoryIndexProps {
  toggleCategory: () => void;
}

const CategoryView: React.FC<CategoryIndexProps> = ({ toggleCategory }) => {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    fetchParentCategories()
      .then(response => setCategories(response.data))
      .catch();
  }, []);

  const renderDropdown = (children: any[]) => {
    return (
      <div className="dropdown-content backdrop-blur-lg h-fit">
        {children.map(child => (
          <p key={child._id} className='hover:bg-gray-700 p-2 rounded-sm hover:cursor-pointer'>{child.name}</p>
        ))}
      </div>
    );
  };

  return (
    <div className='categories flex flex-col w-fit h-fit fixed top-32 left-16 p-3 text-white backdrop-blur-lg z-50'>
      <h1 className='text-lg underline-offset-auto font-thin'>Categories</h1>
      {categories.map((category: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; children: any; }) => (
        <div key={category._id} className="category space-y-1 relative">
          <div className="category-name hover:bg-gray-600 rounded-sm p-1 w-full" onClick={toggleCategory}>
            {category.name}
          </div>
          <div className='h-fit w-full '>
            {category.children && category.children.length > 0 && (
              <div className="category-children  ml-2  left-0 top-full">
                {renderDropdown(category.children)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryView;
