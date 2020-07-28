import React from 'react';
import Logo from '../../../src/assets/imgs/Logo.png'; //foi necessário voltar a um nível superior pra acessar assets
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href='/'>
                <img className="Logo" src={Logo} alt="BruFlix logo" />
            </a>

            <Button className="ButtonLink" href='/'>
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu; 