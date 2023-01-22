import "./App.css";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";

function App() {
  const [projectdata, setprojectdata] = useState([]);
  const [cartt, setcartt] = useState([]);
  useEffect(() => {
    loadData();
    cartdata();
  }, []);
  

  let cartdata = async () => {
    try {
      let cdata = await axios.get(
        `http://localhost:3005/user/63cac71c2784ecb0eaeb747e`
      );
      setcartt(cdata.data);
    } catch (error) {
      console.log(error);
    }
  };

  let loadData = async () => {
    try {
      let productdata = await axios.get(`http://localhost:3005/products`);
      setprojectdata(productdata.data);
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Discount-Park
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <div class="btn btn-outline-dark">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {cartt.length}
                </span>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop With us</h1>
            <p class="lead fw-normal text-white-50 mb-0">With Huge Offers!</p>
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <div class="col-9">
            <section class="py-5">
              <div>
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {projectdata.map((data) => {
                    return <Card data={data} cartdata={cartdata} />;
                  })}
                </div>
              </div>
            </section>
          </div>
          <div class="col-3 ">
            <div class="mt-5 text-center fs-4 fw-bolder">Cart Items</div>
            
            {
              cartt.map((data)=>{
                return <Cart data={data} cartdata={cartdata}/>

              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
