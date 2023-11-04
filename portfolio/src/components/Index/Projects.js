import ProjectComponent from "./ProjectsList";
import TitleSection from "./TitleSection";

export default function Projects() {
    return (
        <section className="section-cardswrap-information" id="projects">
            <TitleSection
                header="MEUS PROJETOS"
                subheader="PRINCIPAIS PROJETOS"
            />
            <div className="section-cardswrap-information-content-projects">
                <ProjectComponent />
            </div>
        </section>

    )
}