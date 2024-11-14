import React from "react";
import Title from "../Components/Title";
import { assets } from '../assets/assets';
import NewsLetterBox from "../Components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about_img"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At <strong>StyleSwap</strong>, we’re passionate about transforming the way you experience online shopping. Our platform offers a curated collection of high-quality, trendy apparel and accessories, designed to meet the needs of modern styles and diverse preferences. We believe in providing a seamless shopping experience, where quality meets affordability, so you can express your style effortlessly.
          </p>
          <p>
            Founded to make fashion accessible to everyone, StyleSwap brings handpicked collections from renowned brands, emerging designers, and exclusive labels. With a user-friendly platform and personalized recommendations, we ensure you find styles that reflect your unique taste.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower individuals to feel confident and stylish by providing access to the latest fashion trends and timeless classics. We are committed to upholding the highest standards in quality, variety, and customer satisfaction, making StyleSwap a trusted destination for fashion enthusiasts.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At StyleSwap, we take pride in our commitment to quality. Each product goes through a rigorous selection process to ensure it meets our high standards. From fabric quality to style, we guarantee you’ll receive the best in every order.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Our platform is designed with your convenience in mind. From seamless browsing to easy checkout, we make shopping effortless and enjoyable. Enjoy quick, hassle-free access to a variety of styles at your fingertips.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Customer satisfaction is at the heart of what we do. Our dedicated support team is here to assist you at every step, ensuring a smooth and satisfying shopping experience. At StyleSwap, we value your feedback and strive to exceed your expectations.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
}

export default About;
