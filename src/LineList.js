import React from "react";
import { FaTrashCan } from "react-icons/fa6";

const LineList = ({ item, handleCheck, handleClickk }) => {
  return (
    <li className="hero" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
        checked={item.checked}
      >
        {item.item}
      </label>

      <FaTrashCan
        role="button"
        tabIndex="0"
        onClick={() => handleClickk(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineList;
