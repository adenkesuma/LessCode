import Image from "next/image";

const Card = ({title, paragraf, profile, subTitle}) => {
    return (
        <div className="p-5 xs:p-6 sm:p-8 border border-solid border-[#dbdbdb] rounded-xl shadow-lg">
            <div className="flex items-center flex-col md:flex-row gap-4 mb-4 text-center md:text-left">
                <Image className="w-10 sm:w-12" src={profile} alt="profile image"/>
                <div className="flex flex-col">
                    <p className="font-semibold text-[16px] sm:text-[18px]">{title}</p>
                    <span className="text-[12px] md:text-[13px] text-[#E53D19]">{subTitle}</span>
                </div>
            </div>
            <p className="text-center md:text-left text-[13px] xs:text-[14px] lg:text-[15px] xl:text-[18px] text-[#1a1a1a]">{paragraf}</p>
        </div>
    )
}

export default Card;