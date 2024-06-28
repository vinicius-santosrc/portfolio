/* Router Hooks */
import { Link } from "react-router-dom";

/* STYLE */

import '../styles/HeaderStyles.css'
import { useState } from "react";

export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false)



    return (
        <header className="header-app">
            <div className="header-app-leftside">
                <h1>VINÍCIUS SANTOS</h1>
                <h2>Desenvolvedor Front-End</h2>
            </div>
            {menuOpen ?
                <menu className="menu-mobile">
                    <div className="menu-mobile-top">
                        <button onClick={() => { setMenuOpen(false) }}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="menu-mobile-options">
                        <div className="option-menu-mobile">
                            <span>
                                <a onClick={() => {setMenuOpen(false)}} href='#' className="header-app-link">Início</a>
                            </span>
                        </div>

                        <div className="option-menu-mobile">
                            <span>
                                <a onClick={() => {setMenuOpen(false)}} href='#sobremim' className="header-app-link">Sobre</a>
                            </span>
                        </div>

                        <div className="option-menu-mobile">
                            <span>
                                <a onClick={() => {setMenuOpen(false)}} href='#habilidades' className="header-app-link">Habilidades</a>
                            </span>
                        </div>
                        <div className="option-menu-mobile">
                            <span>
                                <a onClick={() => {setMenuOpen(false)}} href='#projects' className="header-app-link">Projetos</a>
                            </span>
                        </div>
                        <div className="option-menu-mobile">
                            <span>
                                <a onClick={() => {setMenuOpen(false)}} href='#contatos' className="header-app-link">Contato</a>
                            </span>
                        </div>
                    </div>
                </menu>
                :
                null
            }
            <div className="header-app-middle">
                <div className="header-app-middle-buttons">
                    <span>
                        <a href='#' className="header-app-link">Início</a>
                    </span>
                    <span>
                        <a href='#sobremim' className="header-app-link">Sobre</a>
                    </span>
                    <span>
                        <a href='#habilidades' className="header-app-link">Habilidades</a>
                    </span>
                    <span>
                        <a href='#projects' className="header-app-link">Projetos</a>
                    </span>
                    <span>
                        <a href='#contatos' className="header-app-link">Contato</a>
                    </span>
                </div>
                <div className="header-app-middle-buttons-mobile">
                    <button onClick={() => { setMenuOpen(true) }}><i className="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </header>
    )
}