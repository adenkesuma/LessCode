import Link from "next/link";
import Image from "next/image";
import github from "@/public/images/github.png";
import facebook from "@/public/images/facebook.png";
import discord from "@/public/images/discord.png";
import instagram from "@/public/images/instagram.png";

// link menu footer
export const LinkFooter = () => {
    return (
        <ul className="flex flex-col justify-start items-start gap-1 sm:gap-2 md:gap-4 lg:gap-6 md:flex-row">
            <li>
                <Link className="text-[12px] md:text-[13px] lg:text-[16px]" href="/">About</Link>
            </li>
            <li>
                <Link className="text-[12px] md:text-[13px] lg:text-[16px]" href="/">FAQ</Link>
            </li>
            <li>
                <Link className="text-[12px] md:text-[13px] lg:text-[16px]" href="/">Course</Link>
            </li>
            <li>
                <Link className="text-[12px] md:text-[13px] lg:text-[16px]" href="/">Contribute</Link>
            </li>
            <li>
                <Link className="text-[12px] md:text-[13px] lg:text-[16px]" href="/">Terms of use</Link>
            </li>
        </ul>
    )
}

// social medialist 
export const SocialMedia = () => {
    return (
        <ul className="flex justify-start items-center gap-6">
            <li>
                <Link href="/">
                    <Image className="w-4 md:w-5 lg:w-7" src={github} alt="github"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-4 md:w-5 lg:w-7" src={discord} alt="discord"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-4 md:w-5 lg:w-7" src={facebook} alt="facebook"/>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <Image className="w-4 md:w-5 lg:w-7" src={instagram} alt="instagram"/>
                </Link>
            </li>
        </ul>
    )
}