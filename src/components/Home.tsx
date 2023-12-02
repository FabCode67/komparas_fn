import React from 'react';
import NavIndex from './Navigations/NavIndex';
import SearchComponent from './SearchComponent';
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import './Home.css'; // Import your custom CSS file
import CategoryIndex from './categories/CategoryIndex';
import HomeProduct from './products/HomeProduct';
import UpdatePswdModel from './models/UpdatePswdModel';
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const sliderImages = [
    {
      url: 'https://images.pexels.com/photos/10976285/pexels-photo-10976285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'WELCOME TO KOMPARAS, YOUR ONLINE SHOPPING MALL',
    },
    {
      url: 'https://images.pexels.com/photos/9789494/pexels-photo-9789494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'IN KOMPARAS, YOU CAN COMPARE PRICES FROM DIFFERENT STORES',
    },
    {
      url: 'https://images.pexels.com/photos/7319110/pexels-photo-7319110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'WE PROVIDE YOU WITH THE BEST PRICES AND THE BEST QUALITY',
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken") || "";

const [isOpen, setIsOpen] = React.useState(true);

const toggleModal = () => {
  setIsOpen(!isOpen);
}

  return (
    <div className="w-full flex flex-col min-h-screen">
      <NavIndex />
      <SearchComponent />
      <CategoryIndex />
      <div className="w-full min-h-screen flex flex-col">
        <div className="bunnerPage w-full z-0 h-fit overflow-hidden">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-[95%] transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={image.url}
                alt={`Slider ${index}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              <div className="absolute top-1/2 left-1/2 w-full laptop:w-fit desktop:w-fit tablet:px-5 laptop:px-0 desktop:px-0 px-9 transform -translate-x-1/2 -translate-y-1/2 text-white laptop:text-5xl desktop:text-5xl text-justify tablet:text-4xl text-xl flex  leading-loosefont-bold">
                {image.text}
              </div>
            </div>
          ))}
          <button
            className="absolute top-1/2 laptop:left-4 desktop:left-4 left-1 transform -translate-y-1/2 text-white text-2xl font-bold bg-gray-800 px-1 py-1 rounded-md opacity-70 hover:opacity-100"
            onClick={handlePrevSlide}
          >
            <VscChevronLeft />
          </button>
          <button
            className="absolute top-1/2 laptop:right-4 desktop:right-4 right-1 transform -translate-y-1/2 text-white text-2xl font-bold bg-gray-800 px-1 py-1 rounded-md opacity-70 hover:opacity-100"
            onClick={handleNextSlide}
          >
            <VscChevronRight />
          </button>
        </div>
        <div className="flex justify-center mt-4 absolute bottom-[10%] desktop:left-0 laptop:left-0 tablet:left-0 left-[25%]">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`mx-2 overflow-hidden cursor-pointer ${index === currentSlide ? 'border-2 border-blue-500' : 'border border-gray-300'
                }`}
              style={{ width: '50px', height: '30px' }}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index}`}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fewDescription w-full flex desktop:flex-row laptop:flex-row tablet:flex-row flex-col laptop:space-y-0 tablet:space-y-0 desktop:space-y-0 space-y-4 laptop:px-24 desktop:px-24 tablet:px-4 px-2  pb-10 laptop:space-x-10 tablet:space-x-5 desktop:space-x-10 space-x-0 text-gray-600 items-center">
        <div className='flex flex-col laptop:w-[70%] desktop:w-[70%] tablet:w-[70%] w-full justify-start  shadow-2xl p-6 space-y-5'>
          <div className="text-4xl font-bold">What is Komparas?</div>
          <div className="laptop:text-lg desktop:text-lg tablet:text-base text-sm font-bold">
            Komparas is a website where you can compare prices from different stores. We provide you
            with the best prices and the best quality. <b>Our goals</b> are to provide you with the bes prices and the best quality. We also want to
            make your shopping experience easier and more convenient.
          </div>
        </div>
        <div className="buttons laptop:w-[30%] desktop:w-[30%] tablet:w-[30%] w-full shadow-2xl space-y-3 p-3 flex flex-col">
          <p className="text-sm font-bold">Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution; it represents the wise choice of many
            alternatives.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
        {resetToken && isOpen && <UpdatePswdModel isOpen={true} onClose={toggleModal} onImport={function (): void {
          throw new Error('Function not implemented.');
        } } />}
      </div>
      <HomeProduct product_name={''} product_image={''} product_price={0} product_stars={0} product_reviews={0} product_category={''} product_store={''} product_link={''} product_description={''} />
    </div>

  );
};

export default Home;
