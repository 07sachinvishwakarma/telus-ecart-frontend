
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Payment = () => {
    const [price, setPrice] = useState(0);
    const [disc, setDisc] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = +ele.price.split(" ")[0] * +ele.qnty + price;
           
           
        });
        setPrice(price);
    };

    useEffect(() => {
        total();
    }, [total])

    const discount = () => {
        let disc = 0;
        getdata.map((ele, k) => {
            disc += +ele.price.split(" ")[0] * +ele.qnty + disc;
            console.log(disc)
            if(disc>=150){
                   disc = disc * 0.20 ;
            }else{
                  disc = disc * 0; 
            }
        });
        setDisc(disc);
    };

    useEffect(() => {
        discount();
    },[discount])

    
  return (
      <div className='cart-payment' style={{textAlign:"center", marginTop:"120px"}}>
          <ul>
              <li>
                  <h3>Telus Bill Details</h3>
                  <p>Total Product Price : <span>{+price}</span></p>
                  <p>Product discount : <span>{+disc}</span></p>
                  <p>Delivery charge : <span>no delivery charge</span></p>
                  <h6>Grand Total : <span>{+price - +disc}</span></h6>
                  <button class='payment-button'>{price - disc} <br /> total <span>Payment</span></button>
              </li>
             
          </ul>
      </div>
  )
}

export default Payment