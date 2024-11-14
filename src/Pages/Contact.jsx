import React from "react";
import Title from "./../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"GET IN"} text2={"TOUCH"} />
      </div>
      <div className="my-10 flex flex-col justify-start md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="contact_img"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Office</p>
          <p className="text-gray-500 ">
            12345 StyleSwap Avenue <br />
            Suite 450 Villupuram,TN
          </p>
          <p className="text-gray-500 ">
            Phone : 9876543210<br />
            Email : hemakarthikeyan2024@gmail.com
          </p>
          <p>Join Our Team</p>
          <p>Explore career opportunities with us and become part of our journey.</p>
          <button className="border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">
            View Open Positions
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default Contact;
