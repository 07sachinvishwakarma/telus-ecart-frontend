import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux'



import Badge from '@mui/material/Badge';

import Menu from '@mui/material/Menu';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT ,ADD,REMOVE} from '../redux/action';

const Navbar = () => {

// //   const [price,setPrice] = useState(0);
//   // console.log(price);

      const getdata = useSelector((state)=> state.cartreducer.carts);
      // console.log(getdata);

//       const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
//   const send = (e)=>{
//       // console.log(e);
//       dispatch(ADD(e));
//     }

//   const dlt = (id)=>{
//       dispatch(DLT(id))
//   }
//   const remove = (item)=>{
//       dispatch(REMOVE(item))
//     }

//   const total = ()=>{
//       let price = 0;
//       getdata.map((ele,k)=>{
//           price = ele.price * ele.qnty + price
//       });
//       setPrice(price);
//   };

//   useEffect(()=>{
//       total();
//   },[total])
  
        const auth = localStorage.getItem('user');
        const navigate = useNavigate();
        const logout=()=>{
          localStorage.clear();
          navigate("/register")
        }

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a id='logo' href='/'>Telus E-Cart</a>
      </div>
      {auth ? 
      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
       <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/category'>Category</Link>
        <Link to='/service'>Service</Link>
        <Link to='/contact'>Contact</Link>
        {/* <Link to='/addToCart'>Cart</Link> */}
        <Link to='/addToCart'>Carts</Link>
        <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {/* <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i> */}
                        
                    </Badge>
        <Link onClick={logout} to='/register'>Logout ({JSON.parse(auth).name})</Link>
      </div>:
      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <Link to='/register'>
      <button>Sign Up</button>
    </Link>
    <Link to='/login'>Login</Link>
    </div>
}


{/* <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((e,i)=>{
                                            return (
                                                <>
                                                <div key={i}>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                                                        <img src={e.image} style={{width:"5rem",height:"5rem"}} alt="" />
                                                        </NavLink>   
                                                        </td>
                                                        <td>
                                                            <p><span>{e.title}</span></p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                            <p className='text-center'>Total :₹ {+e.price.split(" ")[0] * +e.qnty}</p>
                                                        </td>

                                                        <td className='mt-5'style={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(e.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                       <td>
                                                       <span style={{fontSize:24}} onClick={ ()=>remove(e)}>-</span>
                                                       <span style={{fontSize:24}} onClick={()=>send(e)}>+</span>
                                                       </td>

                                                    </tr>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                   
                                </tbody>
                            </Table>
                        </div>:

                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src="./cart.gif" alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

                </Menu> */}


      <div className='mobile-toggle' onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;