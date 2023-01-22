import axios from 'axios';
import React from 'react'

function Cart({data, cartdata}) {

    let handremove =async (data)=>{
        try {
         let removefromcart = await axios.post(`http://localhost:3005/removefromcart/63cac71c2784ecb0eaeb747e`, data);
         cartdata()
        } catch (error) {
         console.log(error)
        }
     }
  return (
    <>
        <div class="border p-3">
              <div class="mt-1  fs-5 fw-bold">{data.name}</div>
              <div class="mt-1 ">₹{data.price}</div>
              <div class="text-center">
                <button onClick={()=>handremove({data})} class="btn btn-outline-danger mt-auto">
                  Remove from cart
                </button>
              </div>
            </div>
    </>
  )
}

export default Cart