import Link from "next/link";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { StartNow } from "../button";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav className="fixed right-0 left-0 top-0 flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border-b border-[#dbdbdb] p-3 sm:p-5 lg:px-10 lg:py-5 xl:px-14">

            {/* hamburger menu icon */}
            <span className="inline-block md:hidden">
                <FontAwesomeIcon className="w-7 h-7 text-[#1a1a1a]" icon={faBars} />
            </span>

            {/* logo navbar */}
            <figure className="flex justify-center items-center gap-3 xl:gap-5">
                <Image className="w-8 md:w-9 lg:w-12 xl:w-[50px]" src={logo} alt="logo" w={200} h={200}/>
                <figcaption className="text-[16px] lg:text-[18px] xl:text-[24px] font-medium md:font-semibold xl:font-bold">LessCode</figcaption>
            </figure>

            {/* link navbar */}
            <div className="hidden md:flex justify-center items-center md:gap-6 lg:gap-8">
                <ul className="flex justify-center text-center md:gap-6 lg:gap-8 list-none">
                    <li>
                        <a className="md:text-[14px] lg:text-[16px] xl:text-[20px] font-medium" href="#about">About</a>
                    </li>
                    <li>
                        <a className="md:text-[14px] lg:text-[16px] xl:text-[20px] font-medium" href="#course">Course</a>
                    </li>
                    <li>
                        <a className="md:text-[14px] lg:text-[16px] xl:text-[20px] font-medium" href="#faq">FAQ</a>
                    </li>
                    <li>
                        <Link className="md:text-[14px] lg:text-[16px] xl:text-[20px] font-medium" href="/signin">Sign In</Link>
                    </li> 
                </ul>
                <StartNow />
            </div>

            {/* user icon */}
            <span className="inline-block md:hidden">
                <FontAwesomeIcon className="w-6 h-6 text-[#1a1a1a]" icon={faUser}/>
            </span>
        </nav>
    )
}

export default Navbar;