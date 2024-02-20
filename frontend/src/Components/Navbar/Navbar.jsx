import React, { useContext, useState } from 'react';
import './Navbar.scss';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <img src={logo} alt="" />
        <p>Sleep
          Universe</p>
      </div>
      <ul className='navbar__menu'>
        <li 
        onClick={()=>{setMenu("shop")}} 
        className='navbar__menu-link'
        >
          <Link 
            style={{textDecoration: 'none'}}
            to='/'
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li 
        onClick={()=>{setMenu("mens")}} 
        className='navbar__menu-link'
        >
          <Link 
            style={{textDecoration: 'none'}}
            to='/mens'
          >
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li 
        onClick={()=>{setMenu("womens")}} 
        className='navbar__menu-link'
        >
          <Link 
            style={{textDecoration: 'none'}}
            to='/womens'
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li 
        onClick={()=>{setMenu("kids")}} 
        className='navbar__menu-link'
        >
          <Link 
            style={{textDecoration: 'none'}}
            to='/kids'
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="navbar__login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="navbar__cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
