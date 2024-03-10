import React from 'react'
import { menu } from '../Data'

const Menu = () => {
  return (
    <>
        <section className='menu' id='menu'>
            <h2 className='heading'>
                <span>Our</span>menu
            </h2>
            <div className='box-container'>
                {menu.map((item, index) => (
                    <div className='box'>
                        <img src={item.img} alt=''/>
                        <div className='price'>{item.discriptions}</div>
                        <div className='price'>₹ {item.price}</div>
                        <a href='#' className='btn'>add to cart</a>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Menu