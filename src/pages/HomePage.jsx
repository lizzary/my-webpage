import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Beyond from "../components/sections/Beyond";
import Contact from "../components/sections/Contact";

export default function HomePage() {
    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#03040b] text-white antialiased selection:bg-indigo-500/40 selection:text-white">
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Beyond/>
            <Contact/>
            <Footer/>
        </main>
    );
}
