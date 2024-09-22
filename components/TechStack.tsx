import { technologies } from "@/data";
import React from "react";

const TechStack = () => {
  return (
    <div className="pb-20">
      <h1 className="heading">
        My tech<span className="text-purple"> stack</span>
      </h1>
      <div className="flex items-center flex-wrap justify-center mt-10 md:gap-16 gap-4">
        {technologies.map((technology) => (
          <div key={technology.id} className="flex md:max-w-60 max-w-32 gap-2">
            <img
              src={technology.img}
              alt={technology.name}
              className="md:w-16 w-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
