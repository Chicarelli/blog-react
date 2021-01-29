import React from 'react';
import * as S from './styles';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Post(){
    return(
        <>
            <Header/>
            <S.Container>
                <h1>Titulo aqui</h1>
                <h2>Subtitulo aqui</h2>
                <p>Conteudo aqui</p>
            </S.Container>
            <Footer/>
        </>
    );
}

export default Post;