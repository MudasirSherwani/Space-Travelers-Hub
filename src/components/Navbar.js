import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveLink('rockets');
    } else if (location.pathname === '/missions') {
      setActiveLink('missions');
    } else if (location.pathname === '/myProfile') {
      setActiveLink('myProfile');
    }
  }, [location]);

  return (
    <nav className="nav-bar">
      <div className="banner">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="banner-text">Space Travelers&rsquo; Hub</h1>
      </div>
      <div />
      <div className="nav-links">
        <NavLink to="/" className={`nav-text ${activeLink === 'rockets' ? 'active' : ''}`}>
          Rockets
        </NavLink>
        <NavLink to="/missions" className={`nav-text ${activeLink === 'missions' ? 'active' : ''}`}>
          Missions
        </NavLink>
        <div className="divider" />
        <NavLink to="/myProfile" className={`nav-text ${activeLink === 'myProfile' ? 'active' : ''}`}>
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
