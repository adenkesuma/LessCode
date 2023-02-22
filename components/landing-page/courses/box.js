import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styled from "@/styles/Home.module.css";
import Image from "next/image";
import html from "@/public/images/html.png";

// couse css and javascript cards
export const Box = ({ title, paragraf, logo}) => {
    return (
        <div className="p-5 xs:p-6 sm:p-8 lg:p-12 border border-solid border-[#dbdbdb] rounded-xl shadow-lg flex flex-col items-center gap-5">
            <Image className="w-[90px] sm:w-[100px] md:w-[90px] md:h-[100px] lg:w-[120px] lg:h-[135px]" src={logo} alt="logo"/>
            <h3 className="text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#264653] font-semibold">{title}</h3>
            <p className="text-center text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] text-[#1a1a1a]">{paragraf}</p>
            <div className="flex justify-center items-center gap-5">
                <span className="text-[#E53D19] text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] font-semibold">Lihat materi</span>
                <FontAwesomeIcon icon={faArrowRight}/>
            </div>
        </div>
    )
}

// course html card
export const CourseHtml = () => {
    return (
        <div className="p-5 xs:p-6 sm:p-8 lg:p-12 border border-solid border-[#dbdbdb] rounded-xl shadow-lg flex justify-center items-center flex-col md:flex-row gap-10 lg:gap-12">
            <Image className="w-[90px] sm:w-[100px] md:w-[90px] md:h-[100px] lg:w-[120px] lg:h-[135px]" src={html} alt="html logo"/>
            <div className="flex flex-col gap-5 md:gap-3 md:text-left">
                <h3 className="font-semibold text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#264653]">HTML 5 Dasar</h3>
                <p className="text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] text-[#1a1a1a]">
                    Dalam mempelajari Web Development HTML 5 menjadi hal yang paling mendasar, di dalam silabus ini anda akan diajarkan HTML 5 dari awal sampai akhir dengan Penjelasan Video, Lisan & Tertulis
                </p>
                <div className="flex justify-center items-center gap-3 md:justify-start">
                    <span className="text-[#E53D19] text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] font-semibold">Lihat materi</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
            </div>
        </div>
    )
}

// title course  
export const TitleCourse = ({ title }) => {
    return (
        <div className={styled.lineText}>{title}</div>
    )
}