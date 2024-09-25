import React from "react";
import MagicButton from "./ui/MagicButton";
import { IoIosMail } from "react-icons/io";
import { socialMedia } from "@/data";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full pt-20 mb-[60px] pb-10 md:mb-5" id="contact">
      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to<span className="text-purple"> connect </span>or explore ideas
          together?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:mirza.huc@gmail.com">
          <MagicButton
            title="Let’s get in touch"
            icon={<IoIosMail />}
            position="left"
          />
        </a>
      </div>
      <div className="flex mt-20 md:flex-row justify-between flex-col items-center gap-y-2">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Mirza Husic
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={profile.link}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
          <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <a
              href="https://drive.google.com/file/d/1b1oZK0T5rs0WR7JFw53XAMf2GG7pwKv1/view?usp=sharing"
              target="_blank"
            >
              <TbFileCv size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
