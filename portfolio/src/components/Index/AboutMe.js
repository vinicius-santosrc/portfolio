import TitleSection from "./TitleSection";

export default function AboutMe() {

    const Data = new Date()
    const Year = Data.getFullYear()

    const IdadeAtual = Year - 2006

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
                    <p>Como desenvolvedor júnior, possuo muito conhecimento para desenvolver aplições que envolvem <b>banco de dados</b> e que buscam a <b>flexibilidade limpa</b> em todos os aparelhos. Procuro cada vez mais deixar meu código otimizado e limpo para que seja fácil a busca de dados e informações.</p>

                    <p><b>Tenho {IdadeAtual} anos.</b> Além de programar gosto de praticar alguns esportes como basquete e futebol, gosto de jogar poker e truco, tocar muita guitarra e de sair com amigos e familiares. Sempre tive vontade de desenvolver aplicativos e jogos e quando comecei com HTML5 em 2020 eu me apaixonei.</p>
                </div>
            </div>
        </section>

    )
}