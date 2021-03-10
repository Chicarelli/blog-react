import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import { ThemeProvider } from "styled-components";

import Home from "../views/Home";
import NovoPost from "../views/NovoPost";
import Post from "../views/Post";

export default function Routes() {
  const [tema, setTema] = useState(themes.light);


    const changeTema = () => {
    tema === themes.light ? setTema(themes.dark) : setTema(themes.light);

  };

  return (
    <BrowserRouter>
      <Switch>
        <ThemeContext.Provider value={{ tema, setTema, changeTema }}>
          <ThemeProvider theme={{tema}}>
            <Route path="/" exact component={Home} />
            <Route path="/novopost" exact component={NovoPost} />
            <Route path="/post/:id" exact component={Post} />
            <Route path="/editPost/:id" exact component={NovoPost} />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
