import Navbar from "@/components/landing-page/header/navbar";
import Footer from "@/components/landing-page/footer/footer";

const Course = () => {
    return (
        <>
            <Navbar />
                <div className="mt-[73px] h-[100vh] w-full grid grid-cols-2">
                    <div className="w-[30%] bg-black"></div>
                    <h2>Course</h2>
                </div>
            <Footer />
        </>
    )
}

export default Course;