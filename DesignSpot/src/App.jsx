import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import ProductLayout from "./components/feature/Product/component/ProductLayout";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/PageLayout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductLayout />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
