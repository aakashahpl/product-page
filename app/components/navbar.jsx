"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiMapPinLine } from "react-icons/pi";
import {LiaSearchSolid} from "react-icons/lia"
import Link from "next/link";
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    return (
        <div className="font-family:sailec">
            <nav
                className={`fixed top-0 left-0 w-screen h-16 flex  justify-between bg-white transition-all duration-100 ease-in-out  ${
                  scrolling?"shadow-lg":""
                }`}
            >
                <div className="flex justify-around  bg-white text-black w-3/12 font-">
                    <button className="">OUR FOOD</button>
                    <button>ABOUT US</button>
                    <button>WHERE TO FIND</button>
                </div>

                <div className="flex items-center ">
                    <div className=" tracking-[0.6em] font-bold">DAILY HARVEST</div>
                </div>

                <div className="flex  bg-white w-4/12 justify-between items-center ">
                  <div className="flex items-center">
                    <LiaSearchSolid size={20} className="mx-2"/>
                    <input className="h-10 border-none" type="text" placeholder="Search"  />
                  </div>
                    <div>GIFTS</div>
                    <div>LOG IN</div>
                    <div>GET STARTED</div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
