import React from "react";

function List({ children }) {
    return <ul className="mb-4 list-disc list-inside">{children}</ul>;
}

export default List;
