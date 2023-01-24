"use client";

import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    console.log(formData);
    window.location.href = `mailto:mohamedibrahim0807@gmail?subject=${formData.subject}&body=${formData.message}`;
  };
  return (
    <div className="h-screen relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 py-10 justify-evenly mx-auto items-center">
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mx-auto"> */}
     <div className="flex items-center mt-10" >
     <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mx-auto">
        Contact
      </h3>
     </div>
      <div className="flex flex-col mt-10">
        {/* <h4 className="text-xl md:text-xl font-semibold text-center">
          I have got just what you need,{" "}
          <span className="decoration-[#f7ab8a]/50 underline">Lets talk</span>
        </h4> */}
        <div className="space-y-10 ">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#f7ab9a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">7695865146</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className="text-[#f7ab9a] h-7 w-7 animate-pulse" />
            <p className="text-xl">mohamedibrahim0807@gmail.com</p>
          </div>
          {/* <div className="flex items-center space-x-5 justify-center ">
            <MapPinIcon className="text-[#f7ab9a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">898674557</p>
          </div> */}
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          // className="flex flex-col space-y-2 w-fit mx-auto "
          className="flex flex-col space-y-2 md:w-fit md:mx-auto mt-10"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full "
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
