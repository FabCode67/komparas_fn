import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import UserAvatar from './UserAvatar';

  
const NavBar = () => {
  return (
    <nav className='flex justify-between text-lg fixed font-semibold w-full h-fit p-5 laptop:px-12 desktop:px-12 tablet:px-12 px-3 bg-white border-b-2 border-gray-200'>
      <div className='log tablet:text-3xl desktop:text-3xl laptop:text-3xl text-xl'>
        <button className='bg-white'>KOMPARAS</button>
      </div>
      <div className='laptop:flex tablet:flex desktop:flex hidden  justify-between space-x-10'>
        <button className='bg-white'>Home</button>
        <button className='bg-white'>About</button>
        <button className='bg-white'>Contact</button>
      </div>
      <div className='flex laptop:space-x-12 desktop:space-x-12 tablet:space-x-12 space-x-6'>
        <button className='bg-white text-2xl'>
          <div className="icon-container">
            <BsFillSuitHeartFill />
            <span className="icon-badge">9+</span>
          </div>
        </button>
        <button className='bg-white text-3xl'>
          <div className="icon-container">
            <AiOutlineShoppingCart />
            <span className="icon-badge">9+</span>
          </div>
        </button>
        <UserAvatar />
      </div>
    </nav>
  );
};

export default NavBar;
