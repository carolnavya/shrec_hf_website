import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Dell_Logo from '../../assets/logos/dell.png';
import SHREC_Logo from '../../assets/logos/logo-SHREC.png';
import UF_Logo from '../../assets/logos/UF_Logo.png';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className='navbar showmenu'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className='logos'>
            <Link className='navbar-brand' to='/'>
              <img
                src={Dell_Logo}
                width='50'
                height='50'
                className='d-inline-block align-top'
                alt=''
              />
            </Link>
            <Link className='navbar-brand' to='/'>
              <img
                src={SHREC_Logo}
                width='150'
                height='50'
                className='d-inline-block align-top'
                alt=''
              />
            </Link>
            <Link className='navbar-brand' to='/'>
              <img
                src={UF_Logo}
                width='150'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
            </Link>
          </div>
        </div>

        {/* Side Bar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
