import React from "react";
import SearchBar from "../SearchBar";
import heroImage from "../../assets/images/remoto-hero.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="md:h-96 h-56 md:-mt-20 -mt-36 w-full flex flex-col items-center justify-center">
      <div className="absolute md:h-96 h-56 left-0 w-full overflow-hidden -z-1">
        <div className="absolute h-56 md:h-96 left-0 w-full overflow-hidden bg-opacity-10 md:bg-opacity-30 bg-purple-500" />
        <Image
          className="rounded-none -z-2 opacity-90"
          src={heroImage}
          alt="hero"
          layout="responsive"
          quality={100}
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="mt-28 md:mt-20 ">
        <h1 className="text-gray-800 text-xl p-1 rounded md:text-3xl text-center md:flex hidden md:mb-4 font-bold z-10">
          Vagas dev para trabalhar de onde quiser.
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
