import "./display.css";

const Filter = ({ setGroup, setOrder }) => {
  const handleGroupChange = (event) => {
    setGroup(event.target.value.toLowerCase());
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="filter-container">
        <div className="grouping-div flex-sc">
          Grouping
          <div className="grouping-select">
            <select className="grp-select" onChange={handleGroupChange}>
              <option vlaue="status">Default</option>
              <option vlaue="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
        <div className="ordering-div flex-sc">
          Ordering
          <div className="ordering-select">
            <select className="ord-select" onChange={handleOrderChange}>
              <option value="priority">Default</option>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
