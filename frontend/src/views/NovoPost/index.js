import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

function NovoPost(){
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [conteudo, setConteudo] = useState('');

    function verificarCampo(){
        if(titulo == '')
            return alert('Preencha um título');
        if(conteudo == '')
            return alert('Insira um texto');
        save();
    }

    function save(){
        alert("Salvo!");
    }
    return(
        <>
        <Header/>
        <S.Container>
            <S.Form>
                <S.Input>
                    <label>TÍTULO</label>
                    <input type="text" id="inputTitulo" maxlength="95"placeholder="Nome"
                    onChange={e => setTitulo(e.target.value) }></input>
                </S.Input>

                <S.Input>
                    <label>SUB-TITULO</label>
                    <input type="text" id="inputSubtitulo" placeholder="Sub-titulo"
                    onChange={e => setSubtitulo(e.target.value)}></input>
                </S.Input>

                <S.Input>
                    <label id="label-textarea">POST</label>
                    <textarea rows="17" id="inputConteudo" cols="5" placeholder="Content"
                    onChange={e => setConteudo(e.target.value)}></textarea>
                </S.Input>
                <S.Button onClick={verificarCampo}>
                    Salvar
                </S.Button>
            </S.Form>
        </S.Container>
        <Footer/>
        </>
    );
}


export default NovoPost;