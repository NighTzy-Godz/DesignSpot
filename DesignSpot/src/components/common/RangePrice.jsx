import React, { useEffect, useState } from "react";

const RangePrice = () => {
  const [value, setValue] = useState(40000);
  const [bg, setBg] = useState({});

  const handleRange = (e) => {
    setValue(e.currentTarget.value);

    if (value)
      setBg({
        background: `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${
          value / 1000
        }%, #fff ${value / 1000}%, white 100%)`,
      });
  };

  return (
    <React.Fragment>
      <p>Current Value: {value}</p>
      <input
        style={bg}
        type="range"
        value={value}
        min={0}
        max={100000}
        onInput={handleRange}
      />
    </React.Fragment>
  );
};

export default RangePrice;
