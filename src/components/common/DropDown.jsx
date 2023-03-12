import React from "react";

const DropDown = ({ currentBrand, data, eventHandler }) => {
  console.log(currentBrand);

  const renderOptions = data.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <option value={item.name}>{item.name}</option>
      </React.Fragment>
    );
  });

  return (
    <div className="dropdown">
      <select value={currentBrand} name="" id="" onChange={eventHandler}>
        {renderOptions}
      </select>
    </div>
  );
};

export default DropDown;
