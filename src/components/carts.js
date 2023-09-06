import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT, ADD, REMOVE } from '../redux/action';
import { Link } from 'react-router-dom';

const Carts = () => {

    const [price, setPrice] = useState(0);
    const [disc, setDisc] = useState(0);
    // console.log(price);

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    const dlt = (id) => {
        dispatch(DLT(id))
    }
    const remove = (item) => {
        dispatch(REMOVE(item))
    }
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
            disc = +ele.price.split(" ")[0] * +ele.qnty + disc;
            if(disc>150){
                   disc = disc * 0.20;
            }else{
                disc = disc * 0;
            }
        });
        setDisc(disc);
    };

    useEffect(() => {
        discount();
    }, [discount])

   
    return (
        <>
                <div>

            {
                getdata.length ?
                    <div className='card_details' style={{width:"70%",textAlign:"center", marginLeft:"180px",marginTop:"40px"}}>
                        <Table>
                            <thead>
                                <tr className='cart-heading' style={{backgroundColor:"rgb(216, 211, 211)"}}>
                                    <th style={{textAlign:"center"}}>Photo</th>
                                    <th>Telus Cart Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getdata.map((e) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>
                                                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                            <img src={e.image} style={{ width: "10rem", height: "10rem" , marginLeft:"100px"}} alt="" />
                                                        </NavLink>
                                                    </td>
                                                    <td>
                                                        <p>{e.title}</p>
                                                        <p>Price : ₹{e.price}</p>
                                                        <p>Quantity : {e.qnty}</p>
                                                       
                                                        <p className='text-center'>Total :₹ {+e.price.split(" ")[0] * +e.qnty}</p>
                                                    </td>
                                                    <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(e.id)}>
                                                        <i className='fas fa-trash smalltrash'></i>
                                                    </td>
                                                    
                                                    <td style={{margin:"10px", marginBottom:"90px"}}>
                                                        <span style={{ fontSize: 20,margin:"20px",border:"1px solid gray", width:"90px",height:"70px",padding:"5px"}} onClick={() => remove(e)}>Dec</span>
                                                        <span style={{ fontSize: 20, border:"1px solid gray", width:"90px",height:"70px",padding:"5px" }} onClick={() => send(e)}>Inc</span>
                                                    </td>
                                                  
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                                {/* <div>
                                    <ul>
                                <li><p className='text-center'>Total :₹ {+price}</p></li>
                                <li><button>Checkout</button></li>
                                </ul>
                                </div> */}
                                {/* <div className='cart-container' style={{width:"100%"}}>
                                    <ul style={{display:"flex"}}> 
                                        <li>
                                            <h3>Biil Details</h3>
                                           
                                       
                                            <p>MRP : <span>{+price}</span></p>
                                            <p>Product discount : <span>{+disc}</span></p>
                                            <p>Delivery charge : <span></span></p>
                                            <h6>Grand Total : <span>{price + disc}</span></h6>
                                            </li>
                                            <li>
                                            <button>{price+disc} <br/> total <span>Checkout</span></button>
                                            </li>
                                            </ul>
                                </div>
                                */}
                                    <td style={{textAlign:"center", float:"right"}}>
                                    <Link to="/payment">
                                        Checkout : {price}
                                        </Link>
                                    </td>
                                    
                            </tbody>
                            
                            </Table>
                            
                    </div> :

                    <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                        <i className='fas fa-close smallclose'
                            onClick={handleClose}
                            style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                        <p style={{ fontSize: 22 }}>Your carts is empty</p>
                        <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                    </div>
            }
            </div>
        </>
      
    )
}

export default Carts