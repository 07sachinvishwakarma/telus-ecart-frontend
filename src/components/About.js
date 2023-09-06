import React from 'react'
import about from './Image/About.jpg';
const About = () => {
  return (
    <>
      <div className='container about'>
      <div className='row'>
          <div className='col-md-12'>
           <img src={about} alt="not found" className='image'/>
          </div>
        </div>
        <div className='row space'>
          <div className='col=md-12'>
            <h3>Who we are</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col=md-12'>
            <p className='para'>Founded in August 2023 and based in India. Telus E-Cart is a trusted community marketplace for people to discover fresh fruits and vegetables around the world. Online from mobile phone or tablet or laptop from anywhere.</p>
            <p className='para'>We provide fresh vegetables and fruits all over the world. Our vegetables and fruits are produced by organic suppliments.</p>
            <p className='para'>Now we are the number 1 suppliers of organic fruits and vegetables all over the world, in a cheap prices.</p>
            <p className='para'> we have more than 1000+ happy customers.</p>
            <p className='para'> Single website for all your solutions.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col=md-12'>
            <h4 className='head-4'>#1 instant delivery service in India</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col=md-12'>
            <p className='para'>Shop on the go and get anything delivered in minutes. Buy everything from groceries to fresh fruits & vegetables, cakes and bakery items, to meats & seafood, cosmetics, mobiles & accessories, electronics, baby care products and much more. We get it delivered at your doorstep in the fastest and the safest way possible.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col=md-12'>
            <h4 className='head-4'>#2 single application for all your daily needs</h4>
          </div>
        </div>
        <div className='row bottom-space'>
          <div className='col=md-12'>
            <p className='para'>Order thousands of products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, spices, chocolates, chips, biscuits, Maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, other organic and gourmet products from your neighbourhood stores and a lot more.</p>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About
