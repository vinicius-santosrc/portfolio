/* Components */
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutMe from "../components/Index/AboutMe";
import Contato from "../components/Index/Contato";
import Habilidades from "../components/Index/Habilidades";
import PrincipalCardSection from "../components/Index/Principal-Card-Section";
import Projects from "../components/Index/Projects";
import WorkTogether from "../components/Index/WorkTogether";

/* STYLES IMPORTS */


import '../styles/Index.css'

export default function Index() {
    return (
        <div className="Content-Index">
            <Header />
            <div className="PageIndexCont">
                <PrincipalCardSection />
                <AboutMe />
                <Habilidades />
                <Projects />
                <Contato />
                <WorkTogether />
            </div>
            <Footer />
        </div>
    )
}