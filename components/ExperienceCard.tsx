'use client'

import React from "react";
import { motion } from "framer-motion";


type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 snap-center bg-[#292929] p-10 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className=" w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://i.pinimg.com/236x/0f/8a/08/0f8a080f392832f3e3a89466703027fc.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">About MySelf</h4>
        <p className="font-bold text-2xl mt-1">Gipsy</p>
        <div className="flex space-x-2 my-2 ">
          <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" className="h-10 w-10 rounded-full" alt="js logo" />
          <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" className="h-10 w-10 rounded-full" alt="html logo" />
          <img src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" className="h-10 w-10 rounded-full" alt="css logo" />
          <img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" className="h-10 w-10 rounded-full" alt="css logo" />
        </div>
        <p className="uppercase py-5 text-gray-300">Start: End:</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
