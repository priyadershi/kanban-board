import { useState } from "react";
import { images } from "../../icons/data";
import Filter from "./Filter";
import "./display.css";

const Display = ({ setGroup, setOrder }) => {
  const toggle = useState(false);

  return (
    <>
      <div
        className="display-container flex-cc"
        onClick={() => toggle[1](!toggle[0])}
      >
        <div className="filter-div flex-cc">
          <img src={images.display} alt="filter-logo" className="filter-logo" />
        </div>
        <div className="display-name flex-cc">
          Display
          <img src={images.down} alt="down-arrow" className="down-arrow" />
        </div>
      </div>
      {toggle[0] && (
        <div className="filter">
          <Filter setGroup={setGroup} setOrder={setOrder} />
        </div>
      )}{" "}
    </>
  );
};

export default Display;
