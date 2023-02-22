import Link from "next/link";
import Image from "next/image";
import github from "@/public/images/github.png";
import facebook from "@/public/images/facebook.png";
import discord from "@/public/images/discord.png";
import instagram from "@/public/images/instagram.png";

export const LinkFooter = () => {
    return (
        <ul className="flex flex-col justify-start items-start gap-1 sm:gap-2 md:gap-4 lg:gap-6">
            <li>
                <Link className="text-[12px] xs:text-[13px] lg:text-[15px] xl:text-[18px]" href="/">About</Link>
            </li>
            <li>
                <Link className="text-[12px] xs:text-[13px] lg:text-[15px] xl:text-[18px]" href="/">FAQ</Link>
            </li>
            <li>
                <Link className="text-[12px] xs:text-[13px] lg:text-[15px] xl:text-[18px]" href="/">Course</Link>
            </li>
            <li>
                <Link className="text-[12px] xs:text-[13px] lg:text-[15px] xl:text-[18px]" href="/">Contribute</Link>
            </li>
            <li>
                <Link className="text-[12px] xs:text-[13px] lg:text-[15px] xl:text-[18px]" href="/">Terms of use</Link>
            </li>
        </ul>
    )
}

export const SocialMedia = () => {
    return (
        <ul className="flex justify-start items-center gap-6">
            <li>
                <Link href="/">
                    <Image className="w-5 md:w-7 lg:w-9" src={github} alt="github"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-5 md:w-7 lg:w-9" src={discord} alt="discord"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-5 md:w-7 lg:w-9" src={facebook} alt="facebook"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-5 md:w-7 lg:w-9" src={instagram} alt="instagram"/>
                </Link>
            </li>
        </ul>
    )
}