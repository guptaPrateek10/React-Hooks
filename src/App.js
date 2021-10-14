import React from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

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

export default () => {
  const items = [
    { title: "What is React?", content: "React is a Framework." },
    { title: "how is react?", content: "Awesome." },
    { title: "how good is react?", content: "React is a easy." },
  ];
  return (
    <div>
      {/* <Accordion arrItems={items} />; */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
};
