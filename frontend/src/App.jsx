import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

export default function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="overflow-hidden text-[#404040]">
      <BrowserRouter>
        <div className="bg-primary">
          {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
          <Header setShowLogin={setShowLogin}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
