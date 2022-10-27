import React from "react";

const CloseButton = ({ ...attributes }) => {
  return (
    <div className="absolute p-1 rounded-full bg-black top-5 right-5 h-10 w-10 text-white text-center text-xl">
      <button
        className="rounded-full h-full w-full border border-2 border-white"
        {...attributes}
      >
        X
      </button>
    </div>
  );
};

export default CloseButton;
