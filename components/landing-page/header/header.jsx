import hero from "@/public/images/hero-header.png";
import Image from "next/image";
import { SignIn, StartNow } from "../button";
import styled from "@/styles/Home.module.css";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-0 mx-auto xl:w-[1200px] md:justify-between flex-col gap-16 pt-28 px-[20px] xs:px-[30px] sm:pt-32 sm:px-[50px] md:px-[55px] lg:px-[80px] xl:pt-[130px] md:pb-12 md:flex-row md:gap-10 lg:gap-16 md:pt-32">
      {/* title and cta hero header */}
      <div className="flex flex-col gap-5 xl:gap-8 order-3 md:order-1 md:text-left">
        <h1 className="text-[28px] text-[#00094B] xs:text-[28px] sm:text-[30px] lg:text-[42px] xl:text-[48px] text-center md:text-left font-semibold leading-tight">
          <em>Start With Less</em> <br />
          <span className="font-bold">than Nothing</span>
          <br />
          With <span className="font-bold text-[#E53D19]">LessCode</span>
        </h1>
        <p className="text-[13px] md:text-[14px] lg:text-[16px] font-medium text-center md:text-left text-[#00094B]">
          Kurikulum Full Stack yang Gratis dan didukung oleh{" "}
          <br className="hidden xl:block" />
          Komunitas Open Source yang Antusias.
        </p>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <StartNow />
          <SignIn />
        </div>
      </div>

      {/* image hero header */}
      <figure className="inline-block text-center order-1 md:order-3">
        <Image
          className="w-[200px] xs:w-[250px] sm:w-[300px] md:w-[450px] lg:w-[400px] xl:w-[450px]"
          src={hero}
          alt="hero banner"
        />
      </figure>
    </header>
  );
}

export default Header;
