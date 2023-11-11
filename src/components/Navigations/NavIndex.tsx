import React from 'react'
import MobileNav from './MobileNav';
import BurgerButton from './BurgerButton';

const NavIndex = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    return (
        <div>
            {sidebarOpen && <MobileNav toggleSidebar={toggleSidebar} />}
            <BurgerButton
                toggleSidebar={toggleSidebar}
                sidebarOpen={sidebarOpen}
            />
        </div>
    )
}

export default NavIndex