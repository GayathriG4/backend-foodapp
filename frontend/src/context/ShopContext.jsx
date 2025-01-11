import React, { createContext, useEffect, useState } from "react";
import { all_products } from "../assets/data";
import axios from "axios"

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("")
  const [all_products, setAll_products] = useState([])
  const url = "http://localhost:4000"

  // adding items to cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }

  };


  // removing items from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  }; 

  // get total cart amount
  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product._id === item);
        TotalAmount += itemInfo.price * cartItems[item];
      }
    }
    return TotalAmount;
  };

  // get total cart items
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };


  // fetch productList
  const fetchProductList = async () => {
    const response = await axios.get(url + "/api/product/list")
    setAll_products(response.data.data)
  }

  // load cart data
  const loadCartData = async (token)=>{
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItems(response.data.cartData)
  }

  useEffect(() => {
    async function loadData() {
      await fetchProductList()
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"))
        await loadCartData(localStorage.getItem("token"))
      }
    }
    loadData()
  }, [])
  

  const contextValue = {
    all_products,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    token,
    setToken
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
