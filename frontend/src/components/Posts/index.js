import React, { useEffect } from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';



function Posts({title, subtitle, content, link}){

    useEffect(()=> {
        document.getElementsByTagName('section').innerHTML = content;
    })

    return (
        <S.Container>
            <h1> {title} </h1>
            <h3>{subtitle}</h3>
            <section dangerouslySetInnerHTML={{ __html : content}}></section>
            <Link to={`/post/${link}`}>Ver mais</Link>
        </S.Container>
    );

    
}

export default Posts;