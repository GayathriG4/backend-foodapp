import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const url = "http://localhost:4000";

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="bg-primary text-[#404040] text-[90%]">
        <Navbar />
        <div className="mx-auto max-w-[1440px] flex flex-col sm:flex-row mt-3">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}