import './App.css';
import React, {useState} from 'react';


import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import Posts from '../../components/Posts';
import * as S from './styles';
function Home() {
  const [filterActived, setFilterActived] = useState('Todos');


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
        <Posts/>
      </S.ContainerPostagem>
      
      <Footer/>

    </>
  );
}

export default Home;
