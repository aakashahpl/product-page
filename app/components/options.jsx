"use client";
import React from "react";
import Image from "next/image";
import { Oswald } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Oswald({ subsets: ['latin'] })
 
const op = [
    {
        image: "https://images.ctfassets.net/iw4cawak30d4/1mN4rMMthzXBKtKI2PPF0E/c7b70d585dc9d3bbf100372565e02232/200219_TetrisRefresh2_07_Cherry_Smoothie_019_SL_Final_2.png",
        title: "SMOOTHIES",
        details:
            "A one-cup wonder that makes busy days feel blissful. Add your favorite liquid, blend, then sip 'n go.",
    },
    {
        image: "https://images.ctfassets.net/iw4cawak30d4/1X9ylsPXc3WIgFpCpdXcvH/e5171d734372806e526213451bbbab91/200219_TetrisRefresh2_02_Kale_HarvestBowl_011_FINAL_SL_1.png",
        title: "HARVEST BOWLS",
        details:
            "Savory spices. Nourishing flavors. Colorful bowls of good-for-you food for mealtimes and in-between times",
    },
    {
        image: "https://images.ctfassets.net/iw4cawak30d4/5iWxwKoJgmtrVttTuN2EvT/2bdfbcd0fbb42d9cad493bf0216e599f/200219_TetrisRefresh2_06_Cauliflower_Soup_008_FINAL_SL_2_1.png",
        title: "SOUPS",
        details:
            "Brimming with veggies and warms you up from the inside with deep flavor and diverse ingredients. ",
    },
    {
        image: "https://images.ctfassets.net/iw4cawak30d4/2tIJoz0IPhZNEsDau2yNvo/28ab3bb281ae8b473c8f57cf7639e376/200219_TetrisRefresh2_06_Crimini_Flatbread_014_FINAL_SL_2.png",
        title: "FLAT BREADS",
        details:
            "It's not delivery. It's Flatbreads: gluten-free and piled-high slices of veg-packed realness. ",
    },
];
const Options = () => {
    return (
        <div className="flex flex-col justify-center w-screen items-center mt-20">
            <div className="flex flex-col justify-center w-9/12 items-start mb-9">
                <div className=" text-5xl">OUR FLAVOR? UNMATCHED.</div>
                <div className=" text-xl">
                    Our in-house chefs take sustainably-sourced fruits +
                    vegetables and turn them into delicious eats. Then, we pass
                    all that goodness onto you. We got you. 24/7.
                </div>
            </div>
            <div className=" grid grid-cols-4 gap-0 w-9/12 ">
                {op.map((product) => {
                    return (
                        <div className=" w-10/12" key={product.title}>
                            <div>
                                <Image key={1}
                                    height={500}
                                    width={400}
                                    src={product.image}
                                    alt={"dl"}
                                />

                                <div className={`${inter.className} text-xl`}>{product.title}</div>
                                <div className=" text-[14px] text-gray-600">{product.details}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Options;
