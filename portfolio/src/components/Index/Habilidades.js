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
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Angular (Aprendendo)</li>
                            <li>Typescript</li>
                            <li>Tailwind CSS</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-code"></i> Back End</h1>
                    </div>
                    <div className="back-end-skills-middle">
                        <ul>
                            <li>NodeJS</li>
                            <li>C++ (Aprendendo)</li>
                            <li>MySQL</li>
                            <li>Appwrite</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-toolbox"></i> Outros</h1>
                    </div>
                    <div className="other-end-skills-middle">
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Inglês Intermediário</li>
                            <li>Vercel</li>
                            <li>Netlify</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}