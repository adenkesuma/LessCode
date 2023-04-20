import Link from "next/link";

export const StartNow = () => {
    return (
      <div className="flex justify-center">
        <button className="w-full md:w-full bg-[#E53D19] py-2 px-6 md:py-2 md:px-4 rounded-lg text-white text-[14px] md:text-[14px] font-light">
          <Link href="/auth/signUp">Mulai Sekarang</Link>
        </button>
      </div>
    );
}

export const SignIn = () => {
    return (
      <div className="flex justify-center">
        <button className="w-full md:w-full py-2 px-6 md:py-3 pmd:px-8 bg-white border-solid border-2 border-[#E53D19] md:px-6 xl:py-[12px] text-[14px] md:text-[16px] font-medium rounded-lg text-[#E53D19]">
          <Link href="/auth/signIn">Sign In</Link>
        </button>
      </div>
    );
}

export const Join = () => {
    return (
        <div className="flex justify-center">
            <button className="bg-[#264653] py-3 px-5 rounded-lg text-white text-[14px] md:text-[16px] font-light
            ">Join Sekarang</button>
        </div>
    )
}