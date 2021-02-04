import './App.css';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Posts from '../../components/Posts';
import * as S from './styles';
function Home() {
  const [filterActived, setFilterActived] = useState('Todos');
  const [posts, setPosts] = useState([]);

  async function loadPost(){
    await api.get('/post/all')
    .then(response => {
      setPosts(response.data);
    });
  }

  useEffect(() => {
    loadPost();
  }, []); 

  return (
    <>
      <Header/>
      <S.FilterCategories>
      <button type="button" onClick={() => setFilterActived('Todos')} >
        <Categories title="Todos os posts" 
        actived={filterActived === 'Todos'}/>
      </button>
      <button type="button" onClick={()=> setFilterActived('css')} >  
        <Categories title="CSS" 
        actived={filterActived === 'css'}/> 
      </button>
      <button type="button" onClick={() => setFilterActived('react')} >
        <Categories title="React" 
        actived={filterActived === 'react'}/>
      </button>
      <button type="button" onClick={() => setFilterActived('javascript')}>   
        <Categories title="JavaScript" 
        actived={filterActived === 'javascript'}/>
      </button>
      <button type="button" onClick={() => setFilterActived('angular')} >  
        <Categories title="Angular" 
        actived={filterActived === 'angular'}/>
      </button>
      </S.FilterCategories>
      
      <S.ContainerPostagem>
        {
          posts.map(post => (
              <Posts key={post._id} title={post.title} subtitle={post.subtitle} content={post.content} link={post._id}/>
          ))
        }
      </S.ContainerPostagem>
      
      <Footer/>

    </>
  );
}

export default Home;
