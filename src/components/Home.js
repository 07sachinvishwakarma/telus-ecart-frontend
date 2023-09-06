import React from "react";
import pulse from "./Image/Pulse.png"
import grocery from "./Image/Grocery.png"
import oil from "./Image/oil.png";
import icecream from "./Image/Icecream.png";
import chocolate from "./Image/Chocolate.png";
import venga from "./Image/venga.png";
import giftpack from "./Image/giftpack.png";

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-start display-1">Welcome</h1>
      <div className='rounded float-end'>
        <img src={grocery} className="rounded float-end" alt='grocery' style={{ borderRadius: "30px" }} />
        <h4 className="text-center display-5" style={{color:"#2B8000"}}>Shopping Cart</h4>
      </div>
      <p className="text-start">A grocery shopping is an android application where users can purchase and order groceries online.
        <br /> The system is developed with a user-friendly and attractive GUI.</p>
        <br/>
        <br/>
      <h3 className="text-start display-5" style={{color:"#FACA69"}}>SHOPPING NOW</h3>
      <br/>
      <b>Best Sellers</b>      
      <br/>
      <div className="row g-2 mt-3">
        
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={pulse} className="img-fluid img-thumbnail rounded-circle" alt='pulse' />
            <h5>Pulse</h5>
          </div>
        </div>
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={oil} className="img-fluid img-thumbnail rounded-circle" alt='oil' />
            <h5>Oil</h5>
          </div>
        </div>
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={icecream} className="img-fluid img-thumbnail rounded-circle" alt='icecream' />
            <h5>IceCream</h5>
          </div>
        </div>
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={chocolate} className="img-fluid img-thumbnail rounded-circle" alt='chocolate' />
            <h5>Chocolate</h5>
          </div>
        </div>
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={venga} className="img-fluid img-thumbnail rounded-circle" alt='venga' />
            <h5>Juices</h5>
          </div>
        </div>
        <div className="col-4">
          <div className='rounded mx-auto d-block w-25'>
            <img src={giftpack} className="img-fluid img-thumbnail rounded-circle" alt='giftpack' />
            <h5>Gifts</h5>
          </div>
        </div>
</div>

    </div>

  )
}

export default Home
