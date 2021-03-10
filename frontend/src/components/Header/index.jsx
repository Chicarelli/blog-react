import React, { useContext } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import {ThemeContext} from '../../contexts/ThemeContext';

function Header() {
  const {tema, changeTema} = useContext(ThemeContext);
  return (
    <S.Container>
      <S.Logo>Blog</S.Logo>
      <Link to="/">INÍCIO</Link>
      <a href="/">SOBRE NÓS</a>
      <a href="/">CONTATO</a>
      <Link to="/novopost">NOVO POST</Link>
      <S.Config>
        <label>
          <input type="checkbox" onClick={changeTema}/>
          <span></span>
        </label>
      </S.Config>
    </S.Container>
  );
}

export default Header;
