import TitleSection from "./TitleSection";

export default function AboutMe() {

    const Data = new Date();
    const Year = Data.getFullYear();

    const IdadeAtual = Year - 2006;

    return (
        <section className="section-cardswrap-information" id="sobremim">
            <TitleSection
                header="SOBRE MIM"
                subheader="CONHECENDO"
            />
            <div className="section-cardswrap-information-content-about">
                <div className="section-cardswrap-information-content-left">
                    <img src="static/media/aboutmephotos.webp" />
                </div>
                <div className="section-cardswrap-information-content-right">
                    <h1>VÍNICIUS DA SILVA SANTOS</h1>
                    <p>Sou um desenvolvedor com experiência no desenvolvimento de aplicações que integram banco de dados e são projetadas para oferecer uma experiência limpa e responsiva em diferentes dispositivos. Procuro sempre em escrever códigos limpos e bem estruturados, priorizando a legibilidade, manutenibilidade e desempenho.
                        Atualmente com <b>{IdadeAtual} anos</b>, sou apaixonado por tecnologia desde 2020, quando tive meu primeiro contato com HTML5 — desde então, desenvolvo projetos com entusiasmo, especialmente nas áreas de aplicativos e jogos. Fora da programação, gosto de praticar esportes como basquete e futebol, jogar poker, tocar guitarra e aproveitar momentos com amigos e familiares.
                        Estou sempre em busca de novos aprendizados e desafios que me permitam evoluir como desenvolvedor e como pessoa.</p>
                </div>
            </div>
        </section>

    )
}