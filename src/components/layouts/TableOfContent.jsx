import React from "react";
import { Link } from "react-scroll";

function TableOfContent({ sections }) {
    return (
        <div className=" my-[8rem] md:overflow-y-auto h-fit md:h-[85vh]  md:sticky top-[8rem] md:w-[35rem] px-10">
            <h2 className="text-3xl font-bold text-center md:text-2xl text-primary-orange">
                TABLE OF CONTENT
            </h2>
            <ul className=" text-primary-red">
                {sections.map((section) => (
                    <li key={section.to} className="mt-4 list-decimal ">
                        <Link
                            className=" font-[500]  cursor-pointer mt-5 hover:text-text underline "
                            to={section.to}
                            offset={-110}
                            smooth={true}
                            duration={500}
                        >
                            {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TableOfContent;
