import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
//items for Accordion Funcionality
const items = [
  { title: "What is React?", content: "React is a Framework." },
  { title: "how is react?", content: "Awesome." },
  { title: "how good is react?", content: "React is a easy." },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      <div>
        <Header />
        <Route path="/">
          <Accordion arrItems={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
      {/* <Translate /> */}
      {/* <Accordion arrItems={items} />; */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropDown(!showDropDown)}>
        Toggle Dropdown{" "}
      </button>
      {showDropDown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}

      {/* {showDropDown && (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      )} */}
    </div>
  );
};
// Options for change color functionality using Dropdown
const options = [
  {
    label: "The color Red",
    Value: "red",
  },
  {
    label: "The color green",
    Value: "green",
  },
  {
    label: "The color blue",
    Value: "blue",
  },
];
