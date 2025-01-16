import React from "react";

function Image({ src }) {
  return (
    <div className="mb-4">
      <img
        src={src}
        className="object-cover w-full mx-auto"
        alt="subsection image"
      />
    </div>
  );
}

export default Image;

