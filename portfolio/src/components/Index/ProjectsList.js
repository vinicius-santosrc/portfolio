import { useEffect, useState } from "react"
import { AngularIcon, AppwriteIcon, CSharpIcon, CSS3Icon, JavascriptIcon, JWTIcon, MongoIcon, MySQLIcon, NodeIcon, ReactIcon, StripeIcon, TypescriptIcon, WebSocketIcon, WRTCIcon } from "./tecnologias/IconsWrap";
export default function ProjectComponent() {

    const [ProjectsList, setProjectsList] = useState("")

    const Projects = [
        {
            "image": "./static/media/dump.webp",
            "nome": "Dump 📱",
            "periodo": "2025 - 2026",
            "desc": <p>Dump é uma <u>rede social full stack</u> em desenvolvimento, criada para compartilhar momentos, posts, vídeos curtos e interações em tempo real. A plataforma conta com <b>feed inteligente, dumps/reels, stories/memories, curtidas, comentários, perfil de usuário, explorar, notificações e chat em tempo real</b>. O projeto também utiliza uma arquitetura moderna com Angular, .NET, MongoDB, SignalR, GraphQL, autenticação JWT e foco em performance, responsividade e experiência próxima de grandes redes sociais.</p>,
            "tecnologias":
                <div className="list-tec">
                    <AngularIcon />
                    <TypescriptIcon />
                    <CSharpIcon />
                    <MongoIcon />
                    <WebSocketIcon />
                    <WRTCIcon />
                </div>,
            "repositoryurl": "https://github.com/vinicius-santosrc/dump_software",
            "livedemo": "https://dump-software.vercel.app/"

        },
        {
            "image": "./static/media/laris-acessorios.fef1251u95u18.webp",
            "nome": "Laris Acessórios 💎",
            "periodo": "2025",
            "desc": <p>Laris Acessórios é uma <u>loja virtual</u> onde é vendido jóias, perfumes e acessórios femininos. É possível <u>adicionar itens a sacola</u> e realizar o checkout efetuando o pagamento via Stripe. Os administradores tem acesso ao Dashboard, onde é possível <b>configurar e adicionar produtos</b>, fazer planos semanais, visualizar pedidos, alterar imagens de dentro do sistema e entre outras opções.</p>,
            "tecnologias":
                <div className="list-tec">
                    <ReactIcon />
                    <NodeIcon />
                    <MySQLIcon />
                    <JWTIcon />
                    <StripeIcon />
                </div>,
            "repositoryurl": "https://github.com/vinicius-santosrc/laris_acessorios-3.0",
            "livedemo": "https://www.larisacessorios.com.br/"

        },
        {
            "image": "./static/media/comtodorespeito.png",
            "nome": "COM TODO RESPEITO 🕶️",
            "periodo": "2024",
            "desc": <p>Escolha seu estilo favorito na COM TODO RESPEITO INC, aqui você poderá escolher camisetas, corta-ventos, moletons e muito mais. <b>E-commerce completo com sistemas de sacolas e checkout por WhatsApp</b>.</p>,
            "tecnologias":
                <div className="list-tec">
                    <ReactIcon />
                    <MySQLIcon />
                    <AppwriteIcon />
                    <NodeIcon />
                    <JavascriptIcon />
                    <CSS3Icon />
                </div>,
            "repositoryurl": "https://github.com/vinicius-santosrc/vns_closet",
            "livedemo": "http://comtodorespeito.vercel.app/"

        },
        {
            "image": "./static/media/landingpagestart.png",
            "nome": "LANDING PAGE START 🏋🏽💪🏼",
            "periodo": "2023",
            "desc": <p>Descubra a Revolução Fitness - Transforme Seu Estilo de Vida, Alcance Seus Objetivos! Landing Page somente em Front-End</p>,
            "tecnologias":
                <div className="list-tec">
                    <ReactIcon />
                    <CSS3Icon />
                </div>,
            "repositoryurl": "https://github.com/vinicius-santosrc/startapp-lading-page",
            "livedemo": "https://startapp-web.vercel.app/"

        }
    ]


    useEffect(() => {
        getProjects();
    }, []);

    function getProjects() {
        setProjectsList(Projects.map((project, index) => {
            if (index % 2 || window.screen.width < 640 || window.screen.height < 480) {
                return (
                    <div className="project-content-item-show">
                        <div className="project-content-item-show-leftside">
                            <img className="notebook-wrapper" src={window.location.origin + "/static/media/notebook-bg.fe141t145y24.webp"} />
                            <img className="website-wrapper" src={project.image} />
                        </div>
                        <div className="project-content-item-show-rightside">
                            <div className="project-content-item-show-rightside-top">
                                <h1>{project.nome}</h1>
                                <p>{project.periodo}</p>
                            </div>
                            <div className="project-content-item-show-rightside-middle">
                                {project.desc}
                                <div className="tecnologias-project">
                                    {project.tecnologias}
                                </div>
                            </div>
                            <div className="project-content-item-show-rightside-bottom">
                                <a href={project.repositoryurl} target="_blank">Repositório <i className="fa-solid fa-code"></i></a>
                                <a href={project.livedemo} target="_blank">Live Demo <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className="project-content-item-show">

                        <div className="project-content-item-show-rightside">
                            <div className="project-content-item-show-rightside-top">
                                <h1>{project.nome}</h1>
                                <p>{project.periodo}</p>
                            </div>
                            <div className="project-content-item-show-rightside-middle">
                                {project.desc}
                                <div className="tecnologias-project">
                                    {project.tecnologias}
                                </div>
                            </div>
                            <div className="project-content-item-show-rightside-bottom">
                                <a href={project.repositoryurl} target="_blank">Repositório <i className="fa-solid fa-code"></i></a>
                                <a href={project.livedemo} target="_blank">Live Demo <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                        <div className="project-content-item-show-leftside">
                            <img className="notebook-wrapper" src={window.location.origin + "/static/media/notebook-bg.fe141t145y24.webp"} />
                            <img className="website-wrapper" src={project.image} />
                        </div>
                    </div>
                )
            }
        }))
    };



    return (
        <>{ProjectsList}</>
    )
}