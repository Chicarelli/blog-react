import './App.css';
import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Posts from '../../components/Posts';
import * as S from './styles';
function Home() {
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
      <S.ContainerPostagem>
        {
          posts.map(post => (
              <Posts key={post._id} title={post.title} subtitle={post.subtitle} content={post.content} link={post._id} data={post.when}/>
          ))
        }
      </S.ContainerPostagem>
      
      <Footer/>

    </>
  );
}

export default Home;
