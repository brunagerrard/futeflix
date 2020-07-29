import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../src/assets/imgs/Logo.png'; //foi necessário voltar a um nível superior pra acessar assets
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <Link to='/'>
                <img className="Logo" src={Logo} alt="BruFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu; 