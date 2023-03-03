import Navbar from "@/components/landing-page/header/navbar";
import Footer from "@/components/landing-page/footer/footer";
import Link from "next/link";

const NewPassword = () => {
    return (
        <div className="relative">
            <Navbar />
            <div className="mt-32 flex flex-col justify-center items-center">
                <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">Mengganti Password</h2>
                <form className="flex flex-col justify-center align-center border border-[#dbdbdb] border-solid rounded-lg shadow-xl p-8">
                    <label htmlFor="password" className="font-semibold text-[16px] mb-2">Password</label>
                    <input 
                        className="border-[#dbdbdb] border-solid border rounded-md block py-2 px-5 w-72 md:w-80 mb-5"
                        type="password" 
                        id="password" 
                        name="password" 
                    />
                    <label htmlFor="confirm-password" className="font-semibold text-[16px] mb-2">Konfirmasi Password</label>
                    <input 
                        className="border-[#dbdbdb] border-solid border rounded-md block py-2 px-5 w-72 md:w-80 mb-6"
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                    />
                    <button className="w-full py-2 px-3 bg-[#264653] text-[#fff] rounded-lg">
                        <Link href="/auth/signIn">Ganti Password</Link>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default NewPassword;