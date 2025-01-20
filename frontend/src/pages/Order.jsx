import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, all_products, cartItems, url } =
    useContext(ShopContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      all_products.forEach((item) => {
        if (cartItems[item._id] > 0) {
          orderItems.push({ ...item, quantity: cartItems[item._id] });
        }
      });
      let orderData = {
        address: data,
        items: orderItems,
        amount: getTotalCartAmount() + 2,
      };
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        alert("Order placement failed!");
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  useEffect(() => {
    if (!token || getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <section className="max-padd-container py-28 xl:py-32 ">
      <form
        onSubmit={placeOrder}
        className="flex flex-col xl:flex-row gap-20 xl:gap-28"
      >
        {/* Delivery Information */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="bold-28 mb-4">Delivery Information</h3>
          {/* Input Fields */}
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          {/* Other Fields */}
          {/* Similar structure for email, phone, street, etc. */}
        </div>

        {/* Cart Summary */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="bold-22">Summary</h4>
            {/* Cart Summary Details */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Order;
