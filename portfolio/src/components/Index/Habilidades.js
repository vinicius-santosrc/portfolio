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
                            <li>Angular</li>
                            <li>TypeScript</li>
                            {/* <li>RxJS</li> */}
                            {/* <li>Angular</li> */}
                            <li>SCSS / SASS</li>
                            <li>i18n</li>
                            <li>Responsividade</li>
                            <li>UI/UX moderno</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-code"></i> Back End</h1>
                    </div>
                    <div className="back-end-skills-middle">
                        <ul>
                            <li>C#</li>
                            <li>.NET</li>
                            {/* <li>ASP.NET Core</li> */}
                            {/* <li>Clean Architecture</li> */}
                            <li>MongoDB</li>
                            <li>SignalR</li>
                            <li>GraphQL</li>
                            <li>REST APIs</li>
                            <li>JWT</li>
                            <li>Node</li>
                            <li>MySQL</li>
                            <li>C++</li>
                        </ul>
                    </div>
                </div>
                <div className="section-cardswrap-information-content-front-end-skills">
                    <div className="skills-card">
                        <h1><i className="fa-solid fa-toolbox"></i> Ferramentas & Dev</h1>
                    </div>
                    <div className="other-end-skills-middle">
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Docker (em aprendizado)</li>
                            <li>Vercel</li>
                            <li>Render</li>
                            <li>Figma</li>
                            <li>Swagger</li>
                            <li>WebSocket</li>
                            <li>WebRTC</li>
                            <li>Otimização de performance</li>
                            <li>Deploy Full Stack</li>
                            <li>Inglês Intermediário</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}