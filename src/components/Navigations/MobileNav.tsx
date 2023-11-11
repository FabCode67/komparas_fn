import React from "react";

interface MobileNavProps {
    toggleSidebar: () => void;
  }
const MobileNav: React.FC<MobileNavProps> = ({ toggleSidebar }) => {
  return (
    <div className='flex flex-col space-y-3 h-fit p-3 text-start justify-start items-start z-5z0 bg-white border-2 desktop:hidden laptop:hidden tablet:hidden  top-[10%] right-0 w-[30%] fixed border-gray-200'>

    <button className='bg-white' onClick={toggleSidebar}>Home</button>
    <button className='bg-white' onClick={toggleSidebar}>About</button>
    <button className='bg-white' onClick={toggleSidebar}>Contact</button>
  </div>
  )
}

export default MobileNav