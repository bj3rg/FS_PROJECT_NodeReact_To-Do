import React from "react";

export default function Button({ name, onClick, otherStyle, type, value }) {
  return (
    <div className="mt-2">
      <button
        type={type}
        value={value}
        onClick={onClick}
        className={
          "p-2 rounded-[5px] border border-lime-500 hover:bg-lime-500 " +
          otherStyle
        }
      >
        {name}
      </button>
    </div>
  );
}
