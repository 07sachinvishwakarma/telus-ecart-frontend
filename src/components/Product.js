import React ,{ useEffect, useState }from "react";
import { useNavigate ,Link} from "react-router-dom";

const Product = () => { 
  const [details,setDetail] = useState([]);
  useEffect(()=>{
    getDetails();
  },[])

  const getDetails = async()=>{
    let result = await fetch('http://localhost:5000/get-detail');
    result = await result.json();
    setDetail(result);
  }
  console.warn("detail",details);


 
 
  return (
      <div class="cart"  >
        <ul>
          {details.map((i)=>
          <Link to='/category'>
             <li class="cart-container">
               <img  src={i.image} />
               <p class="title">{i.title}</p>
             </li> 
             </Link>
          )
          
}
        </ul>
       </div>
        

  )


}


export default Product;
