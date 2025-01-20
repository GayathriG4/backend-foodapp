import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [all_products, setAll_products] = useState([]);
  const url = "https://backend-foodapp-1.onrender.com";

  const addToCart = async (itemId) => {
    try {
      if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      } else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      }
      if (token) {
        const response = await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
        console.log("Add to Cart Response:", response.data);
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (token) {
        const response = await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
        console.log("Remove from Cart Response:", response.data);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_products.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  const fetchProductList = async () => {
    try {
      const response = await axios.get(`${url}/api/product/list`);
      console.log("Product List Response:", response.data);
      setAll_products(response.data.data);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      console.log("Cart Data Response:", response.data);
      setCartItems(response.data.cartData);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchProductList();
      if (localStorage.getItem("token")) {
        const storedToken = localStorage.getItem("token");
        setToken(storedToken);
        await loadCartData(storedToken);
      }
    }
    loadData();
  }, []);

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
    setToken,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
