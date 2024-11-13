import React from "react";
import Title from "./../Components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../Components/NewsLetterBox";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-start md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt="contact_img"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            46677 Willms Station <br />
            Suite 350 Washaingtoin , USA
          </p>
          <p className="text-gray-500 ">
            Tel : (415) 555-0234
            <br />
            Email : web@gmail.com
          </p>
          <p>Careers at Forever</p>
          <p>Learn more about our team and job openings.</p>
          <button className="border border-black text-sm px-8 py-4 hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default Contact;