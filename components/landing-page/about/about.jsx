import { Box, BoxDiscord, BoxGithub } from "./box";
import SubHeader from './../subHeader';

const About = () => {
    // initial object about subHeader
    const aboutText = {
        title: "Tentang kami",
        paragraf: " LesCode adalah salah satu Platform belajar Web Development Free Source. Karena kami yakin tidak semua orang memiliki akses ke pendidikan ilmu komputer atau dana yang cukup untuk menghadiri sekolah. Lescode ini dirancang untuk membantu para calon developer yang ingin mencoba web development secara otodidak dengan silabus yang progresif dan berkualitas dari kami."
    }

    return (
        <section id="about" className="my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-12 text-center mt-3">
            {/* subheader about */}
            <SubHeader 
                title={aboutText.title}
                paragraf={aboutText.paragraf}
            />
            <h3 className="text-[18px] xs:text-[25px] sm:text-[28px] lg:text-[30px] xl:text-[35px] font-bold text-[#E53D19] text-center">Kamu tidak sendiri</h3>

            {/* about layout */}
            <div>
                <div className="flex justify-center gap-3 mt-5 w-full">
                    <Box count="1199" description="Learners"/>
                    <Box count="100+" description="Contributors"/>
                </div>
                <div className="flex justify-center flex-col md:flex-row gap-5 mt-5 w-full">
                    <BoxGithub />
                    <BoxDiscord />
                </div>
            </div>
        </section>
    )
}

export default About;