import Navbar from "@/components/landing-page/header/navbar";
import Footer from "@/components/landing-page/footer/footer";
import Link from "next/link";
import Discord from "@/public/images/discord.png";
import Google from "@/public/images/google.png";
import Image from "next/image";

const SignIn = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="mt-32 flex flex-col justify-center items-center">
                <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">Masuk Ke Akun Anda</h2>
                <p className="text-[14px] mb-5">atau <Link href="/auth/signUp" className="underline text-[14px] text-[#e53d19]">belum memiliki akun ?</Link></p>
                <form className="flex flex-col justify-center align-center border border-[#dbdbdb] border-solid rounded-lg shadow-xl p-8">
                    <label htmlFor="email" className="font-semibold text-[16px] mb-2">Alamat Email</label>
                    <input 
                        className="border-[#dbdbdb] border-solid border rounded-md block py-2 px-5 w-72 md:w-80 mb-5"
                        type="email" 
                        id="email" 
                        name="email" 
                    />
                    <label htmlFor="password" className="font-semibold text-[16px] mb-2">Password</label>
                    <input 
                        className="border-[#dbdbdb] border-solid border rounded-md block py-2 px-5 w-72 md:w-80"
                        type="password" 
                        id="password" 
                        name="password" 
                    />
                    <div className="flex justify-between items-center my-3">
                        <span className="flex items-center">   
                            <input className="mr-2" type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox" className="text-[14px] font-medium">Ingat Saya !</label>
                        </span>
                        <Link href="/auth/forgetPassword" className="text-[#E53D19] underline text-[14px]">Lupa Password ?</Link>
                    </div>
                    <button className="w-full py-2 px-3 bg-[#264653] text-[#fff] rounded-lg">Masuk</button>
                    <p className="text-[14px] text-center my-3">atau</p>
                    <div className="flex justify-center gap-4 items-center w-full">
                        <button className="w-full font-semibold text-[14px] py-2 px-5 flex justify-center items-center gap-3 border border-[#dbdbdb] border-solid rounded-md shadow-lg">
                            <Image className="w-5" src={Google} alt="logo google" />
                            Google
                        </button>
                        <button className="w-full font-semibold text-[14px] py-2 px-5 flex justify-center items-center gap-3 border border-[#dbdbdb] border-solid rounded-md shadow-lg">
                            <Image className="w-5" src={Discord} alt="logo discord"/>
                            Discord
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn;