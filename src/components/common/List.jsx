import React from "react";

function List({ items }) {
  return (
    <ul className="mb-4 list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  );
}

export default List;

