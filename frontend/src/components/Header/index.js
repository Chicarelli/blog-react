import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header () {
    return(
        <S.Container>
            <S.Logo>Blog do Rafael</S.Logo>
            <Link to="/">INÍCIO</Link>
            <a href="#">SOBRE NÓS</a>
            <a href="#">CONTATO</a>
            <Link to="/novopost">NOVO POST</Link>
        </S.Container>
    );
}

export default Header;