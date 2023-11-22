import ProdCategories from './ProdCategories'
import { getAllProducts } from '../../api/product';
import { Key, useEffect, useState } from 'react'
import { getPoductByCategory } from '../../api/product';
interface IProduct {
    product_name: string;
    product_image: string;
    product_price: number;
    product_stars: number;
    product_reviews: number;
    product_category: string;
    product_store: string;
    product_link: string;
    product_description: string;
}
const HomeProduct: React.FC<IProduct> = () => {
    const [products, setProducts] = useState<any>([]);
    const [, setSelectedCategory] = useState<string>('all');

    useEffect(() => {
        // Fetch products when the component mounts
        getAllProducts().then((res) => {
            setProducts(res.data.products);
        });
    }, []);

    const handleCategoryChange = (category: string) => {
        // Update the selected category and fetch products for the new category
        setSelectedCategory(category);
        if (category === 'all') {
            // Fetch all products
            getAllProducts().then((res) => {
                setProducts(res.data.products);
            });
        } else {
            // Fetch products by category
            getPoductByCategory(category).then((res) => {
                setProducts(res.data.products);
            });
        }
    };



    return (
        <div className='w-ful px-3 h-fit flex flex-col'>
            <ProdCategories onCategoryChange={handleCategoryChange} />

            <div className='productCard grid desktop:grid-cols-5 laptop:grid-cols-5 tablet:grid-cols-3 grid-cols-2 gap-6 mt-7 mb-7'>
                {products.length === 0 && (
                    <div className='w-full h-full flex justify-center items-center'>
                        <p className='text-2xl font-bold'>No products found that category</p>
                    </div>
                )}
                {products.map((product: IProduct, index: Key | null | undefined) => (

                    <div className='productCard1 h-fit bg-gray-200 w-full flex flex-col' key={index}>
                        <div className='productCard1Img h-[10rem]  bg-gray-400 w-full'>
                            <img src={product?.product_image} alt='product' className='w-full h-full object-cover' />
                        </div>
                        <div className='productCard1Text h-fit p-2 bg-gray-400 w-full flex flex-col justify-start text-start items-start'>
                            <p className='productStarsRevew text-center text-xs text-yellow-300'>product Stars</p>
                            <p className='text-center'>{product?.product_name}</p>
                            <p className='text-center'>From <span className='font-bold'>${product.product_price}</span> in  <span className='font-bold'>5</span> stores</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeProduct