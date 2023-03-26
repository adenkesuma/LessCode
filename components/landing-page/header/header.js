import hero from "@/public/images/hero.png";
import Image from "next/image";
import { SignIn, StartNow } from "../button";
import styled from "@/styles/Home.module.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-0 mx-auto xl:w-[1200px] md:justify-between flex-col gap-16 pt-28 px-[20px] xs:px-[30px] sm:pt-32 sm:px-[50px] md:px-[55px] lg:px-[80px] xl:pt-[170px] md:pb-12 md:flex-row md:gap-10 lg:gap-16 md:pt-32">

      {/* title and cta hero header */}
      <div className="flex flex-col gap-5 xl:gap-8 order-3 md:order-1 md:text-left">
        <h1 className="text-[28px] xs:text-[45px] sm:text-[48px] md:text-[45px] lg:text-[55px] xl:text-[70px] text-center md:text-left font-bold text-[#E53D19] leading-tight">
          Start With Less haha <br /> 
          <span className="text-[#1a1a1a] font-bold">than Nothing</span>
        </h1>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-normal text-center md:text-left text-[#1a1a1a]">
          Kurikulum Full Stack yang Gratis dan didukung oleh Komunitas <br className="hidden xl:block"/>Open Source yang Antusias.
        </p>
        <div className="flex flex-col md:flex-row gap-3 w-full">
            <StartNow />
            <SignIn />
        </div>
      </div>

      {/* image hero header */}
      <figure className="inline-block text-center order-1 md:order-3">
        <Image className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[320px] lg:w-[340px] xl:w-[360px]" src={hero} alt="hero banner"/>
      </figure>
    </header>
  )
}

export default Header;
