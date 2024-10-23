import { useEffect, useRef, useState } from "react";
import { images } from "../../icons/data";
import Filter from "./Filter";
import "./display.css";

const Display = ({ setGroup, setOrder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const clickRef = useRef();

  useEffect(() => {
    const detectOutsideClick = (event) => {
      if (clickRef.current && !clickRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", detectOutsideClick);

    return () => {
      document.removeEventListener("mousedown", detectOutsideClick);
    };
  }, []);

  return (
    <div>
      <div
        ref={clickRef}
        className="display-container flex-cc"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="filter-div flex-cc">
          <img src={images.display} alt="filter-logo" className="filter-logo" />
        </div>
        <div className="display-name flex-cc">
          Display
          <img src={images.down} alt="down-arrow" className="down-arrow" />
        </div>
      </div>
      {isVisible && (
        <div className="filter" ref={clickRef}>
          <Filter setGroup={setGroup} setOrder={setOrder} />
        </div>
      )}
    </div>
  );
};

export default Display;
