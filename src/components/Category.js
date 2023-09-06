import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from 'react-redux'
import { DLT,ADD,REMOVE } from '../redux/action'


const Category = () => {
  const [products,setProducts] = useState([]);
  const [categorys,setCategorys] = useState([]);

  const dispatch = useDispatch();
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  useEffect(()=>{
    getProducts();
  },[])

  useEffect(()=>{
    getCategory();
  },[])

  const getProducts = async()=>{
    let result = await fetch('http://localhost:5000/products');
    result = await result.json();
    setProducts(result);
  }
  console.warn("product",products);

  // get category details

  const getCategory = async()=>{
    let result = await fetch('http://localhost:5000/get-category');
    result = await result.json();
    setCategorys(result);
  }
  console.warn("category",categorys);

  const searchHandle = async(event)=>{
    let key = event.target.value;
    if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
  result = await result.json();
  if(result){
    setProducts(result)
  }
}else{
  getProducts();
}
  }

  // const addToCart = async()=>{
  //   let result = await fetch("http://localhost:5000/add-to-cart");
  //   result = await result.json();
  // }
  
  return (
    
    <div class="container">
         <input class="search-field" type="search" placeholder="Search Product Here" onChange={searchHandle}/>
    <div class="row-1">
        <ul class="row">
          {
            categorys.map((i)=>
          <li class="row-content">
            <img class="row-img" src={i.img}/>
            <p class="row-para">{i.title}</p>
          </li>
            )
}
          </ul>
    </div>
   
 


      <div class="row-2">
        <ul>
        <>
            {
              products.length>0 ? products.map((item)=>
              <li>
                <h6>offer</h6>
                <b>{item.offerText}</b>
               <img src={item.image}/>
               <p class="title">{item.title}</p>
               <p>Price:{item.price}</p>
             
               <button class="row-2-btn" onClick={()=>send(item)}>Add</button>
               
            </li>
            )
            : <h1>No Result Found</h1>
              }
            </>
        </ul>
        </div>
        </div>
        

  )
}


export default Category;
