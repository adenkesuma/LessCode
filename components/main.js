import Header from "./landing-page/header/header";
import Navbar from "./landing-page/header/navbar";
import About from './landing-page/about/about';
import Course from './landing-page/courses/course';
import Testimonials from "./landing-page/testimonials/testimonials";
import Faq from "./landing-page/faq/faq";
import Footer from "./landing-page/footer/footer";

const Main = () => {
    return (
        <div>
            <header>
                <Navbar />
                <Header />
            </header>
            <main>
                <About />
                <Course />
                <Testimonials />
                <Faq />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main;