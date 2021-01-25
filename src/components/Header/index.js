import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header () {
    return(
        <S.Container>
            <S.Logo>Blog do Rafael</S.Logo>
            <a href="#">INÍCIO</a>
            <a href="#">SOBRE NÓS</a>
            <a href="#">CONTATO</a>
        </S.Container>
    );
}

export default Header;