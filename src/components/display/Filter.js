import { useContext, useEffect } from "react";
import "./display.css";
import Dropdown from "./Dropdown";
import { dataContext } from "../../App";

const Filter = ({ setOrder }) => {
  const orders = ["title", "priority"];
  const { setTickets } = useContext(dataContext);

  return (
    <>
      <div className="filter-container">
        <div className="ordering-div flex-sc">
          Ordering
          <div className="ordering-select">
            <Dropdown options={orders} type="order" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
