import React from 'react'
import { getAllCategories } from '../../api/getAllCategories'

const ProdCategories = () => {
    const [categories, setCategories] = React.useState<any>([]);
    React.useEffect(() => {
        getAllCategories()
            .then(response => setCategories(response.data))
            .catch();
    }, []);

  return (
    <>
    <div className='rowCategories w-full flex flex-row justify-center space-x-8 items-center overflow-x-auto '>
        {categories.map((category: { _id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; children: any; }) => (
            <div key={category._id} className="categories ">
                <div className="category-names flex w-fit flex-row hover:bg-gray-600 font-bold rounded-sm p-1">
                    {category.name}
                </div>
            </div>
        ))}
      
    </div>
    <div className='line h-1 mt-4 w-full bg-blue-700'></div>
    </>
  )
}

export default ProdCategories