import React from "react";
import SearchBar from "../SearchBar";
import heroImage from "../../assets/images/banner-img.jpg";
import bannerHero from "../../assets/images/world.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="taller h-56 sm:-mt-28 -mt-36 w-full flex flex-col items-center justify-center">
      <div className="absolute taller h-56 left-0 w-full overflow-hidden -z-1">
        <div className="absolute h-56 taller left-0 w-full overflow-hidden bg-opacity-20 sm:bg-opacity-20 bg-violet-700" />
        <Image
          className="rounded-none -z-2 opacity-90"
          src={heroImage}
          alt="hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="mt-28 sm:mt-20 flex flex-row gap-4 items-center">
        <div className="md:w-2/4 flex flex-col items-center">
          <h1 className="text-white text-xl p-1 rounded sm:text-3xl text-start sm:flex sm:justify-start hidden sm:mb-4 font-bold z-10">
            Vagas dev para trabalhar de onde quiser.
          </h1>
          <SearchBar />
        </div>

        <div className="md:flex hidden items-center justify-center w-2/4">
          <Image src={bannerHero} alt="world-hero" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
