import Footer from '../Footer';
import NavBar from '../Navigations/NavBar';
import NavIndex from '../Navigations/NavIndex';
import UpperProduct from './UpperProduct';

const SingleProductPage = () => {

  return (
    <div className="w-full flex flex-col min-h-screen">
      <NavBar />
      <NavIndex />
      <div className='singleProduct min-h-screen h-fit laptop:px-20 desktop:px-20 tablet:px-10 px-3 flex  flex-col mt-24 pb-20'>
        <div className='flex w-full laptop:flex-row tablet:flex-row flex-col  h-fit desktop:space-x-5 tablet:space-x-3 laptop:space-x-5 space-x-0 laptop:space-y-0 desktop:space-y-0 tablet:space-y-0 space-y-3'>
          <UpperProduct />
          <div className='laptop:w-[30%] desktop:w-[30%] tablet:w-[30%] w-full h-fit flex'>
            <div className='grid laptop:grid-cols-2 desktop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-2 gap-2'>
              <div className='productCard bg-white rounded-md shadow-md'>
                <div className='w-full h-[200px]'>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-full h-full rounded-sm object-cover" />
                </div>
                <div className='w-full h-[fit] flex flex-col justify-start items-start p-3'>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Name:</span> ingozi
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Price</span> 200$
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>location:</span> simab spm
                  </p>
                </div>
              </div>
              <div className='productCard bg-white rounded-md shadow-md'>
                <div className='w-full h-[200px]'>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-full h-full rounded-sm object-cover" />
                </div>
                <div className='w-full h-[fit] flex flex-col justify-start items-start p-3'>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Name:</span> ingozi
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Price</span> 200$
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>location:</span> simab spm
                  </p>
                </div>
              </div>
              <div className='productCard bg-white rounded-md shadow-md'>
                <div className='w-full h-[200px]'>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-full h-full rounded-sm object-cover" />
                </div>
                <div className='w-full h-[fit] flex flex-col justify-start items-start p-3'>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Name:</span> ingozi
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Price</span> 200$
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>location:</span> simab spm
                  </p>
                </div>
              </div>
              <div className='productCard bg-white rounded-md shadow-md'>
                <div className='w-full h-[200px]'>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-full h-full rounded-sm object-cover" />
                </div>
                <div className='w-full h-[fit] flex flex-col justify-start items-start p-3'>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Name:</span> ingozi
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Price</span> 200$
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>location:</span> simab spm
                  </p>
                </div>
              </div>
              <div className='productCard bg-white rounded-md shadow-md'>
                <div className='w-full h-[200px]'>
                  <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/41-nc-alum-starlight-sport-band-starlight-s9?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693282285539" alt="product" className="w-full h-full rounded-sm object-cover" />
                </div>
                <div className='w-full h-[fit] flex flex-col justify-start items-start p-3'>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Name:</span> ingozi
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>Price</span> 200$
                  </p>
                  <p className='text-sm font-normal text-gray-800'>
                    <span className='f font-semibold'>location:</span> simab spm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProductPage;
