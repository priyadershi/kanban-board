import "./display.css";
import Dropdown from "./Dropdown";

const Filter = ({ setGroup, setOrder }) => {
  const groups = ["status", "user", "priority"];
  const orders = ["title", "priority"];

  return (
    <>
      <div className="filter-container">
        <div className="grouping-div flex-sc">
          Grouping
          <div className="grouping-select">
            <Dropdown setState={setGroup} options={groups} type="group" />
          </div>
        </div>
        <div className="ordering-div flex-sc">
          Ordering
          <div className="ordering-select">
            <Dropdown setState={setOrder} options={orders} type="order" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
