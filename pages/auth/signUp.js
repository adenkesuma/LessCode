import Link from "next/link";
import Discord from "@/public/images/discord.png";
import Google from "@/public/images/google.png";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: Math.floor(Math.random() * 90000) + 10000, //temporary static input
    firstName: Math.floor(Math.random() * 90000) + 10000, //temporary static input
    lastName: Math.floor(Math.random() * 90000) + 10000, //temporary static input
    email: "",
    password: "",
    confPassword: "",
    age: 17, //temporary static input
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/v1/users/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );
    const data = await res.json();
    if (res?.status === 201) {
      toast.success("Berhasil mendaftar");
      setTimeout(() => {
        router.push("/auth/signIn");
      }, 2000);
    } else toast.error(data?.message);
  };
  return (
    <div>
      <Toaster />
      <div className="h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] md:text-left">
          Daftar Gratis Sekarang
        </h2>
        <p className="text-[14px] mb-5">
          atau{" "}
          <Link
            href="/auth/signIn"
            className="underline text-[14px] text-[#e53d19]"
          >
            sudah memiliki akun ?
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
            className="border-[#dbdbdb] border-solid border rounded-md block py-[6px] px-3 md:py-2 md:px-5 w-72 md:w-80 mb-5"
            type="password"
            id="password"
            name="password"
          />
          <label
            htmlFor="confirm-password"
            className="font-semibold text-[16px] mb-2"
          >
            Konfirmasi Password
          </label>
          <input
            className="border-[#dbdbdb] border-solid border rounded-md block py-[6px] px-3 md:py-2 md:px-5 w-72 md:w-80"
            type="password"
            id="confirm-password"
            name="confPassword"
          />
          <p className="text-[14px] my-4">
            Dengan mendaftar berarti anda telah
            <br /> menyetujui persyaratan penggunaan kami
          </p>
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

export default SignUp;
