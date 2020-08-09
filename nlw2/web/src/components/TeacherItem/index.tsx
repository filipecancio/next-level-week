import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/13178261?s=460&u=a4096072f66f48c990bda1c373b96257370cf52e&v=4" alt="Filipe Câncio"/>
                <div>
                    <strong>Filipe Câncio</strong>
                    <span>Desenvolvedor Web</span>
                </div>
            </header>
            <p>
                Técnico em Eletromecânica e Estudante de Sistemas de Informação no IFBA Vitória da Conquista, desenvolvedor web e ilustrador.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;