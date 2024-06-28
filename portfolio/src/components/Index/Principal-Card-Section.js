
import React from 'react';
/* ICONS LABELS */

import IconsLabels from './PrincipalCards-Svgs/ComponentIcons';
import { FirebaseIcon, AppwriteIcon, HTML5Icon, CSS3Icon, NodeIcon, ReactIcon, JavascriptIcon, MySQLIcon, AngularIcon, TypescriptIcon, TailwindCssIcon, CPPIcon } from './tecnologias/IconsWrap';
import { Link } from 'react-router-dom';

export default function PrincipalCardSection() {
    return (
        <section className="main-card-section">
            <div className="main-card-section-leftside">
                <div className="main-card-section-imagecontent">
                    <div className="main-card-section-imagecontent-circle-background"></div>
                    <img src={window.location.origin + '/static/media/picViniciusSt-dfe141fg1245y.webp'} />
                </div>
            </div>
            <div className="main-card-section-rightsidde">
                <div className="main-card-section-rightside-topinfo">
                    <h1>VINÍCIUS SANTOS</h1>
                    <p>Desde 2019 venho aprendendo diversos tipos linguagens de programação, porém acabei me aproximando da parte de <u>Desenvolvimento Web</u>. Pouso Alegre, Minas Gerais, Brasil. 📍</p>
                </div>
                <div className='main-card-section-rightside-buttons'>
                    <Link to={"https://www.linkedin.com/in/vinicius-santos-339428286/"} target='_blank'><i className="fa-brands fa-linkedin"></i> LinkedIn </Link>
                    <Link to={"https://github.com/vinicius-santosrc"} target='_blank'><i className="fa-brands fa-github"></i> GitHub </Link>
                </div>
                <div className="main-card-section-rightside-lang">
                    <ReactIcon />
                    <AngularIcon />
                    <CPPIcon />
                    <NodeIcon />
                    <MySQLIcon />
                    <TypescriptIcon />
                    <JavascriptIcon />
                    <TailwindCssIcon />
                    <CSS3Icon />
                    <HTML5Icon />
                    <AppwriteIcon />
                    <FirebaseIcon />
                </div>
            </div>
        </section>
    )
}