import React from "react";
import Title from "../Components/Title";
import {assets} from '../assets/assets'
import NewsLetterBox from "../Components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t ">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. temporibus
            cum eveniet fugit error dicta tenetur. quam magni, aliquid
            voluptates voluptate maxime ipsum voluptatum reprehenderit,
            Reprehenderit doloremque fugit est dolor deleniti, assumenda quas
            id, saepe nulla, sint ipsam esse iure tempora. Blanditii
          </p>
          <p>
            adipisicing elit. Cupiditate, ad nemo provident est quos quia
            deleniti ullam exercitationem atque autem ipsa earum cumque
            temporibus cum eveniet fugit error dicta tenetur. quam magni,
            aliquid voluptates voluptate maxime ipsum voluptatum reprehenderit,
            temporibus, sequi fugit. Architecto, aspernatur vero ut porro
            consequuntur nesciunt
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission consectetur adipisicing elit. Accusantium dolore
            voluptas doloribus quo atque, reiciendis cum provident dolorum
            quisquam nobis veritatis. Unde ratione, placeat ea eum labore
            distinctio alias illo!
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
            consectetur adipisicing elit. Inventore harum ratione, illo
            temporibus facilis at rem quos magni rerum dolor, totam distinctio
            et, voluptate maxime quo soluta! Ut, numquam quia!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            consectetur adipisicing elit. Inventore harum ratione, illo
            temporibus facilis at rem quos magni rerum dolor, totam distinctio
            et, voluptate maxime quo soluta! Ut, numquam quia!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            consectetur adipisicing elit. Inventore harum ratione, illo
            temporibus facilis at rem quos magni rerum dolor, totam distinctio
            et, voluptate maxime quo soluta! Ut, numquam quia!
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
}

export default About;