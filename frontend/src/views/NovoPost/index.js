import React, {useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import api from '../../services/api';
import {Redirect, useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

function NovoPost(){

    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    let history = useHistory();

    function verificarDados(){
        if(titulo.replace(/\s/g, '') == ''){
           alert("Digite um titulo");
        } else 
        if(conteudo.replace(/\s/, '') == ''){
            alert("Digite um texto");
        } else {
            salvar();
        }
    }

    async function salvar(){
        await api.post('/post', {
            "title": titulo, 
            "subtitle": subtitulo, 
            "content": conteudo
        })
        .then(() => 
        history.push('/'));
    }   

  
    return(
        <>
        <Header/>
        <S.Container>
       
            <S.Form  onSubmit={e => {e.preventDefault(); verificarDados(e)}}>
                <S.Input>
                    <label>TÍTULO</label>
                    <input  id="inputTitulo" type="text" id="inputTitulo" maxlength="95"placeholder="Nome"
                    onChange={e => setTitulo(e.target.value) }></input>
                </S.Input>
                <S.Input>
                    <label>SUB-TITULO</label>
                    <input type="text" id="inputSubtitulo" placeholder="Sub-titulo"
                    onChange={e => setSubtitulo(e.target.value)}></input>
                </S.Input>

                <S.Input>
                    <label id="label-textarea">POST</label>
                    <Editor id="inputTexto"
                        init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image', 
                            'charmap print preview anchor help',
                            'searchreplace visualblocks code',
                            'insertdatetime media table paste wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | \
                            alignleft aligncenter alignright | \
                            bullist numlist outdent indent | help'
                        }}
                        onChange={ e => setConteudo(e.target.getContent())}
                    />
                </S.Input>
                <S.Button type="submit">
                    Salvar
                </S.Button>
            </S.Form>
        </S.Container>
        <Footer/>
        </>
    );
}





export default NovoPost;