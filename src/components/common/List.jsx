import React from "react";

function List({ children }) {
    return <ul className="mb-4 list-disc list-inside text-slate-700 space-y-2 pl-2 leading-relaxed">{children}</ul>;
}

export default List;
