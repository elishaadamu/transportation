import { FaBars } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

import React from "react";
import Tab from "../common/Tab";
import { Link } from "react-router-dom";
// import logo from "../../assets/index";
// import { logo } from "../../assets/logo.png";

function Navbar() {
    return (
        <div className="px-4 py-2 md:h-[6.28rem] fixed top-0 left-0 bg-bg w-screen">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-between ">
                    <FaBars className="text-primary-orange text-4xl cursor-pointer md:hidden" />

                    <p className="text-primary-orange text-2xl text-ellipsis overflow-hidden text-nowrap">
                        WEBSITE NAME
                    </p>
                </div>

                <div className="text-primary-red hidden md:flex mr-2 text-xl justify-center items-center gap-1">
                    <Link
                        to="/"
                        className=" mx-3 text-center underline text-sm"
                    >
                        View the 2020 attachment report
                    </Link>
                    <Link to="/">
                        <FaSquareFacebook />
                    </Link>{" "}
                    <Link to="/">
                        <FaTwitterSquare />
                    </Link>
                    <Link to="/">
                        <FiLink />
                    </Link>
                </div>
                {/* <img src={logo} alt="logo" /> */}

                <FaShareFromSquare className=" cursor-pointer text-3xl text-primary-orange md:hidden" />
            </div>

            <div className="mt-4 md:flex gap-2  items-center hidden ">
                <Tab title="report" href="/" />
                <Tab title="Summary" href="/s" />
                <Tab title="Introduction" href="/about" />
                <Tab title="Trends and Forecasts" href="/s" />
                <Tab title="System Today " href="/s" />
                <Tab title="System Tomorrow" href="/s" />
                <Tab title="Funding " href="/s" />
            </div>
        </div>
    );
}

export default Navbar;
