import peopleSponsor from "@/public/Images/people-sponsor.png";
import Image from "next/image";
import Card from "./card";

const About = () => {

    return (
        <section
            id="about"
            className="my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-12 text-center mt-3"
        >
            <figure className="flex justify-center items-center">
                <Image src={peopleSponsor} alt="people sponsor" />
            </figure>
            <div>
                <h3 className="text-[28px] font-semibold mb-8 text-[#00094B]">
                    Kenapa harus memilih LessCode ?
                </h3>
                <div className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col gap-8">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex flex-col gap-8">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;