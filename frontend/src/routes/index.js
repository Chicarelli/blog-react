import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import NovoPost from '../views/NovoPost';
import Post from '../views/Post';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/novopost" exact component={NovoPost}/>
                <Route path="/post/:id" exact component={Post}/>
            </Switch>
        </BrowserRouter>
    );
}