import React from 'react'

const UserAvatal = () => {
    const [showProfileInfo, setShowProfileInfo] = React.useState(false);
    const userAvatarUrl = 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png';
    const toggleProfileInfo = () => {
      setShowProfileInfo(!showProfileInfo);
    };
  
    return (
      <div className="relative z-50" onClick={toggleProfileInfo}>
        <img
          src={userAvatarUrl}
          alt="User Avatar"
          className="rounded-full h-10 w-10 object-cover cursor-pointer"
        />
        {showProfileInfo && (
          <div className="absolute top-[150%] w-[6rem] right-0 z-50 bg-white p-2  flex flex-col space-y-3 rounded shadow">
            <button className="text-sm font-semibold bg-white">Profile</button>
            <button className="text-sm bg-white">Login</button>
          </div>
        )}
      </div>
    );
  };
  

export default UserAvatal