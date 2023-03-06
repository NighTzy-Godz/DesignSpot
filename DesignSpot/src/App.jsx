import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.css";
import Home from "./components/pages/Home";
import HomeLayout from "./components/pages/PageLayout/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
