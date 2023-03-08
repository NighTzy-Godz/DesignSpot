import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/global.css";

import ProductLayout from "./components/feature/Product/component/ProductLayout";

import SingleProduct from "./components/feature/Product/component/SingleProduct";

import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/PageLayout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductLayout />} />
          <Route path="products/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
