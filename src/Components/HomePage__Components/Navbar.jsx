import React from 'react';

import logo from '../../assets/Лого.svg'
import FaceBook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import Settings from '../../assets/Settings.png'
import Ellipse from '../../assets/Ellipse 1.png'
import { Link } from 'react-router-dom'



import '../../Styles/HomePage2.css'

const Navbar = () => {





  return (
    <div>
      <header >
        <ul className='navbar'>
          <Link to="/Admin">
            <li className='Navbar__logo'><img src={logo} alt="" /></li>
          </Link>
          <li><input type="text" placeholder='Поиск аниме,манга,фанфики' /></li>

          <li className='soc'><img src={FaceBook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" /></li>

          <li className='setting'>
            <img src={Settings} alt="" />
            {/* <img src={Ellipse} alt="" onClick={() => setModal(true)} />*/}
          </li>




        </ul>

      </header>
    </div>
  );
};

export default Navbar;