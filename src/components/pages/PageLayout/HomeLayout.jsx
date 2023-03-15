import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../ui/navbar/Navbar";

const HomeLayout = ({ cart }) => {
  return (
    <React.Fragment>
      <Navbar cart={cart} />
      <Outlet></Outlet>
    </React.Fragment>
  );
};

export default HomeLayout;
