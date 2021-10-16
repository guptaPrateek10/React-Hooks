import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  //useEffect start here
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current?.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);
  //useEffect ends here
  //mapping data in the dropdowns
  const renderedOptions = options.map((option) => {
    if (option.Value === selected.Value) {
      return null;
    }
    return (
      <div
        key={option.Value}
        className="item"
        onClick={() => {
          console.log("item clicked");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            console.log("dropdown clicked");
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
