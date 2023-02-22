import people1 from "@/public/images/people-1.png";
import people2 from "@/public/images/people-2.png";
import HeaderSection from "../subHeader";
import Card from "./card";

const Testimonials = () => {
    const testimonials = {
        title: "Apa Kata Mereka ?",
        paragraf: "Para Alumni dan Kontributor mengutarakan perasaan mereka setelah belajar dan berbagi ilmu dengan Lescode, Yuk baca apa kata mereka !"
    }

    return (
        <section className="my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-8 text-center mt-3">
            <HeaderSection 
                title={testimonials.title}
                paragraf={testimonials.paragraf}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Card
                    title="Jenna Omega"
                    subTitle="Web Developer at March Group"
                    profile={people1}
                    paragraf="Komunitasnya Ramah, Lescode membantu saya dari 0 sampai saya menjadi seorang Web Developer yang bisa diandalkan" 
                />
                <Card
                    title="Along Carper"
                    subTitle="Freelance Full Satck Developer"
                    profile={people2}
                    paragraf="Saya sangata senang berbagi ilmu saya di Lescode, selain itu saya juga bsia bertukar pikiran dengan anggota komunitas" 
                />
            </div>
        </section>
    )
}

export default Testimonials;