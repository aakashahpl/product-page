"use client";
import React, { useEffect, useState } from "react";

const Landing = () => {
    return (
        <div className="w-screen flex justify-center h-screen mt-32">
            <div className="flex flex-col items-center gap-y-5" >
                <div className="text-[3rem] font-semibold">      
                    LET'S START WITH GOOD CLEAN FOOD
                </div>
                <div className="text-2xl">
                    Built on fruits + vegetables. Delivered to your door. Ready in minutes.
                </div>
                <div>
                    <button className="bg-black text-[0.8rem]  hover:bg-white hover:text-black hover:shadow-xl text-[#e8e8e8] transition-all duration-300 ease-in-out font-semibold py-5 px-10 rounded-full" style={{fontFamily:"sailec"}}>
                        BUILD YOUR FIRST BOX
                    </button>
                </div>
                <div>
                  <img className="w-screen object-contain" src="https://images.ctfassets.net/iw4cawak30d4/7GR7a27rmUOz21fQh0kW7e/5fd663ec31825bcd6509f91a71f44dab/harvestbowl_desktop__1_.jpeg?fm=avif&q=85&w=1040" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Landing;
