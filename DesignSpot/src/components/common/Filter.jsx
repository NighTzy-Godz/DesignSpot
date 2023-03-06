import React, { useEffect } from "react";
import "../../assets/css/filter.css";
import categories from "../../data/category";
import brands from "../../data/brand";
import DropDown from "./DropDown";
import RangePrice from "./RangePrice";
import Button from "../ui/button/Button";

const Filter = () => {
  const renderCategories = categories.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <li>{item.name}</li>
      </React.Fragment>
    );
  });

  return (
    <div className="filter">
      <div className="filter_section">
        <h3>Category</h3>
        <ul>{renderCategories}</ul>
      </div>
      <div className="filter_section">
        <h3>Brands</h3>
        <DropDown data={brands} />
      </div>

      <div className="filter_section">
        <h3>Price Range</h3>

        <RangePrice />
      </div>
      <div className="filter_section">
        <Button text="Clear Filters" />
      </div>
    </div>
  );
};

export default Filter;
