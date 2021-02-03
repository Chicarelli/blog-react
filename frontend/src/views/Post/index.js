import React, { useEffect, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Post({match}){
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');

    async function carregarPost(){
        await api.get(`/post/${match.params.id}`)
        .then(response => {
            setTitle(response.data.title);
            setSubtitle(response.data.subtitle);
            setContent(response.data.content); 
            console.log(response.data.title, response.data.subtitle, response.data.content);
        });
    }

    useEffect(() => {
        carregarPost();
    });
    return(
        <>
            <Header/>
            <S.Container>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <section dangerouslySetInnerHTML={{__html : content}}></section>
            </S.Container>
            <Footer/>
        </>
    );
}

export default Post;