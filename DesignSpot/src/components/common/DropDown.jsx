import React from "react";

const DropDown = ({ data }) => {
  const renderOptions = data.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <option>{item.name}</option>
      </React.Fragment>
    );
  });

  return (
    <div className="dropdown">
      <select name="" id="">
        {renderOptions}
      </select>
    </div>
  );
};

export default DropDown;
