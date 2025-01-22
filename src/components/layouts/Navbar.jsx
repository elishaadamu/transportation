import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { FaBars } from "react-icons/fa6";
import { FaShareFromSquare, FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tab } from "../common";
import { logo2 } from "../../assets";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setOpenMenu((prev) => {
            const newState = !prev;

            // Use GSAP timeline for better control and smoothness
            const tl = gsap.timeline({
                defaults: { duration: 0.5, ease: "power3.inOut" },
            });

            if (newState) {
                // Open menu animation
                tl.to(menuRef.current, { height: "100vh" }).fromTo(
                    menuRef.current.querySelectorAll("div, ul, li"),
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, stagger: 0.1 },
                    "<"
                );
            } else {
                // Close menu animation
                tl.to(menuRef.current.querySelectorAll("div, ul, li"), {
                    opacity: 0,
                    y: -20,
                    stagger: 0.1,
                }).to(menuRef.current, { height: "0" }, "<");
            }

            return newState;
        });
    };

    return (
        <div className="pt-2 h-[3.6rem] md:h-[5.5rem] fixed z-[500] top-0 left-0 bg-bg w-screen ">
            <div className="flex items-center justify-between px-4">
                <div className="flex items-center justify-between gap-2 ">
                    <FaBars
                        className="text-4xl cursor-pointer text-primary-orange md:hidden"
                        onClick={toggleMenu}
                    />
                    <p className="truncate sm:text-2xl text-primary-orange">
                        Tri-Cities MPO PLAN2050
                    </p>
                </div>

                <div className="justify-center gap-1 mr-20 text-xl tems-center text-primary-red md:flex">
                    {/* <Link to="/" className="mx-3 text-sm text-center underline">
                        View the 2020 attachment report
                    </Link>
                    <Link to="/">
                        <FaSquareFacebook />
                    </Link>
                    <Link to="/">
                        <FaTwitterSquare />
                    </Link>
                    <Link to="/">
                        <FiLink />
                    </Link> */}

                    <Link to="/">
                        <img
                            src={logo2}
                            alt="logo"
                            className="w-[3rem] h-[2.5rem] object-cover    absolute right-8 top-2"
                        />
                    </Link>
                </div>
            </div>

            {/* Mobile menu Div */}
            <div
                ref={menuRef}
                className="h-0 md:h-[3.2rem] md:relative bottom-[.2rem] overflow-hidden bg-active-link md:bg-transparent transition-all md:-mt-[.08rem] mt-[.7rem]"
            >
                <div className="flex items-center justify-between w-full px-4 py-8 md:hidden">
                    <Link to="/" className="mx-3 text-sm text-center underline">
                        View the 2020 attachment report
                    </Link>
                    <Link to="/" className="w-[12rem]  aspect-square">
                        <img src={logo2} alt="logo" />
                    </Link>
                </div>

                <div className="items-center gap-2 px-4 md:flex md:justify-center md:mt-4">
                    <Tab title="report" href="/" />
                    <Tab title="Summary" href="/summary" />
                    <Tab title="Introduction" href="/introduction" />
                    <Tab
                        title="Trends and Forecasts"
                        href="/trend_and_forecast"
                    />
                    <Tab title="System Today " href="/system_today" />
                    <Tab title="System Tomorrow" href="/system_tomorrow" />
                    <Tab title="Funding " href="/funding" />
                    <Tab title="Appendices " href="/appendices" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
