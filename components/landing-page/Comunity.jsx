import github from "@/public/images/github.png";
import Image from "next/image";

const Comunity = () => {
    return (
      <div className="mt-10 my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-12 text-center">
        <div className="bg-[#00094B] rounded-lg py-9 px-12 flex flex-col gap-4 md:flex-row md:px-6 lg:py-12">
          <div className="border-b flex flex-col items-center gap-6 pb-6 md:w-[50%] md:border-r md:border-b-0 md:flex-row md:justify-center md:pb-2 md:gap-8 lg:gap-10">
            <div>
              <span className="text-[30px] font-semibold text-[#ffffff] lg:text-[34px]">
                1199
              </span>
              <p className="text-[16px] font-light text-[#ffffff]">Pelajar Aktif</p>
            </div>
            <div>
              <span className="text-[30px] font-semibold text-[#ffffff] lg:text-[34px]">
                100+
              </span>
              <p className="text-[16px] font-light text-[#ffffff]">Kontributor</p>
            </div>
          </div>
          <div className="pt-4 flex flex-col justify-center items-center md:w-[50%] md:flex-row md:gap-4 md:pt-0 lg:gap-8">
            <Image src={github} alt="github logo" />
            <div className="mt-6 md:mt-0">
              <span className="text-[24px] text-[#ffffff] lg:text-[30px]">Open Source</span>
              <p className="text-[16px] font-light text-[#ffffff]">Komunitas Gitub</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Comunity;
