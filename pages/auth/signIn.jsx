import Link from "next/link";
import Discord from "@/public/images/discord.png";
import Google from "@/public/images/google.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Cookies from "js-cookie";

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/users/validate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    const data = await res.json();

    if (res?.status === 200) {
      toast.success("Berhasil masuk");
      Cookies.set("token", data?.token, { expires: 1 });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else toast.error(data?.message);
  };
  return (
    <div>
      <Toaster />
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">
          Masuk Ke Akun Anda
        </h2>
        <p className="text-[14px] mb-5">
          atau{" "}
          <Link
            href="/auth/signUp"
            className="underline text-[14px] text-[#e53d19]"
          >
            belum memiliki akun ?
          </Link>
        </p>
        <form
          className="flex flex-col justify-center align-center border border-[#dbdbdb] border-solid rounded-lg shadow-xl p-4 md:p-8"
          onChange={(e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="font-semibold text-[16px] mb-2">
            Alamat Email
          </label>
          <input
            className="border-[#dbdbdb] border-solid border rounded-md block py-[6px] px-3 md:py-2 md:px-5 w-72 md:w-80 mb-5"
            type="email"
            id="email"
            name="email"
          />
          <label htmlFor="password" className="font-semibold text-[16px] mb-2">
            Password
          </label>
          <input
            className="border-[#dbdbdb] border-solid border rounded-md block py-[6px] px-3 md:py-2 md:px-5 w-72 md:w-80"
            type="password"
            id="password"
            name="password"
          />
          <div className="flex items-center justify-between my-3">
            <span className="flex items-center">
              <input
                className="mr-2"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox" className="text-[14px] font-medium">
                Ingat Saya !
              </label>
            </span>
            <Link
              href="/auth/forgetPassword"
              className="text-[#E53D19] underline text-[14px]"
            >
              Lupa Password ?
            </Link>
          </div>
          <button className="w-full py-2 px-3 bg-[#264653] text-[#fff] rounded-lg mb-4">
            Masuk
          </button>
          <div className="flex items-center justify-center w-full gap-4">
            <button className="w-full font-semibold text-[14px] py-2 px-5 flex justify-center items-center gap-3 border border-[#dbdbdb] border-solid rounded-md shadow-lg">
              <Image className="w-5" src={Google} alt="logo google" />
              Google
            </button>
            <button className="w-full font-semibold text-[14px] py-2 px-5 flex justify-center items-center gap-3 border border-[#dbdbdb] border-solid rounded-md shadow-lg">
              <Image className="w-5" src={Discord} alt="logo discord" />
              Discord
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
