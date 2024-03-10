import React, { useRef } from 'react'
import '../assets/css/style.css'
import logo from '../assets/images/logo.png'
import {cart} from '../Data.js'


const Navbar = () => {
    // search button
    const searchRef = useRef();
    const searchHendler = () => {
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        menuRef.current.classList.toggle("active");
    }

    // Cart button 
    const cartRef = useRef();
    const cartHendler = () =>{
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        menuRef.current.classList.toggle("active");
    }

    // Mobile menu
    const menuRef = useRef();
    const menuHendler = () =>{
        menuRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    }
  return (

    <>
    <header className='header'>
        <a href='#' className='logo'><img src={logo} alt=''/></a>

        <nav className='navbar' ref={menuRef}>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#menu'>Menu</a>
            <a href='#products'>Products</a>
            <a href='#review'>Review</a>
            <a href='#contact'>Contact</a>
            <a href='#blogs'>blogs</a>
        </nav>

        <div className='icons'>
            <div className='fas fa-search' onClick={searchHendler}></div>
            <div className='fas fa-shopping-cart' onClick={cartHendler}></div>
            <div className='fas fa-bars' id="menu-btn" onClick={menuHendler}></div>
        </div>

        <div className='search-form' ref={searchRef}>
            <input type='search' placeholder='search here...' id='search-box'/>
            <label htmlFor='search-box' className='fas fa-search'></label>
        </div>

        <div className='cart-items-container' ref={cartRef}>
                {cart.map((item, index)=>(
                    <div className='cart-item' key={index}>
                        <span className='fas fa-times'></span>
                        <img src={item.img} alt="cart-itmes-img"/>
                        <div className='content'>
                            <h3>cart item 01</h3>
                            <div className='price'>₹ {item.price}</div>
                        </div>
                    </div>
                ))}
                <a href='#' className='btn'>Checkout now</a>
        </div>

    </header>
    </>


  )
}

export default Navbar