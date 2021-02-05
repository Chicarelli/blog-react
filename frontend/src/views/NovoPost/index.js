import React, {useEffect, useState} from 'react';
import {Editor} from '@tinymce/tinymce-react';
import api from '../../services/api';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import lixeira from './assets/trash.png'

import * as S from './styles';

function NovoPost({match}){
    const [titulo, setTitulo] = useState('');
    const [subtitulo, setSubtitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    let history = useHistory();

    async function verificarPost(){
        await api.get(`/post/${match.params.id}`)
        .then(response => {
            setTitulo(response.data.title);
            setSubtitulo(response.data.subtitle);
            setConteudo(response.data.content);
        })
        .catch(error => '');
    }

    function verificarDados(){
        if(titulo.replace(/\s/g, '') === ''){
           alert("Digite um titulo");
        } else 
        if(conteudo.replace(/\s/, '') === ''){
            alert("Digite um texto");
        } else {
            salvar();
        }
    }

    async function salvar(){
        if(match.params.id){
            await api.put(`/post/update/${match.params.id}`, {
                "title": titulo, 
                "subtitle": subtitulo, 
                "content": conteudo
            })
            .then(() => 
            history.push('/'));
        } else {
            await api.post('/post', {
                "title": titulo, 
                "subtitle": subtitulo, 
                "content": conteudo
            })
            .then(() => 
            history.push('/'));
        }
    }   

    function confirmDelete(){
        if(window.confirm("Deseja excluir este post?")) deleteTask();
    }

    async function deleteTask(){
        await api.delete(`/post/delete/${match.params.id}`)
        .then(response => {
            history.push('/');
        })
    }

    useEffect(()=> {
        if(match.params.id){
            verificarPost();
        }
    }, [verificarPost, match.params.id])


  
    return(
        <>
        <Header/>
        <S.Container>
       
            <S.Form  onSubmit={e => {e.preventDefault(); verificarDados(e)}}>
                <S.Input>
                    <label>TÍTULO</label>
                    <input value={titulo} id="inputTitulo" type="text" maxLength="95"placeholder="Nome"
                    onChange={e => setTitulo(e.target.value)}></input>
                </S.Input>
                <S.Input>
                    <label>SUB-TITULO</label>
                    <input value={subtitulo} type="text" id="inputSubtitulo" placeholder="Sub-titulo"
                    onChange={e => setSubtitulo(e.target.value)}></input>
                </S.Input>

                <S.Input>
                    <label id="label-textarea">POST</label>
                    <Editor  value={conteudo}
                        id="inputTexto"
                        init={{
                        height: 500,
                        menubar: false,
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
                <S.Buttons>
                    <S.Button type="submit">
                        Salvar
                    </S.Button>  

                    {match.params.id && 
                    <S.Excluir>
                          <img src={lixeira} alt="Delete post" onClick={confirmDelete}/>
                    </S.Excluir>}
                </S.Buttons>
               
            </S.Form>
        </S.Container>
        <Footer/>
        </>
    );
}





export default NovoPost;