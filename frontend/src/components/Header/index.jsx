import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header () {
    const [tema, setTema] = useState("Tema Escuro");


    const changeTema = () => {
        if(tema == "Tema Escuro"){
            setTema("Tema Claro");
        } else {
            setTema("Tema Escuro");
        }
    }

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
                    <li onClick={changeTema}>{tema}</li>
                    </ul>
                </S.Dropdown>
            </S.Config>
        </S.Container>
    );
}

export default Header;