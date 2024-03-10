import React from 'react'
import { review } from '../Data'
import qouteImg from '../assets/images/quote-img.png'

const Review = () => {
  return (
    <>
        <section className='review' id='review'>
            <h2 className='heading'>
                Customer's <span>Review</span>
            </h2>
            <div className='box-container'>
                {review.map((item, index)=>(
                    <div className='box'>
                        <img src={qouteImg} alt='' className='quote'/>
                        <p>Our Food's Exceptional Nature Lies In The Intricate Blend Of Diverse Cultures, Creating A Unique 
                        Culinary Tapestry That Spans The Globe. From The Rich Heritage Of Traditional Recipes Passed Down Through 
                        Generations To The Endless Variety Of Ingredients</p>
                        <img src={item.img} alt=''className='user'/>
                        <h3><span>{item.customer}</span></h3>
                        <div className='stars'>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star'></i>
                                <i className='fas fa-star-half-alt'></i>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Review