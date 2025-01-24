import React from "react";
import { Link } from "react-scroll";

function TableOfContent({ sections }) {
    return (
        <div className=" px-2 sticky overflow-x-auto top-[-2.5rem] md:top-[-.3rem] z-[100] thin-scrollbar select-none bg-bg">
            <h2 className="my-8 text-3xl font-bold text-center text-primary-orange">
                TABLE OF CONTENT
            </h2>
            <ul className="flex items-center gap-4 mb-3">
                {sections.map((section) => (
                    <li
                        key={section.to}
                        className="max-w-[10rem]  min-w-[8rem] bg-primary-red hover:bg-active-link hover:text-text overflow-hidden truncate py-2 px-4 rounded-3xl text-xs text-bg text-center"
                    >
                        <Link
                            className=" font-[500]  cursor-pointer mt-5 "
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

// import React from "react";
// import { Link } from "react-scroll";

// function TableOfContent({ sections }) {
//     return (
//         <div className=" my-[8rem] md:overflow-y-auto h-fit md:h-[85vh]  md:sticky top-[8rem] md:w-[35rem] px-10">
//             <h2 className="text-3xl font-bold text-center md:text-2xl text-primary-orange">
//                 TABLE OF CONTENT
//             </h2>
//             <ul className=" text-primary-red">
//                 {sections.map((section) => (
//                     <li key={section.to} className="mt-4 truncate">
//                         <Link
//                             className=" font-[500]  cursor-pointer mt-5 hover:text-text underline "
//                             to={section.to}
//                             offset={-110}
//                             smooth={true}
//                             duration={500}
//                         >
//                             {section.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default TableOfContent;
