import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/PageLayout/HomeLayout";
import ProductLayout from "./components/pages/PageLayout/ProductLayout";
import ProductPage from "./components/pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<ProductPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
