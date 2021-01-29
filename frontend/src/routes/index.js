import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import NovoPost from '../views/NovoPost';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route patch="/novopost" exact component={NovoPost}/>
            </Switch>
        </BrowserRouter>
    );
}