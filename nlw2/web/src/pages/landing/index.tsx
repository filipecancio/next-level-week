import React from 'react';
import logoImage from '../../assets/images/logo.svg'
import landingImage from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpeHeartIcon from '../../assets/images/icons/purple-heart.svg'
import  './styles.css';

function Landing(){
    return (
        <>
            <div id="page-landing">
                <div id="page-landing-content" className="container">
                <div className="logo-container">
                <img src={logoImage} alt="proffy"/>
                <h2>Sua Plataforma de estudos online.</h2>
                </div>
                <img src={landingImage} className="hero-image"/>
                

                <div className="buttons-continer">
                    <a href="" className="study">
                        <img src={studyIcon} />
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} />
                        Dar Aulas
                    </a>
                </div>
                <span className="total-container">
                    Total de 200 conexões já realizadas <img src={purpeHeartIcon} />
                </span>
                </div>
            </div>
        </>
    )
}

export default Landing;