import github from "@/public/images/github.png";
import discord from "@/public/images/discord.png";
import Image from "next/image";
import Link from "next/link";
import { Join } from "../button";

// learner and contributors card
export const Box = ({count, description}) => {
    return (
        <div className="p-3 md:py-5 md:px-6 lg:py-6 lg:px-12 xl:p-8 rounded-lg border border-solid border-[#dbdbdb] text-center shadow-lg w-full">
            <p className="text-[13px] xs:text-[15px] lg:text-[20px] xl:text-[24px] font-semibold mb-2">{count}</p>
            <p className="text-[12px] xs:text-[14px] lg:text-[18px] xl:text-[20px] font-normal">{description}</p>
        </div>
    )
}

// github card
export const BoxGithub = () => {
    return (
        <div className="p-5 xs:p-6 sm:p-8 rounded-lg border border-solid border-[#dbdbdb] shadow-lg w-full md:w-[60%] flex flex-col gap-8">
            <figure className="flex items-center flex-col md:flex-row gap-5 justify-center">
                <Image className="w-10 xs:w-12" src={github} alt="github"/>
                <figcaption className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#1a1a1a]">Open Source</figcaption>
            </figure>
            <p className="text-[13px] md:text-[14px] lg:text-[16px]">
                Kami sangat mengupayakan agar Kamu tidak sendiri, dalam belajar bersama kami, kami juga yakin ada beberapa orang baik yang ingin berbagi ilmu bersama kita sehingga kita memiliki kurikulum yang dimana anda dapat berkontribusi kedalamnya
            </p>
            <p className="text-[13px] md:text-[14px] lg:text-[16px]">
                Cari tau <Link className="text-[#E53D19] underline" href="/">cara kontribusi</Link> !
            </p>
        </div>
    )
}

// discord card
export const BoxDiscord = () => {
    return (
        <div className="p-5 xs:p-6 sm:p-8 rounded-lg border border-solid border-[#dbdbdb] shadow-lg w-full md:w-[40%] text-center">
            <figure className="flex flex-col justify-center items-center gap-4 mb-5">
                <Image className="w-10 xs:w-12" src={discord} alt="discord logo"/>
                <figcaption className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-[#1a1a1a]">LessCode Comunity</figcaption>
                <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium lg:font-semibold text-[#2A9D8F]">&bull; 1199 online</span>
            </figure>
            <Join />
        </div>
    )
}


