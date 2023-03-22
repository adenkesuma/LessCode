import { TitleCourse } from './box';
import { Box } from './box';
import { CourseHtml } from './box';
import css from "@/public/images/css.png";
import js from "@/public/images/js.png";
import SubHeader from './../subHeader';

const Course = () => {
    // initial object course subHeader
    const courseText = {
        title: "Course",
        paragraf: "Mulai Pembelajaran anda secara gratis dengan materi pembelajaran yang berkualitas, kami percaya kamu bisa menyelesaikannya dan menjadi bibit calon developer untuk kemajuan developer kedepannya"
    }

    return (
        <section id="course" className="my-0 mx-auto xl:w-[1200px] p-[20px] xs:p-[30px] sm:px-[50px] sm:py-[35px] md:px-[55] lg:px-[80px] xl:mt-12 text-center mt-3">
            {/* course subHeader */}
            <SubHeader 
                title={courseText.title}
                paragraf={courseText.paragraf}
            />
            <TitleCourse title="Dasar"/>

            {/* course html */}
            <CourseHtml />
            <TitleCourse title="Design & Integrasi" />

            {/* courses css and javascript */}
            <div className="flex justif-center flex-col md:flex-row gap-5">
                <Box 
                    title="CSS 3 Dasar"
                    paragraf="CSS 3 mendukung kemampuan visual sebuah web, tanpa adanya CSS, Halaman Web akan sangat membosankan"
                    logo={css}
                />
                <Box
                    title="Javascript Dasar"
                    paragraf="JavaScript memberikan integritas pada web , tanpa adanya JavaScript Sebuah Web akan semu dan tidak  Interaktif"
                    logo={js} 
                />
            </div>
        </section>
    )
}

export default Course;