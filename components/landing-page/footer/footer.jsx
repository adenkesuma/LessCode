import logo from "@/public/images/logo.png";
import Image from "next/image";
import footerImg from "@/public/images/footer-img.png";
import { LinkFooter, SocialMedia } from "./link-footer";

const Footer = () => {
    return (
        <footer className="border-t border-solid border-[#dbdbdb] pt-4">
            
            {/* footer content */}
            <div className="md:flex md:justify-between my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-6 text-center">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-6 md:gap-8 justify-start">
                        <figure className="flex items-center gap-3 xl:gap-5">
                            <Image className="w-8 md:w-9 lg:w-[40px]" src={logo} alt="logo" w={200} h={200}/>
                            <figcaption className="text-[14px] lg:text-[18px] font-medium md:font-semibold xl:font-bold">LessCode</figcaption>
                        </figure>
                        <p className="text-left text-[13px] md:text-[14px] lg:text-[16px] md:text-left">
                            Dapatkan Pelajaran Coding Berkualitas<br className="hidden md:block"/> oleh Komunitas Open Source
                        </p>
                        <SocialMedia />
                        <span className="hidden md:block">
                            <LinkFooter />
                        </span>
                    </div>
                </div>

                <div className="flex justify-between items-end my-6">
                    <span className="block md:hidden">
                        <LinkFooter />
                    </span>
                    <figure>
                        <Image className="w-32 xs:w-40 sm:w-56 md:w-64 lg:w-80" src={footerImg} alt="footer image"/>
                    </figure>
                </div>
            </div>

            {/* footer copyright */}
            <div className="p-5 xs:p-6 md:p-8 bg-[#264653] w-full text-center">
                <p className="text-[13px] md:text-[14px] font-light lg:text-[16px] text-[#fff]">LessCode Copyright | 2023</p>
            </div>
        </footer>
    )
}

export default Footer;