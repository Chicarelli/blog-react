import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header () {

    function showConfig(){
        
    }

    return(
        <S.Container>
            <S.Logo>Blog</S.Logo>
            <Link to="/">INÍCIO</Link>
            <a href="#">SOBRE NÓS</a>
            <a href="#">CONTATO</a>
            <Link to="/novopost">NOVO POST</Link>

            <S.Config onclick={showConfig}>
                <S.Dropdown>
                    <ul className="dropdown-content">
                    <li>Tema Claro</li>
                    <li>Tema Escuro</li> 
                    </ul>
                </S.Dropdown>
            </S.Config>
        </S.Container>
    );
}

export default Header;