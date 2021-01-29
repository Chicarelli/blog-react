import React, {useState} from 'react';
import tinymce, {Editor} from '@tinymce/tinymce-react';

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
            <S.Form >
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
                    <Editor 
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
                <S.Button type="submit" onClick={verificarCampo}>
                    Salvar
                </S.Button>
            </S.Form>
        </S.Container>
        <Footer/>
        </>
    );
}





export default NovoPost;