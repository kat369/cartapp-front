import React, { useState, useEffect } from 'react'
import axios from "axios";


function Card({data, cartdata}) {

   

    let handleaddtocart =async (data)=>{
        try {
         let addtocart = await axios.post(`http://localhost:3005/addtocart/63cac71c2784ecb0eaeb747e`, data);
         cartdata()
        } catch (error) {
         console.log(error)
        }
     }

  return (
    <>
    <div class="col mb-5">
         <div class="card h-100">
           <img
             class="card-img-top"
             src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
             alt="..."
           />

           <div class="card-body p-4">
             <div class="text-center">
               <h5 class="fw-bolder">{data.name}</h5>
               ₹{data.price}
             </div>
           </div>
           <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
             <div class="text-center">
               <button onClick={()=>handleaddtocart({data})} class="btn btn-outline-dark mt-auto">
                 Add to cart
               </button>
             </div>
           </div>
         </div>
       </div>
</>
  )
}

export default Card