import React from "react";
import SearchBar from "../SearchBar";
import heroImage from "../../assets/images/remoto-hero.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="md:h-96 h-56 w-full flex flex-col items-center justify-center">
      <div className="absolute md:h-96 h-56 left-0 w-full overflow-hidden -z-1">
        <div className="absolute md:h-96 left-0 w-full overflow-hidden bg-opacity-30 bg-purple-700" />
        <Image
          className="rounded-none -z-2"
          src={heroImage}
          alt="hero"
          layout="responsive"
          quality={100}
          priority={true}
          placeholder="blur"
        />
      </div>
      <div>
        <h1 className="text-white text-xl md:text-3xl text-center md:mb-4 font-bold z-10">
          Vagas dev para trabalhar de onde quiser.
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
