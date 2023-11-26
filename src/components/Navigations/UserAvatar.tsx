import React from 'react'
import { useNavigate } from 'react-router-dom';

const UserAvatal = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("KomparasLoginsInfo");
    navigate('/login')
  }
    const [showProfileInfo, setShowProfileInfo] = React.useState(false);
        const userAvatarUrl = localStorage.getItem("KomparasLoginsInfo") ? JSON.parse(localStorage.getItem("KomparasLoginsInfo")!).profile_picture : "https://cdn-icons-png.flaticon.com/512/6596/6596121.png";
        const firstName = localStorage.getItem("KomparasLoginsInfo") ? JSON.parse(localStorage.getItem("KomparasLoginsInfo")!).first_name : "User";
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
            <button className="text-sm font-semibold bg-white">{firstName}</button>
            <button className="text-sm bg-white" onClick={handleLogout}>{
              localStorage.getItem("KomparasLoginsInfo") ? "Logout" : "Login"}</button>
          </div>
        )}
      </div>
    );
  };
  

export default UserAvatal