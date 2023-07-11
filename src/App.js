import "./App.css";
import { useState } from "react";
import { userContext } from "./Context";
import Header from "./Header";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(3500);
  const [product2, setProduct2] = useState(1500);
  const [product3, setProduct3] = useState(300);


  return(
    <div className="App">
      <userContext.Provider value={'ธนบดี'}>
        <Header />
      </userContext.Provider>

      <div>
        <h3>Total Product in Basket {totalItems}</h3>
        <h3>Price All Product in Basket {totalPrice}</h3>
      </div>

      <div>
        <img src="joystick.png" alt='joystick' width="10%" /><br />
        Joy Stick Gaming Price {product1} Baht
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product1);
        }}>Add Product</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product1)
      }}>Remove Product</buttom>

      <div>
        <img src="keyboard.png" alt='keyboard' width="17%" /><br />
        keyboard Mechanical Price {product1} Baht
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product2);
        }}>Add Product</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product2)
      }}>Remove Product</buttom>

      <div>
        <img src="monitor.png" alt='monitor' width="15%" /><br />
        keyboard Mechanical Price {product1} Baht
      </div>
      <buttom onClick={()=>{
        setTotalItems(totalItems + 1);
        setTotalPrice(totalPrice + product3);
        }}>Add Product</buttom>
      <buttom onClick={()=>{
        setTotalItems(totalItems - 1);
        setTotalPrice(totalPrice - product3)
      }}>Remove Product</buttom>

    </div>
  );
}

export default App;
