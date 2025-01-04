import { useContext } from "react";
import User from "../card/User";
import "./column.css";
import { dataContext } from "../../App";
import { useState } from "react";
import Add from "../add/Add";
import OptionMenu from "../options/OptionMenu";
import Rename from "../options/Rename";
import Remove from "../options/Remove";

const Header = ({ name, userId }) => {
  const { images } = useContext(dataContext);
  const [visibleAddForm, setVisibleAddForm] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showRename, setShowRename] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  const menuOptions = ["Rename Column", "Remove Column"];

  return (
    <>
      <div className="header-container flex-sc">
        <div className="header flex-lc">
          {/* {userId ? (
            <User userId={userId} />
          ) : (
            <img src={images[name]} alt={name} className="header-icon" />
          )} */}
          <div className="header-name">{name}</div>
        </div>
        <div className="options">
          <img
            src={images.add}
            className="add"
            alt="plus"
            onClick={() => setVisibleAddForm(!visibleAddForm)}
          />
          <img
            src={images.threeDot}
            className="three-dot"
            alt="three-dot"
            onClick={() => setShowOptions(!showOptions)}
          />
          {showRename && <Rename name={name} setIsVisible={setShowRename} />}
          {showRemove && <Remove colName={name} setIsVisible={setShowRemove} />}
          {showOptions && (
            <OptionMenu
              options={menuOptions}
              isVisible={showOptions}
              setIsVisible={setShowOptions}
              setShowRename={setShowRename}
              setShowRemove={setShowRemove}
            />
          )}
        </div>
      </div>
      {visibleAddForm && (
        <Add setIsVisible={setVisibleAddForm} colName={name} />
      )}
    </>
  );
};

export default Header;
