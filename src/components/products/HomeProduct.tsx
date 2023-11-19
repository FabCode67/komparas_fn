import ProdCategories from './ProdCategories'
import { getAllProducts } from '../../api/getAllCategories'
import { Key, useEffect, useState } from 'react'

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
const HomeProduct: React.FC <IProduct> = () => {
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        getAllProducts().then((res) => {
            setProducts(res.data.products); 
        });
    }, []);

    console.log(products);
    
    
  return (
    <div className='w-ful px-3 h-fit flex flex-col'>
        <ProdCategories />
       
        <div className='productCard flex flex-wrap gap-6 mt-7 mb-7'>
            {products.map((product:IProduct, index: Key | null | undefined) => (
                
            <div className='productCard1 h-fit bg-gray-200 w-[15%] flex flex-col' key={index}>
                <div className='productCard1Img h-[10rem] bg-gray-400 w-full'>
                    <img src={product?.product_image} alt='product' className='w-full h-full object-cover' />
                </div>
                <div className='productCard1Text h-[5rem] p-2 bg-gray-400 w-full flex flex-col justify-start text-start items-start'>
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