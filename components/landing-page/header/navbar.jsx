import Link from "next/link";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { StartNow } from "../button";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav className="fixed right-0 left-0 top-0 flex justify-between items-center bg-white bg-opacity-20 backdrop-blur-lg border-b border-[#dbdbdb] p-3 sm:p-5 lg:px-10 lg:py-3 xl:px-14">

            {/* hamburger menu icon */}
            <span className="inline-block order-2 md:hidden">
                <FontAwesomeIcon className="w-7 h-7 text-[#1a1a1a]" icon={faBars} />
            </span>

            {/* logo navbar */}
            <figure className="order-1 flex justify-center items-center gap-3 xl:gap-5">
                <Image className="w-8 md:w-9 lg:w-[40px]" src={logo} alt="logo" w={200} h={200}/>
                <figcaption className="text-[14px] lg:text-[18px] font-medium md:font-semibold xl:font-bold">LessCode</figcaption>
            </figure>

            {/* link navbar */}
            <div className="hidden md:order-2 md:flex justify-center items-center md:gap-6 lg:gap-8">
                <ul className="flex justify-center text-center md:gap-6 lg:gap-8 list-none">
                    <li>
                        <a className="text-[14px] md:text-[14px] xl:text-[16px] font-medium" href="#about">About</a>
                    </li>
                    <li>
                        <a className="text-[14px] md:text-[14px] xl:text-[16px] font-medium" href="#course">Course</a>
                    </li>
                    <li>
                        <a className="text-[14px] md:text-[14px] xl:text-[16px] font-medium" href="#faq">FAQ</a>
                    </li>
                    <li>
                        <Link className="text-[14px] md:text-[14px] xl:text-[16px] font-medium" href="/auth/signIn">Sign In</Link>
                    </li> 
                </ul>
                <StartNow />
            </div>

            {/* user icon */}
            <span className="inline-block xs:hidden">
                <FontAwesomeIcon className="w-6 h-6 text-[#1a1a1a]" icon={faUser}/>
            </span>
        </nav>
    )
}

export default Navbar;