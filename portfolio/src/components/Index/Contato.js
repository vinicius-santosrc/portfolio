import { Link } from "react-router-dom";
import TitleSection from "./TitleSection";

export default function Contato() {
    return (
        <section className="section-cardswrap-information" id="contatos">
            <TitleSection
                header="ENTRE EM CONTATO"
                subheader="CONVERSE COMIGO"
            />
            <div className="section-cardswrap-information-content">
                <div className="section-contato-information-content">
                    <div className="contato-card">
                        <div className="contato-card-left">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="contato-card-right">
                            <h2>E-mail</h2>
                            <a href="mailto:viniciusssantos.pa@gmail.com">viniciusssantos.pa@gmail.com</a>
                        </div>
                    </div>
                    <div className="contato-card">
                        <div className="contato-card-left">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className="contato-card-right">
                            <h2>Instagram</h2>
                            <a href="https://www.instagram.com/vinicius_santosrc/" target="_blank">@vinicius_santosrc</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}