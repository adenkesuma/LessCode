import Link from "next/link";

export const StartNow = () => {
    return (
        <div className="flex justify-center">
            <button className="w-full sm:w-[400px] md:w-[180px] xl:w-[220px] bg-[#264653] py-3 px-6 md:py-[10px] md:px-5 xl:py-[14px] rounded-lg text-white text-[16px] md:text-[14px] lg:text-[15px] xl:text-[20px] font-medium">
                <Link href="/auth/signUp">Mulai Sekarang</Link>
            </button>
        </div>
    )
}

export const SignIn = () => {
    return (
        <div className="flex justify-center">
            <button className="w-full sm:w-[400px] md:w-[120px] xl:w-[150px] bg-white border-solid border-2 border-[#264653] py-[10px] px-6 md:py-[8px] md:px-6 xl:py-[12px] text-[16px] md:text-[14px] lg:text-[15px] xl:text-[20px] font-medium rounded-lg text-[#264653]">
                <Link href="/auth/signIn">Sign In</Link>
            </button>
        </div>
    )
}

export const Join = () => {
    return (
        <div className="flex justify-center">
            <button className="bg-[#264653] py-3 px-5 rounded-lg text-white text-[16px] md:text-[14px] lg:text-[15px] xl:text-[18px] font-medium
            ">Join Sekarang</button>
        </div>
    )
}