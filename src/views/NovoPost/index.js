import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

function NovoPost(){
    return(
        <>
        <Header/>
        <S.Container>
            <S.Form>
                <S.Input>
                    <label>TÍTULO</label>
                    <input type="text" maxlength="95"placeholder="Nome"></input>
                </S.Input>

                <S.Input>
                    <label>SUB-TITULO</label>
                    <input type="text" placeholder="Sub-titulo"></input>
                </S.Input>

                <S.Input>
                    <label id="label-textarea">POST</label>
                    <textarea rows="17" cols="5" placeholder="Content"></textarea>
                </S.Input>
                <S.Button onclick="verificarCampos">
                    Salvar
                </S.Button>
            </S.Form>
        </S.Container>
        <Footer/>
        </>
    );
}


export default NovoPost;