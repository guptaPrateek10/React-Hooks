import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

export default () => {
  const items = [
    { title: "What is React?", content: "React is a Framework." },
    { title: "how is react?", content: "Awesome." },
    { title: "how good is react?", content: "React is a easy." },
  ];
  return (
    <div>
      {/* <Accordion arrItems={items} />; */}
      <Search />
    </div>
  );
};
