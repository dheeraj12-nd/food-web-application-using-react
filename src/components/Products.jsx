import React from 'react'
import { product } from '../Data'
import '../assets/css/style.css'

const Products = () => {
  return (
    <>
        <section className='products' id='products'>
            <h2 className='heading'>
                <span>Our</span> products
            </h2>
            <div className='box-container'>
                {product.map((item, index) =>(
                    <div className='box'>
                        <div className='icons'>
                            <a href='#' className='fas fa-shopping-cart'></a>
                            <a href='#' className='fas fa-heart'></a>
                            <a href='#' className='fas fa-eye'></a>
                        </div>
                        <div className='image'>
                            <img src={item.img} alt=''/>
                        </div>
                        <div className='content'>
                            <h3><span>{item.details}</span></h3>
                            <div className='stars'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star-half-alt'></i>
                            </div>
                            <div className='price'>₹ {item.price} <span>₹ 299</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Products