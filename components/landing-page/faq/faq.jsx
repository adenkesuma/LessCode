import Dropdown from "./dropdown";
import SubHeader from './../subHeader';

const Faq = () => {
    // initial object faq subHeader
    const Faq = {
        title: "FAQ",
        paragraf: "FAQ (Frequently Ask Question), berisi beberapa pertanyaan yang sering ditanyakan oleh para calon Web Developer yang ingin  belajar menggunakan Lescode"
    }

    return (
        <section id="faq" className="my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-8 text-center mt-3">
            {/* faq subheader */}
            <SubHeader
                title={Faq.title}
                paragraf={Faq.paragraf}
            />

            {/* faqs features */}
            <div className="flex flex-col gap-5">
                <Dropdown 
                    paragraf="Apakah LessCode akan berbayar kedepanya ?"
                    desc="Lesscode didedikasikan secara Open Source, sehingga anda dapat menikmati kurikulum Lescode secara Gratis"    
                />
                <Dropdown 
                    paragraf="Apakah komunitas Lescode hanya berisi Orang yang Hebat ?"
                    desc="Comunitas Lesscode berisi para developer hebat di dalam maupun luar negri"
                />
                <Dropdown 
                    paragraf="Apakah Kurikulum Lescode mudah dimengerti ?"
                    desc="Kurikulum Lesscode sangat friendly dan mudah dimengerti, terkhususnya untuk pemula"
                />
            </div>
        </section>
    )
}

export default Faq;