import TitleSection from "./TitleSection";

export default function Habilidades() {
    return (
        <section className="section-cardswrap-information" id="habilidades">
            <TitleSection
                header="HABILIDADES"
                subheader="TECNOLOGIAS"
            />
            <div className="section-cardswrap-information-content">
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-wand-magic-sparkles"></i> Front End</h1>
                    </div>
                    <div className="front-end-skills-middle">
                        <ul>
                            <li>React</li>
                            <li>Angular</li>
                            <li>React Native</li>
                            <li>Typescript</li>
                            <li>Tailwind CSS</li>
                            <li>SASS</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-code"></i> Back End</h1>
                    </div>
                    <div className="back-end-skills-middle">
                        <ul>
                            <li>Node</li>
                            <li>MySQL</li>
                            <li>C++ (Aprendendo)</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-toolbox"></i> Outros</h1>
                    </div>
                    <div className="other-end-skills-middle">
                        <ul>
                            <li>Inglês Intermediário</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Figma</li>
                            <li>Vercel</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}