import React, { useEffect } from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';



function Posts({title, subtitle, content, link, data}){

    useEffect(()=> {
        document.getElementsByTagName('section').innerHTML = content;
    })
    var date = new Date(data);
    const dataFormatada = format(date, 'dd/MM/yyy');

    return (
        <S.Container>
            <h1> {title} </h1>
            <h3>{subtitle}</h3>
            <section dangerouslySetInnerHTML={{ __html : content}}></section>
            <Link to={`/post/${link}`}>Ver mais</Link>
            <span>Criado em: {dataFormatada}</span>
        </S.Container>
    );

    
}

export default Posts;